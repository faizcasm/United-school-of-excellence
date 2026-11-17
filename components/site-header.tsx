"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["About", "/about"],
  ["Academics", "/academics"],
  ["Admissions", "/admissions"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="wrap nav">
        <Link className="brand" href="/" aria-label="United School of Excellence home" onClick={() => setOpen(false)}>
          <span className="brand-mark">U</span>
          <span className="brand-copy"><strong>UNITED</strong><small>SCHOOL OF EXCELLENCE</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className={pathname === href ? "active" : ""}>{label}</Link>
          ))}
        </nav>
        <Link className="nav-cta" href="/contact">Enquire now <span>↗</span></Link>
        <button className={`menu-toggle ${open ? "is-open" : ""}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}<span>↗</span></Link>
          ))}
          <Link href="/contact" className="mobile-enquire" onClick={() => setOpen(false)}>Enquire now ↗</Link>
        </nav>
      )}
    </header>
  );
}