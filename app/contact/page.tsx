import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { EnquiryForm } from "@/components/enquiry-form";
export const metadata: Metadata = { title: "Contact" };
export default function ContactPage() {
 return <main><PageHero eyebrow="GET IN TOUCH" title="Let's start" emphasis="a conversation." description="For admissions and school information, send an enquiry or visit the school in Hyderbeigh, Pattan." />
  <section className="section"><div className="wrap contact-page-grid"><div><div className="eyebrow"><span /> CONTACT DETAILS</div><h2>We're here<br /><em>to help.</em></h2><div className="contact-details"><div><small>VISIT US</small><strong>United School of Excellence</strong><span>Hyderbeigh, Pattan, Baramulla<br />Jammu & Kashmir, India</span></div><div><small>PHONE & EMAIL</small><strong>Contact details pending confirmation</strong><span>Please obtain the school's official phone number and email address from its administration.</span></div></div><a className="under-link" href="https://www.google.com/maps/search/?api=1&query=United+School+of+Excellence+Hyderbeigh+Pattan" target="_blank" rel="noreferrer">Search location on Google Maps <span>↗</span></a></div>
  <div className="form-panel"><h3>Send an enquiry</h3><p>Complete the form and the school team can follow up with you.</p><EnquiryForm /></div></div></section>
 </main>;
}