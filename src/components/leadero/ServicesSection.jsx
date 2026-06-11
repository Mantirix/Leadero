import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Repeat2 } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    title: "Predictable Acquisition",
    desc: "Generate a steady flow of qualified opportunities.",
  },
  {
    icon: Clock,
    title: "Operational Efficiency",
    desc: "Spend less time chasing leads and more time serving customers.",
  },
  {
    icon: Repeat2,
    title: "Built To Scale",
    desc: "Turn marketing into a repeatable growth system.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-12 md:py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest text-[#8ECDF6] text-center mb-4"
        >
          Why Businesses Choose Leadero
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#111827] tracking-tight"
        >
          Growth Should Pay For Itself.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-center text-sm md:text-base text-[#6B7280] leading-relaxed max-w-md mx-auto"
        >
          A lead system shouldn't feel like another expense.<br />
          It should create more opportunity than it costs.
        </motion.p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-[#DDF3FF] rounded-2xl p-7 shadow-[0_2px_16px_rgba(142,205,246,0.06)] hover:shadow-[0_4px_24px_rgba(142,205,246,0.12)] transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EEF7FE] flex items-center justify-center">
                <card.icon className="w-5 h-5 text-[#8ECDF6]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#111827]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm text-[#6B7280] leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center text-xs text-[#9CA3AF] tracking-wide"
        >
          Designed to create momentum—not overhead.
        </motion.p>
      </div>
    </section>
  );
}