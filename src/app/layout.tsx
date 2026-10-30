import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/content/site";

const barlow = Barlow({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-barlow", display: "swap" });
const barlowCond = Barlow_Condensed({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-barlow-cond", display: "swap" });

// The demo is noindex so it cannot compete with the live site. Set NEXT_PUBLIC_INDEXABLE=true at launch.
const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Aakar Engineers | Cooling towers, water & effluent treatment, Ahmedabad", template: "%s | Aakar Engineers" },
  description: "Aakar Engineers, Ahmedabad: FRP cooling towers, water treatment plants, effluent and sewage treatment, treatment chemicals, spares and O&M for industrial plants.",
  robots: { index: indexable, follow: indexable },
  openGraph: { siteName: "Aakar Engineers", type: "website", locale: "en_IN" },
};

export const viewport: Viewport = { themeColor: "#0f2236", width: "device-width", initialScale: 1 };

const orgLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phones.sales.tel,
  address: {
    "@type": "PostalAddress",
    streetAddress: "A 402-404, Wallstreet 2, Opp. Orient Club, Ellisbridge",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380006",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${barlow.variable} ${barlowCond.variable}`}>
      <body>
        <a href="#main" className="sr-only z-50 bg-white px-4 py-3 font-semibold focus:not-sr-only focus:fixed focus:left-3 focus:top-3">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyBar />
        <WhatsAppFloat />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      </body>
    </html>
  );
}
