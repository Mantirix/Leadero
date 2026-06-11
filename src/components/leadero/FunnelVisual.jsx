import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const STAGES = ["Traffic", "Leads", "Appointments", "Revenue"];

const CARD_W = 220;
const CARD_H = 60;
const GAP = 20; // space between bottom of card and top of next
const STEP = CARD_H + GAP;

const TOTAL_H = STAGES.length * CARD_H + (STAGES.length - 1) * GAP;

// Single canvas connecting all cards with a pulsing line + traveling dot
function ConnectorCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;

    // traveling dot state
    let t = 0;
    let animId;

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Pulsing static line
      const pulse = 0.35 + 0.2 * Math.sin(Date.now() / 600);

      ctx.beginPath();
      ctx.moveTo(W / 2, 0);
      ctx.lineTo(W / 2, H);
      ctx.strokeStyle = `rgba(142,205,246,${pulse})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Traveling dot
      t = (t + 0.004) % 1;
      const dotY = t * H;
      const fade = t < 0.05 ? t / 0.05 : t > 0.95 ? (1 - t) / 0.05 : 1;

      ctx.beginPath();
      ctx.arc(W / 2, dotY, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(142,205,246,${0.9 * fade})`;
      ctx.fill();

      // Soft glow around dot
      const grd = ctx.createRadialGradient(W / 2, dotY, 0, W / 2, dotY, 10);
      grd.addColorStop(0, `rgba(142,205,246,${0.3 * fade})`);
      grd.addColorStop(1, "rgba(142,205,246,0)");
      ctx.beginPath();
      ctx.arc(W / 2, dotY, 10, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={20}
      height={TOTAL_H - CARD_H}
      style={{
        position: "absolute",
        left: CARD_W / 2 - 10,
        top: CARD_H,
        width: 20,
        height: TOTAL_H - CARD_H,
        pointerEvents: "none",
      }}
    />
  );
}

export default function FunnelVisual() {
  return (
    <div
      style={{ position: "relative", width: CARD_W, height: TOTAL_H }}
      className="select-none"
    >
      {/* Single connector behind all cards */}
      <ConnectorCanvas />

      {STAGES.map((label, i) => {
        const top = i * STEP;
        const isLast = i === STAGES.length - 1;

        return (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1 + i * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              position: "absolute",
              left: 0,
              top,
              width: CARD_W,
              height: CARD_H,
              background: isLast
                ? "rgba(240,250,255,0.90)"
                : "rgba(255,255,255,0.85)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: `1px solid rgba(142,205,246,${isLast ? 0.55 : 0.22})`,
              borderRadius: 14,
              boxShadow: isLast
                ? "0 0 28px rgba(142,205,246,0.20), 0 4px 16px rgba(0,0,0,0.05)"
                : "0 2px 12px rgba(0,0,0,0.04), 0 0 0 0.5px rgba(142,205,246,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 22px",
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: isLast ? "#111827" : "#1F2937",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              {label}
            </span>

            {/* Pulsing accent dot */}
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.85, 1, 0.85] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: isLast ? "#8ECDF6" : "rgba(142,205,246,0.5)",
                boxShadow: isLast ? "0 0 10px rgba(142,205,246,0.9)" : "none",
                flexShrink: 0,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}