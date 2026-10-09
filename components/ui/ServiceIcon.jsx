import { Bot, Code2, PenTool, Smartphone, Sparkles, Users } from "lucide-react";

const icons = {
  "product-design": PenTool,
  "web-development": Code2,
  "mobile-apps": Smartphone,
  "ai-automation": Bot,
  branding: Sparkles,
  "dedicated-teams": Users,
};

export default function ServiceIcon({ slug, className }) {
  const Icon = icons[slug] ?? Sparkles;
  return <Icon aria-hidden className={className} />;
}
