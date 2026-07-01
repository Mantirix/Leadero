import React from "react";
import { X } from "lucide-react";

export default function PrivacyModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-[#9CA3AF] hover:text-[#111827] transition-colors">
          <X size={20} />
        </button>
        <h2 className="text-2xl font-bold text-[#111827] mb-1">Privacy Policy</h2>
        <p className="text-xs text-[#9CA3AF] mb-6">Effective Date: June 11, 2026</p>
        <div className="space-y-4 text-sm text-[#374151] leading-relaxed">
          <p>Leadero LLC ("Company," "we," "our," or "us") respects your privacy and is committed to protecting your personal information.</p>
          <p>This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website, engage our services, submit forms, or otherwise interact with us.</p>
          <p>Website: leadero.agency · Email: <a href="mailto:support@leadero.com" className="text-[#8ECDF6] hover:underline">support@leadero.com</a></p>
          <p>By using our website or services, you agree to this Privacy Policy.</p>

          <h3 className="font-semibold text-[#111827] mt-6">1. Information We Collect</h3>
          <p className="font-medium text-[#111827]">Personal Information</p>
          <p>Information you voluntarily provide, including:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Name</li><li>Email address</li><li>Phone number</li><li>Company name</li>
            <li>Billing information</li><li>Marketing preferences</li>
            <li>Information submitted through forms or consultations</li>
          </ul>
          <p className="font-medium text-[#111827] mt-3">Automatically Collected Information</p>
          <p>When you visit our website, we may automatically collect:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>IP address</li><li>Browser type</li><li>Device information</li>
            <li>Operating system</li><li>Website usage data</li>
            <li>Referring URLs</li><li>Interaction and engagement analytics</li>
          </ul>
          <p className="font-medium text-[#111827] mt-3">Lead & Marketing Data</p>
          <p>If you submit inquiries or engage with campaigns, we may collect:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Form submissions</li><li>Campaign attribution data</li>
            <li>Conversion information</li><li>Customer interaction metrics</li>
          </ul>

          <h3 className="font-semibold text-[#111827] mt-6">2. How We Use Your Information</h3>
          <p>We may use collected information to:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Deliver and improve services</li><li>Generate and manage leads</li>
            <li>Respond to inquiries</li><li>Communicate regarding services</li>
            <li>Process transactions</li><li>Personalize website experiences</li>
            <li>Measure advertising effectiveness</li><li>Improve marketing performance</li>
            <li>Detect fraud, abuse, or security incidents</li><li>Comply with legal obligations</li>
          </ul>

          <h3 className="font-semibold text-[#111827] mt-6">3. Cookies & Tracking Technologies</h3>
          <p>Our website may use cookies, analytics technologies, pixels, session identifiers, and advertising measurement tools to understand website performance, improve user experience, measure campaign results, and optimize advertising efforts. You may control cookies through your browser settings.</p>

          <h3 className="font-semibold text-[#111827] mt-6">4. Marketing Communications</h3>
          <p>By submitting your information through forms or inquiries, you consent to receive communications related to service updates, business communications, marketing information, and follow-up regarding requests. You may unsubscribe from marketing communications at any time.</p>

          <h3 className="font-semibold text-[#111827] mt-6">5. Sharing of Information</h3>
          <p>We do not sell personal information. We may share information with service providers, advertising platforms, CRM providers, analytics providers, payment processors, and legal or regulatory authorities where required. Information is shared only as reasonably necessary to operate our business.</p>

          <h3 className="font-semibold text-[#111827] mt-6">6. Data Retention</h3>
          <p>We retain information only for as long as necessary to provide services, maintain records, meet legal obligations, resolve disputes, and improve business operations. Retention periods may vary depending on the type of information collected.</p>

          <h3 className="font-semibold text-[#111827] mt-6">7. Data Security</h3>
          <p>We implement commercially reasonable administrative, technical, and organizational safeguards to protect information. However, no method of internet transmission or storage can be guaranteed to be completely secure.</p>

          <h3 className="font-semibold text-[#111827] mt-6">8. Your Rights</h3>
          <p>Depending on your location, you may have rights to access, correct, request deletion, restrict processing, object to marketing communications, or request a copy of your data. Requests may be submitted to <a href="mailto:support@leadero.com" className="text-[#8ECDF6] hover:underline">support@leadero.com</a>.</p>

          <h3 className="font-semibold text-[#111827] mt-6">9. Third-Party Services</h3>
          <p>Our website and services may integrate with third-party providers. Those providers maintain independent privacy practices and policies.</p>

          <h3 className="font-semibold text-[#111827] mt-6">10. Children's Privacy</h3>
          <p>Our services are intended for business users and are not directed toward children under 13 years of age. We do not knowingly collect personal information from children.</p>

          <h3 className="font-semibold text-[#111827] mt-6">11. International Users</h3>
          <p>If you access our services outside the United States, your information may be transferred and processed in the United States.</p>

          <h3 className="font-semibold text-[#111827] mt-6">12. Changes to This Privacy Policy</h3>
          <p>We may revise this Privacy Policy periodically. Updates become effective upon posting.</p>

          <h3 className="font-semibold text-[#111827] mt-6">13. Contact Information</h3>
          <p>Leadero LLC<br />Website: leadero.agency<br />Email: <a href="mailto:support@leadero.com" className="text-[#8ECDF6] hover:underline">support@leadero.com</a></p>

          <p className="mt-6 text-xs text-[#9CA3AF]">© 2026 Leadero LLC. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
