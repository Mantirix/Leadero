import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import CoreWorkflowModal from "./CoreWorkflowModal";
import AutoWorkflowModal from "./AutoWorkflowModal";

const coreFeatures = [
  "Paid ad campaign management",
  "Custom ad strategy",
  "Funnel and lead capture setup",
  "Campaign optimization",
  "Lead delivery",
  "Monthly performance review",
];

const autoFeatures = [
  "Everything in Core",
  "AI caller automation",
  "Instant lead contact",
  "Lead qualification",
  "Automatic calendar booking",
  "Follow-up automation",
  "Personalized booking calendar",
];

export default function PricingSection() {
  const [showCore, setShowCore] = useState(false);
  const [showAuto, setShowAuto] = useState(false);

  return (
    <section id="pricing" className="relative py-12 md:py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest text-[#8ECDF6] text-center mb-4"
        >
          Our Pricing
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#111827] tracking-tight"
        >
          Simple Pricing For Serious Growth
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {/* Core */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-[#DDF3FF] rounded-2xl p-8 shadow-[0_2px_16px_rgba(142,205,246,0.06)] flex flex-col"
          >
            <h3 className="text-lg font-semibold text-[#111827]">
              Leadero Core
            </h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-[#111827]">$1,000</span>
              <span className="text-sm text-[#6B7280]">/month</span>
            </div>
            <p className="mt-4 text-sm text-[#6B7280] leading-relaxed">
              For businesses that want professionally managed lead generation
              while handling calls themselves.
            </p>

            <ul className="mt-6 space-y-3 flex-1">
              {coreFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-[#111827]">
                  <Check className="w-4 h-4 text-[#8ECDF6] mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs text-[#9CA3AF] italic">
              You call and book the leads yourself.
            </p>

            <a
              href="#cta"
              className="mt-6 block text-center px-6 py-3 rounded-full border-2 border-[#8ECDF6] text-[#8ECDF6] font-semibold text-sm hover:bg-[#f0f9ff] transition-colors"
            >
              Start With Core
            </a>
            <button
              onClick={() => setShowCore(true)}
              className="mt-2 block w-full text-center text-xs text-[#9CA3AF] hover:text-[#6B7280] transition-colors py-1.5"
            >
              See Workflow →
            </button>
          </motion.div>

          {/* Automation+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border-2 border-[#8ECDF6] rounded-2xl p-8 shadow-[0_4px_28px_rgba(142,205,246,0.14)] flex flex-col relative"
          >
            <div className="absolute -top-3.5 left-8 px-3 py-1 bg-[#8ECDF6] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
              Popular
            </div>

            <h3 className="text-lg font-semibold text-[#111827]">
              Leadero Automation+
            </h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-[#111827]">$1,500</span>
              <span className="text-sm text-[#6B7280]">/month</span>
            </div>
            <p className="mt-4 text-sm text-[#6B7280] leading-relaxed">
              For businesses that want leads contacted instantly and booked
              automatically.
            </p>

            <ul className="mt-6 space-y-3 flex-1">
              {autoFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-[#111827]">
                  <Check className="w-4 h-4 text-[#8ECDF6] mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs text-[#9CA3AF] italic">
              AI calls leads and books appointments for you.
            </p>

            <a
              href="#cta"
              className="mt-6 block text-center px-6 py-3 rounded-full bg-[#8ECDF6] text-white font-semibold text-sm hover:bg-[#74bfee] transition-colors"
            >
              Automate My Leads
            </a>
            <button
              onClick={() => setShowAuto(true)}
              className="mt-2 block w-full text-center text-xs text-[#9CA3AF] hover:text-[#6B7280] transition-colors py-1.5"
            >
              See Workflow →
            </button>
          </motion.div>
        </div>

        <p className="mt-8 text-center text-xs text-[#9CA3AF]">
          Ad spend is separate from the monthly service fee.
        </p>
      </div>

      {showCore && <CoreWorkflowModal onClose={() => setShowCore(false)} />}
      {showAuto && <AutoWorkflowModal onClose={() => setShowAuto(false)} />}
    </section>
  );
}