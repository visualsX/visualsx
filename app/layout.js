import { Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";
import "./stylings/globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

const GA_ID = "G-NHJMXE9Q05";

export const viewport = {
  themeColor: "#fbf7f1",
};

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "visualsX | MVP Development in 30 Days",
    template: "%s | visualsX",
  },
  description: site.description,
  keywords: [
    "MVP development",
    "product studio",
    "startup app development",
    "web app development",
    "mobile app development",
    "UI/UX design",
    "AI development",
    "branding agency",
    "dedicated development team",
    "visualsX",
  ],
  authors: [{ name: "visualsX" }],
  creator: "visualsX",
  publisher: "visualsX",
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    title: "visualsX | Your idea, live in 30 days",
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/visualsx-intro.png", width: 1200, height: 630, alt: "visualsX" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "visualsX | Your idea, live in 30 days",
    description: site.description,
    images: ["/visualsx-intro.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo/logo-512x512.png",
    apple: "/logo/logo-512x512.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "ITKggyclw1RjarownDRZgQL9kO2Gxn6RL5ZURHWct4w",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Structured data: the WebSite entry tells search engines the site name shown above results;
// the Organization entry links the brand, logo, contact details and social profiles.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      alternateName: ["visualsx", "visualsX Studio"],
      url: site.url,
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/logo/logo-512x512.png`, width: 512, height: 512 },
      email: site.email,
      description: site.description,
      contactPoint: { "@type": "ContactPoint", contactType: "sales", email: site.email, availableLanguage: ["English"] },
      sameAs: [site.socials.linkedin, site.socials.github],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={bricolage.variable} data-scroll-behavior="smooth">
      <body>
        <a
          href="#content"
          className="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
