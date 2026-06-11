import React from "react";
import { X } from "lucide-react";

export default function TermsModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-[#9CA3AF] hover:text-[#111827] transition-colors">
          <X size={20} />
        </button>
        <h2 className="text-2xl font-bold text-[#111827] mb-1">Leadero – Terms of Service</h2>
        <p className="text-xs text-[#9CA3AF] mb-6">Effective Date: June 11, 2026</p>
        <div className="space-y-4 text-sm text-[#374151] leading-relaxed">
          <p>Welcome to Leadero ("Company," "we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our website, services, marketing solutions, lead generation programs, advertising management, consulting services, and related offerings.</p>
          <p>By accessing our website or engaging Leadero's services, you agree to be bound by these Terms.</p>

          <h3 className="font-semibold text-[#111827] mt-6">1. Services</h3>
          <p>Leadero provides marketing and business growth services, which may include:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Lead generation campaigns</li>
            <li>Paid advertising management</li>
            <li>Sales funnel creation and optimization</li>
            <li>Landing page development</li>
            <li>Marketing strategy and consulting</li>
            <li>CRM implementation and integrations</li>
            <li>Conversion optimization</li>
            <li>Reporting and analytics</li>
            <li>Additional services agreed upon in writing</li>
          </ul>
          <p>Project scope, pricing, timelines, and deliverables shall be outlined separately through proposals, invoices, service agreements, or statements of work.</p>

          <h3 className="font-semibold text-[#111827] mt-6">2. Results Disclaimer</h3>
          <p>Leadero is designed to help businesses generate growth opportunities and qualified lead flow. However:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>We do not guarantee a specific number of leads.</li>
            <li>We do not guarantee conversions, revenue, profit, appointments, or ROI.</li>
            <li>Marketing outcomes depend on multiple factors outside of our control including market conditions, competition, offer quality, sales execution, pricing, and operational factors.</li>
          </ul>
          <p>Past performance does not guarantee future results.</p>

          <h3 className="font-semibold text-[#111827] mt-6">3. Client Responsibilities</h3>
          <p>Clients agree to:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Provide accurate and timely information.</li>
            <li>Maintain required access to accounts and systems.</li>
            <li>Respond promptly to requests for approvals or assets.</li>
            <li>Ensure products and services comply with applicable laws.</li>
            <li>Review and approve advertising and campaign materials where necessary.</li>
          </ul>
          <p>Delays caused by the client may affect performance and timelines.</p>

          <h3 className="font-semibold text-[#111827] mt-6">4. Fees & Payment</h3>
          <p>Fees are determined through approved agreements and invoices. Unless otherwise agreed:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Payments are due according to invoice terms.</li>
            <li>Monthly retainers are billed in advance.</li>
            <li>Advertising spend is separate from service fees.</li>
            <li>Late payments may result in paused services.</li>
          </ul>
          <p>All payments are non-refundable unless otherwise stated in writing or required by applicable law.</p>

          <h3 className="font-semibold text-[#111827] mt-6">5. Advertising Platforms</h3>
          <p>Leadero may manage campaigns across third-party platforms including but not limited to search engines, social media platforms, and digital advertising networks. Leadero is not responsible for:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Account suspensions</li>
            <li>Platform outages</li>
            <li>Policy changes</li>
            <li>Ad disapprovals</li>
            <li>Changes to algorithm performance</li>
          </ul>

          <h3 className="font-semibold text-[#111827] mt-6">6. Intellectual Property</h3>
          <p>Unless otherwise agreed:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Leadero retains ownership of proprietary frameworks, internal systems, processes, templates, and methodologies.</li>
            <li>Clients retain ownership of business assets and provided content.</li>
            <li>Rights to final deliverables transfer according to the applicable agreement.</li>
          </ul>

          <h3 className="font-semibold text-[#111827] mt-6">7. Confidentiality</h3>
          <p>Both parties agree to maintain confidentiality of all non-public business information exchanged during engagement. Confidential information shall not be disclosed except as required by law.</p>

          <h3 className="font-semibold text-[#111827] mt-6">8. Third-Party Services</h3>
          <p>Leadero may utilize third-party software, automation tools, analytics providers, and service platforms. Leadero is not responsible for interruptions, failures, or actions of third-party providers.</p>

          <h3 className="font-semibold text-[#111827] mt-6">9. Limitation of Liability</h3>
          <p>To the fullest extent permitted by law, Leadero shall not be liable for indirect, incidental, consequential, special, punitive, or lost profit damages. Leadero's total liability shall not exceed the total fees paid by the client to Leadero during the preceding three (3) months.</p>

          <h3 className="font-semibold text-[#111827] mt-6">10. Indemnification</h3>
          <p>Clients agree to defend and indemnify Leadero against claims resulting from:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Client business activities</li>
            <li>Client-provided content</li>
            <li>Regulatory non-compliance</li>
            <li>Advertising claims</li>
            <li>Intellectual property violations</li>
          </ul>

          <h3 className="font-semibold text-[#111827] mt-6">11. Termination</h3>
          <p>Either party may terminate services subject to any active agreement. Outstanding balances remain due upon termination. Leadero reserves the right to suspend or terminate services for violations of these Terms.</p>

          <h3 className="font-semibold text-[#111827] mt-6">12. Governing Law</h3>
          <p>These Terms shall be governed and interpreted under the laws of the Commonwealth of Virginia.</p>

          <h3 className="font-semibold text-[#111827] mt-6">13. Updates to Terms</h3>
          <p>Leadero may update these Terms periodically. Continued use of our services constitutes acceptance of updated Terms.</p>

          <h3 className="font-semibold text-[#111827] mt-6">14. Contact Information</h3>
          <p>Leadero<br />Website: leadero.agency<br />Email: <a href="mailto:support@leadero.com" className="text-[#8ECDF6] hover:underline">support@leadero.com</a></p>

          <p className="mt-6 text-xs text-[#9CA3AF]">© 2026 Leadero. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}