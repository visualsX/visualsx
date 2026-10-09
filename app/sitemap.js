import { site } from "@/lib/site";

const routes = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/work", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/careers", priority: 0.5 },
];

export default function sitemap() {
  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
