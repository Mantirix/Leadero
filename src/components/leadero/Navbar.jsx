import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://media.base44.com/images/public/user_6871defb12e045744902bc91/3aaced89e_78b3f070c_image.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
  { label: "Why Leadero", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" }];


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#DDF3FF]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="https://media.base44.com/images/public/6a2ae54d97fb5c760642cbad/ea533d136_ChatGPT_Image_Jun_11__2026__02_45_42_PM__1_.png" alt="Leadero" className="h-20" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-medium text-[#6B7280] hover:text-[#111827] transition-colors">
            
              {l.label}
            </a>
          )}
          <a
            href="#cta"
            className="text-sm font-semibold px-5 py-2.5 rounded-full bg-[#8ECDF6] text-white hover:bg-[#74bfee] transition-colors">
            
            Book Strategy Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#111827]">
          
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open &&
      <div className="md:hidden bg-white border-t border-[#DDF3FF] px-6 py-4 space-y-3">
          {links.map((l) =>
        <a
          key={l.href}
          href={l.href}
          onClick={() => setOpen(false)}
          className="block text-sm font-medium text-[#6B7280] hover:text-[#111827]">
          
              {l.label}
            </a>
        )}
          <a
          href="#cta"
          onClick={() => setOpen(false)}
          className="block text-center text-sm font-semibold px-5 py-2.5 rounded-full bg-[#8ECDF6] text-white">
          
            Book Strategy Call
          </a>
        </div>
      }
    </nav>);

}