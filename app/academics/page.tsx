import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import Link from "next/link";
export const metadata: Metadata = { title: "Academics" };
export default function AcademicsPage() {
  return <main><PageHero eyebrow="LEARNING & DEVELOPMENT" title="Building foundations," emphasis="opening possibilities." description="A thoughtful education helps students develop knowledge, confidence and the ability to keep learning." />
    <section className="section"><div className="wrap split-content"><div><div className="eyebrow"><span /> A LEARNING JOURNEY</div><h2>Every stage<br /><em>has its own story.</em></h2></div><div className="prose"><p className="lead">We want families to have clear information about the learning journey at United School of Excellence.</p><p>Details about classes offered, curriculum, board affiliation, medium of instruction, assessment methods and academic calendar have not yet been independently confirmed. Please contact the school office for current and accurate information.</p><div className="notice"><strong>Information pending school confirmation</strong><p>Class levels, subjects, teaching approach and academic policies will be published here once approved by the school administration.</p></div><Link className="under-link" href="/contact">Ask about academics <span>↗</span></Link></div></div></section>
  </main>;
}