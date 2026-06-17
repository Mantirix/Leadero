import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I have to use the AI caller?",
    a: "No. The AI caller is optional. You can stay on Leadero Core and call the leads yourself.",
  },
  {
    q: "What happens when someone submits their information?",
    a: "The lead is captured through the funnel and delivered to your system. With Automation+, the AI caller contacts them automatically and can book them on your calendar.",
  },
  {
    q: "Is ad spend included?",
    a: "No. Ad spend is separate from the monthly service fee.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes. You can start with Core and upgrade to Automation+ when you are ready.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="relative py-12 md:py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest text-[#8ECDF6] text-center mb-4"
        >
          FAQs
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#111827] tracking-tight"
        >
          Questions Before You Start?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-[#DDF3FF] rounded-xl px-5 data-[state=open]:shadow-[0_2px_12px_rgba(142,205,246,0.08)]"
              >
                <AccordionTrigger className="text-sm font-semibold text-[#111827] py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#6B7280] leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          id="cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 md:mt-28 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">
            Ready To Turn Traffic Into Appointments?
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#6B7280] max-w-md mx-auto leading-relaxed">
            Build a lead system that helps your business grow with clarity,
            speed, and consistency.
          </p>
          <a
            href="https://start.leadero.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block px-8 py-3.5 rounded-full bg-[#8ECDF6] text-white font-semibold text-sm hover:bg-[#74bfee] transition-colors shadow-[0_4px_20px_rgba(142,205,246,0.35)]"
          >
            Book Strategy Call
          </a>
          <br />
          <a
            href="https://onboard.leadero.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block px-6 py-2.5 rounded-full border-2 border-[#8ECDF6] text-[#8ECDF6] font-semibold text-sm hover:bg-[#f0f9ff] hover:-translate-y-0.5 transition-all"
          >
            Onboard Now →
          </a>
          <p className="mt-2 text-[10px] text-[#9CA3AF]">For approved clients ready to get started.</p>
        </motion.div>
      </div>
    </section>
  );
}