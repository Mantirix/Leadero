import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const steps = [
  { label: "Launch Campaigns", desc: "We create and manage your advertising campaigns." },
  { label: "Generate Leads", desc: "Traffic is directed into optimized funnels and captured." },
  { label: "Deliver Opportunities", desc: "Qualified leads are delivered directly to your system." },
  { label: "Manual Follow-Up", desc: "Your team contacts leads and books appointments." },
  { label: "Grow", desc: "Convert opportunities into customers.", highlight: true },
];

function ParticlesCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      color: Math.random() > 0.5 ? "rgba(142,205,246," : "rgba(160,174,192,",
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + "0.35)";
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl" />;
}

export default function CoreWorkflowModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center px-4"
        style={{ background: "rgba(17,24,39,0.45)", backdropFilter: "blur(6px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white rounded-2xl shadow-[0_16px_60px_rgba(142,205,246,0.18)] w-full max-w-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <ParticlesCanvas />

          <div className="relative z-10 p-8 md:p-10">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-[#9CA3AF] hover:text-[#111827] transition-colors"
            >
              <X size={20} />
            </button>

            <p className="text-xs font-semibold uppercase tracking-widest text-[#8ECDF6] mb-2">Leadero Core</p>
            <h2 className="text-2xl font-bold text-[#111827] tracking-tight">How Leadero Core Works</h2>
            <p className="mt-1 text-sm text-[#6B7280]">You keep control of follow-up and appointment booking.</p>

            <div className="mt-8 flex flex-col gap-0">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${step.highlight ? "bg-[#8ECDF6] text-white shadow-[0_0_14px_rgba(142,205,246,0.5)]" : "bg-[#EFF9FF] text-[#8ECDF6] border border-[#DDF3FF]"}`}>
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 min-h-[28px] bg-gradient-to-b from-[#DDF3FF] to-[#DDF3FF] my-1" />
                    )}
                  </div>
                  <div className={`pb-5 ${step.highlight ? "mb-0" : ""}`}>
                    <p className={`text-sm font-semibold ${step.highlight ? "text-[#8ECDF6]" : "text-[#111827]"}`}>{step.label}</p>
                    <p className="text-xs text-[#6B7280] mt-0.5 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-2 text-xs text-[#9CA3AF] italic">Best for businesses that prefer direct customer interaction.</p>

            <a
              href="#cta"
              onClick={onClose}
              className="mt-6 inline-block px-6 py-3 rounded-full border-2 border-[#8ECDF6] text-[#8ECDF6] font-semibold text-sm hover:bg-[#f0f9ff] transition-colors"
            >
              Start With Core
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}