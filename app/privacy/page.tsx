import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
export const metadata: Metadata = { title: "Privacy Notice" };
export default function PrivacyPage() {
  return <main><PageHero eyebrow="YOUR INFORMATION" title="A clear approach" emphasis="to privacy." description="This notice explains how enquiries submitted through this demonstration website are intended to be handled." />
    <section className="section"><div className="wrap prose privacy-copy">
      <h2>Information submitted</h2>
      <p>The contact form may collect a parent or guardian name, phone number, optional email address, class of interest and message. These details are requested only to respond to an enquiry.</p>
      <h2>How it is used</h2>
      <p>When the enquiry service is configured, submitted information is sent to the official school enquiry email configured by the website administrator. It should not be used for unrelated marketing without an appropriate lawful basis and notice.</p>
      <h2>Retention and contact</h2>
      <p>The school administration must define its retention period, access controls and contact process before launch. Please contact the school directly for questions about personal information.</p>
      <div className="notice"><strong>School approval required</strong><p>This is starter privacy copy, not legal advice. The school must review and replace it with a policy that reflects its actual data handling, vendors, retention practices and applicable law before collecting real enquiries.</p></div>
    </div></section>
  </main>;
}