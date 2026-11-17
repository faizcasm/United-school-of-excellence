import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: {
    default: "United School of Excellence | Hyderbeigh, Pattan",
    template: "%s | United School of Excellence",
  },
  description: "United School of Excellence, Hyderbeigh, Pattan, Baramulla, Jammu & Kashmir. Get in touch for school and admissions information.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "United School of Excellence",
    description: "A learning community in Hyderbeigh, Pattan, Baramulla, Jammu & Kashmir.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <div className="topbar"><div className="wrap topbar-inner"><span>Hyderbeigh, Pattan · Baramulla, Jammu & Kashmir</span><span className="topbar-right">A community for learning and growth</span></div></div>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}