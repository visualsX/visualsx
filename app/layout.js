import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "visualsX – Apps, Websites & Branding",
  description:
    "visualsX provides professional branding, website development, and mobile app solutions. We create, design, and deploy digital products that help businesses grow.",
  keywords: [
    "branding",
    "website development",
    "mobile app development",
    "UI/UX design",
    "web design",
    "digital solutions",
    "visualsX",
  ],
  metadataBase: new URL("https://visualsx.vercel.app/"), // change to your real domain
  openGraph: {
    title: "visualsX – Apps, Websites & Branding",
    description:
      "We help businesses stand out with branding, web design, and mobile app development.",
    url: "https://visualsx.vercel.app/",
    siteName: "visualsX",
    images: [
      {
        url: "/visualsx-intro.png", // put an image in /public
        width: 1200,
        height: 630,
        alt: "visualsX – branding and development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "visualsX – Apps, Websites & Branding",
    description:
      "Professional branding, website design, and mobile app solutions.",
    images: ["/visualsx-intro.png"], // same as OpenGraph
    creator: "@iosamajavaid", // optional
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo/logo-512x512.png",
    apple: "/logo/logo-512x512.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#fff8ef", // adjust to match your brand
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
