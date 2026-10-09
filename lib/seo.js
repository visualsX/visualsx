import { site } from "@/lib/site";

// Per-page metadata: its own title, description, canonical URL and social-share URL.
export function pageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${site.name}`, description, url: path },
    twitter: { title: `${title} | ${site.name}`, description },
  };
}

// Breadcrumb structured data (Home > Page) so search engines understand the site structure.
export function breadcrumbJsonLd(name, path) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name, item: `${site.url}${path}` },
    ],
  };
}

export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
