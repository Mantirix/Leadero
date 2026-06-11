import React from "react";
import { motion } from "framer-motion";
import FunnelVisual from "./FunnelVisual";

const LOGO_URL =
"https://media.base44.com/images/public/user_6871defb12e045744902bc91/3aaced89e_78b3f070c_image.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 lg:gap-24 items-center py-20 md:py-28">

        {/* LEFT — Copy */}
        <div className="flex flex-col">
          {/* Eyebrow logo — hidden on md+ since Navbar shows it */}
          <motion.img
            src={LOGO_URL}
            alt="Leadero"
            className="h-6 mb-12 w-auto object-contain object-left md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }} />
          

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#111827] leading-[1.05]">
            
            Turn Leads
            <br />
            Into{" "}
            <span className="text-[#8ECDF6]">Revenue.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 text-lg md:text-xl text-[#374151] font-medium leading-snug max-w-md">
            
            Leadero builds acquisition systems that turn advertising into booked
            opportunities.
          </motion.p>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-sm md:text-base text-[#6B7280] leading-relaxed max-w-sm">
            
            We launch, optimize, and automate customer acquisition so businesses
            spend less time chasing leads and more time growing.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-3">
            
            <a
              href="#cta"
              className="px-7 py-3.5 rounded-full bg-[#8ECDF6] text-white font-semibold text-sm hover:bg-[#74bfee] transition-colors shadow-[0_4px_20px_rgba(142,205,246,0.35)]">
              
              Book Strategy Call
            </a>
            <a
              href="#pricing"
              className="px-7 py-3.5 rounded-full text-[#111827] font-semibold text-sm hover:bg-[#F3FAFE] transition-colors">
              
              View Pricing
            </a>
          </motion.div>

          {/* Starting price */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-5 text-xs text-[#9CA3AF] tracking-wide">
            
            Starting at $1,000/month
          </motion.p>
        </div>

        {/* RIGHT — Funnel Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex items-center justify-center">
          <FunnelVisual />
        </motion.div>

      </div>
    </section>);

}