// Single source of truth for site copy and contact details.

export const site = {
  name: "visualsX",
  url: "https://www.visualsx.io",
  tagline: "Your idea, live in 30 days.",
  description:
    "visualsX is a small product studio. We design and build web and mobile MVPs for founders, usually in about 30 days, at a fixed price agreed before we start.",
  email: "visualsx.ltd@gmail.com",
  bookingUrl: "https://cal.com/osamajavaid/30min",
  socials: {
    linkedin: "https://www.linkedin.com/company/visualsx",
    github: "https://github.com/visualsx",
  },
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export const services = [
  {
    slug: "product-design",
    title: "Product & UI/UX Design",
    short: "Screens your users can figure out without a tutorial.",
    description:
      "We start with how people will actually use your product, sketch the flows, then design the screens in Figma. Developers get a proper component library to build from, so the app looks the same as the design.",
    deliverables: ["User flows & wireframes", "High-fidelity UI in Figma", "Clickable prototypes", "Design system & components"],
  },
  {
    slug: "web-development",
    title: "Web App Development",
    short: "Dashboards, portals, stores and internal tools.",
    description:
      "We build web apps with Next.js and Node.js: SaaS products, e-commerce stores, admin panels and ERPs. We set up hosting, monitoring and backups too, so launch day is uneventful.",
    deliverables: ["SaaS & web platforms", "E-commerce & marketplaces", "Admin panels & ERPs", "APIs & integrations"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    short: "iOS and Android apps, built and published for you.",
    description:
      "Most of the time React Native gets you on both stores faster and for less. When an app needs native Swift or Kotlin, we use that instead. We also handle the App Store and Play Store submission.",
    deliverables: ["iOS & Android apps", "React Native / native builds", "Push, payments & offline", "Store submission"],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    short: "AI features that save your team real hours.",
    description:
      "Chat assistants trained on your own documents, smarter search, reading invoices and forms automatically, or connecting the tools your team copies data between every day. We'll tell you honestly if AI isn't the right fit.",
    deliverables: ["LLM features & chat", "RAG & smart search", "Workflow automation", "Data pipelines"],
  },
  {
    slug: "branding",
    title: "Branding & Identity",
    short: "A logo and look you can use everywhere from day one.",
    description:
      "Logo, colours, fonts and a short guide on how to use them. We make sure it works on your app icon, your website and your pitch deck, not just on a mood board.",
    deliverables: ["Logo & visual identity", "Brand guidelines", "Landing pages", "Pitch deck design"],
  },
  {
    slug: "dedicated-teams",
    title: "Dedicated Teams",
    short: "Extra designers and developers when you need them.",
    description:
      "Already launched and need more hands? Our designers, developers and QA engineers join your Slack, your standups and your sprint board, and work as part of your team.",
    deliverables: ["Full-stack engineers", "QA & test automation", "DevOps & CI/CD", "Fractional product lead"],
  },
];

export const process = [
  {
    week: "Week 1",
    days: "Days 1 to 7",
    deliverable: "Scope document & fixed quote",
    title: "Discover & scope",
    body: "We learn about your users and your business, agree on what the first version must include, and send a fixed price and launch date.",
  },
  {
    week: "Week 2",
    days: "Days 8 to 14",
    deliverable: "Clickable prototype",
    title: "Design",
    body: "Flows, then full screens. You get a clickable prototype to try before any real code is written.",
  },
  {
    week: "Week 3",
    days: "Days 15 to 22",
    deliverable: "Working staging link",
    title: "Build",
    body: "We develop on a staging link you can open anytime, and walk you through what's new on a call every week.",
  },
  {
    week: "Week 4",
    days: "Days 23 to 30",
    deliverable: "Your product, live",
    title: "Test & launch",
    body: "We test on real phones and browsers, fix what we find, and go live. Then we stick around while your first users come in.",
  },
];

export const projects = [
  {
    name: "Hysabat",
    category: "ERP Platform",
    summary:
      "An ERP for small and mid-sized businesses. Inventory, sales, accounting and day-to-day operations in one system.",
    scope: ["Product design", "Web app", "Dashboards"],
    url: "https://hysabat.com/",
  },
  {
    name: "GardenHub",
    category: "E-commerce",
    summary: "An online store for plants and gardening supplies in the UAE, with a quick, simple checkout.",
    scope: ["UI/UX", "E-commerce", "Web"],
    url: "https://gardenhub.ae/",
  },
  {
    name: "Zawa",
    category: "Corporate Website",
    summary:
      "Website for Zahra Al Warsan, a landscaping and property care company in Dubai. Covers their landscaping, farm tech and pest control services, with a quote request form.",
    scope: ["UI/UX", "Website", "Lead capture"],
    url: "https://www.zawa.ae/",
  },
  {
    name: "NIE Finance System",
    category: "FinTech",
    summary: "An internal finance system for budgets, expenses and audits, replacing spreadsheets with one secure place.",
    scope: ["Web app", "Reporting", "Security"],
    url: "https://www.nie.com.pk",
  },
  {
    name: "JMM Technologies",
    category: "Agency Website",
    summary: "Marketing website for a software company in Saudi Arabia, built to load fast and rank well in search.",
    scope: ["Branding", "Website", "SEO"],
    url: "https://jmmtech.sa/",
  },
];

export const testimonials = [
  {
    quote:
      "The finance management system built by visualsX transformed our auditing and budgeting processes. It's secure, fast, and handles our complex financial data with ease.",
    name: "Nasir Waheed",
    role: "Senior Lecturer, NIE",
  },
  {
    quote:
      "GardenHub is now a go-to marketplace for plant lovers in the UAE, thanks to the platform visualsX created. The smooth shopping experience has noticeably improved customer retention.",
    name: "Saud Ahmad",
    role: "Founder, GardenHub",
  },
  {
    quote:
      "Hysabat required a sophisticated architecture, and visualsX delivered with excellence. The system is intuitive and has streamlined our operations across departments.",
    name: "Muhammad Jamil",
    role: "Operations Head, Hysabat",
  },
  {
    quote:
      "We needed a website that reflects our technical depth. visualsX delivered a fast, visually striking site that has helped us close more deals.",
    name: "Wafiullah Salarzai",
    role: "CEO, JMM Technologies",
  },
];

export const comparison = {
  columns: ["visualsX", "Freelancers", "Traditional agency"],
  shortColumns: ["visualsX", "Freelancers", "Agency"],
  notes: ["A small senior team on a fixed sprint", "Individual contractors you manage", "Large teams and long timelines"],
  rows: [
    { label: "Time to a live MVP", values: ["About 30 days", "Hard to predict", "3 to 6 months"] },
    { label: "Design, code & QA in one team", values: [true, false, true] },
    { label: "Fixed scope and price", values: [true, false, false] },
    { label: "Weekly demo calls", values: [true, false, false] },
    { label: "Support after launch", values: [true, false, true] },
    { label: "You own all code & designs", values: [true, true, false] },
  ],
};

export const engagements = [
  {
    name: "MVP Sprint",
    tagline: "About 30 days, fixed price",
    description: "For founders with an idea who want a working first version in front of users quickly.",
    points: ["Scoping & product planning", "UI/UX design & prototype", "Web or mobile build", "Testing, launch & 30 days of support"],
    featured: true,
  },
  {
    name: "Dedicated Team",
    tagline: "Monthly, cancel anytime",
    description: "Designers and developers who join your existing team and work from your backlog.",
    points: ["Pick the roles you need", "Shared Slack & standups", "Scale up or down monthly", "No hiring process for you"],
  },
  {
    name: "Product Partner",
    tagline: "After launch",
    description: "We keep improving the product with you: new features, speed fixes and analytics.",
    points: ["Roadmap planning", "Feature development", "Monitoring & maintenance", "Testing new ideas with users"],
  },
];

// Logos live in /public/tech (from Devicon and Simple Icons).
export const stackLayers = [
  { layer: "Design", note: "Wireframes, UI and prototypes", tools: [{ name: "Figma", icon: "figma" }] },
  {
    layer: "Frontend",
    note: "Fast, SEO-friendly web apps",
    tools: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    layer: "Mobile",
    note: "One codebase, or fully native",
    tools: [
      { name: "React Native", icon: "reactnative" },
      { name: "Swift", icon: "swift" },
      { name: "Kotlin", icon: "kotlin" },
    ],
  },
  {
    layer: "Backend",
    note: "APIs, data, payments and AI",
    tools: [
      { name: "Node.js", icon: "nodejs" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Stripe", icon: "stripe" },
      { name: "OpenAI", icon: "openai" },
    ],
  },
  {
    layer: "Infrastructure",
    note: "Hosting, CI/CD and monitoring",
    tools: [
      { name: "AWS", icon: "aws" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
];

export const faqs = [
  {
    q: "Can you really launch an MVP in 30 days?",
    a: "For most first versions, yes. In the first week we agree on the smallest set of features that lets you test your idea with real users, and we build exactly that. If your product is bigger, we split it into stages and the first one still goes live in about a month.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on what you need, so we quote after a short call. The price is fixed, and you see it in writing before we start. We don't bill by the hour.",
  },
  {
    q: "Can I choose which features go into my MVP?",
    a: "Yes. We'll give you our honest opinion on what to build first, but you make the final call.",
  },
  {
    q: "What if my requirements change during the build?",
    a: "That's normal. Small changes we fit in as we go. Bigger ones we price separately or move to the next stage, and nothing changes without your OK.",
  },
  {
    q: "Who owns the code and design?",
    a: "You do, fully. We're happy to sign an NDA, and at the end we hand over the source code, design files and every account.",
  },
  {
    q: "What happens after launch?",
    a: "We support you for 30 days after going live. After that you can keep working with us, add people from our team to yours, or take it in-house. If you take it in-house, we'll walk your developers through the code.",
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Yes, often. We explain options in plain language and help you make the technical decisions.",
  },
  {
    q: "How do we get started?",
    a: "Book a free 30-minute call and tell us about your idea. A few days later you'll get a proposal with the scope, timeline and price.",
  },
];

export const values = [
  { title: "Launch early", body: "We'd rather get a simple version in front of users and improve it than spend months guessing." },
  { title: "Keep you in the loop", body: "Weekly calls, a staging link you can open anytime, and straight answers when something slips." },
  { title: "Do it properly", body: "Moving fast is no excuse for messy code. We review, test and document everything we ship." },
  { title: "Care about the result", body: "We judge our work by how your product does after launch, not by whether we hit the deadline." },
];

export const founders = [
  { name: "Osama Javaid", role: "Co-founder", image: "/founders/sam.jpeg" },
  { name: "Abdullah", role: "Co-founder", image: "/founders/abd.jpeg" },
];
