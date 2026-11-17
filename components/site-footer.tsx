import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer-top">
        <Link className="brand brand-footer" href="/"><span className="brand-mark">U</span><span className="brand-copy"><strong>UNITED</strong><small>SCHOOL OF EXCELLENCE</small></span></Link>
        <p>Learning today. Possibilities tomorrow.</p>
        <Link href="#top" className="back-top">BACK TO TOP ↑</Link>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} United School of Excellence.</span>
        <span><Link href="/privacy">Privacy</Link> &nbsp;·&nbsp; Hyderbeigh, Pattan · Baramulla, J&K</span>
      </div>
    </footer>
  );
}