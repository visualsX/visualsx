import { Bricolage_Grotesque } from "next/font/google";
import "./stylings/globals.css";
import "./stylings/buttons.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  themeColor: "#111111", // Matching the dark theme
};

export const metadata = {
  title: {
    default: "visualsX – Vision into Reality",
    template: "%s | visualsX"
  },
  description:
    "Launch your MVP in just 30 days with visualsX. We provide high-performance branding, website development, and mobile app solutions for startups and enterprises.",
  keywords: [
    "MVP development",
    "branding agency",
    "website development",
    "mobile app development",
    "UI/UX design",
    "startup implementation",
    "Next.js developers",
    "React Native",
    "digital transformation",
    "visualsX",
  ],
  metadataBase: new URL("https://visualsx.vercel.app/"),
  authors: [{ name: "visualsX Team" }],
  creator: "visualsX",
  openGraph: {
    title: "visualsX – Launch your MVP in 30 Days",
    description:
      "We act as your technical co-founder, transforming your ideas into market-ready products with stunning branding and robust code.",
    url: "https://visualsx.vercel.app/",
    siteName: "visualsX",
    images: [
      {
        url: "/visualsx-intro.png",
        width: 1200,
        height: 630,
        alt: "visualsX – Vision into Reality",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "visualsX – Vision into Reality",
    description:
      "Launch your MVP in just 30 days. Professional branding, web, and mobile app development.",
    images: ["/visualsx-intro.png"],
    creator: "@visualsx",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo/logo-512x512.png",
    apple: "/logo/logo-512x512.png",
  },
  manifest: "/site.webmanifest",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bricolage.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
