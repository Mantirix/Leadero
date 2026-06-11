import React, { useState } from "react";
import TermsModal from "./TermsModal";
import PrivacyModal from "./PrivacyModal";

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const links = [
  { label: "Why Leadero", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" }];


  return (
    <footer className="relative border-t border-[#DDF3FF] py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-3">
          <img src="https://media.base44.com/images/public/6a2ae54d97fb5c760642cbad/ea533d136_ChatGPT_Image_Jun_11__2026__02_45_42_PM__1_.png" alt="Leadero" className="h-12" />
          <p className="text-xs text-[#9CA3AF] max-w-xs text-center md:text-left">
            AI-powered lead generation systems for service businesses.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {links.map((l) =>
          <a
            key={l.href}
            href={l.href}
            className="text-xs text-[#6B7280] hover:text-[#111827] transition-colors">
              {l.label}
            </a>
          )}
          <button onClick={() => setShowTerms(true)} className="text-xs text-[#6B7280] hover:text-[#111827] transition-colors">Terms of Service</button>
          <button onClick={() => setShowPrivacy(true)} className="text-xs text-[#6B7280] hover:text-[#111827] transition-colors">Privacy Policy</button>
        </div>
      </div>

      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}

      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-[#DDF3FF] text-center">
        <p className="text-[11px] text-[#9CA3AF]">
          © {new Date().getFullYear()} Leadero. All rights reserved.
        </p>
      </div>
    </footer>);

}