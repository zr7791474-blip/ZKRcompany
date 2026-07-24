export const site = {
  name: "ZKR",
  fullName: "ZKR",
  tagline: "Independent Web Developer",
  email: "zr7791474@gmail.com",
  whatsapp: "https://wa.me/212657516301",
  twitter: "https://x.com/Zkr_ad",
  location: "Casablanca, Morocco — working remotely",
};

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// No invented numbers here on purpose — these are honest, qualitative
// signals rather than fabricated stats like "150+ projects shipped".
export const highlights = [
  { label: "Independent developer" },
  { label: "Design to deployment" },
  { label: "Remote & async-friendly" },
  { label: "Open to new projects" },
];

export const services = [
  {
    id: "web",
    title: "Web Development",
    description:
      "Fast, scalable websites and web apps engineered on modern stacks — from marketing sites to full product builds.",
    points: ["Next.js & React builds", "Headless CMS integration", "API & database architecture"],
  },
  {
    id: "design",
    title: "UI / UX Design",
    description:
      "Interfaces designed around how people actually decide — clear hierarchy, considered motion, conversion built in.",
    points: ["Product & marketing design", "Design systems", "Prototyping & user testing"],
  },
  {
    id: "brand",
    title: "Branding",
    description:
      "Identity systems that hold up across a homepage, a pitch deck, and a business card — consistent, memorable, yours.",
    points: ["Logo & visual identity", "Brand guidelines", "Art direction"],
  },
  {
    id: "growth",
    title: "SEO & Digital Marketing",
    description:
      "Growth strategy grounded in data — technical SEO, content, and campaigns built to compound over time.",
    points: ["Technical & on-page SEO", "Performance marketing", "Analytics & reporting"],
  },
];

export const whyUs = [
  {
    title: "You work directly with me",
    description: "No account managers, no hand-offs — the person who scopes your project is the one who builds it.",
  },
  {
    title: "Fixed scope, fixed price",
    description: "You know the cost and timeline before I write a line of code.",
  },
  {
    title: "Built to perform",
    description: "Every project is checked for speed, SEO, and accessibility before it ships.",
  },
  {
    title: "A direct line after launch",
    description: "Questions after launch go straight to me — no ticket queue, no support tiers.",
  },
];

export const process = [
  {
    step: "Discover",
    description: "I dig into your goals, your users, and what success actually looks like.",
  },
  {
    step: "Design",
    description: "Wireframes to high-fidelity design, reviewed with you at every stage.",
  },
  {
    step: "Build",
    description: "Clean, tested code — you get staging access to watch it come together.",
  },
  {
    step: "Launch",
    description: "Deployed, monitored, and handed off with documentation that makes sense.",
  },
  {
    step: "Grow",
    description: "Ongoing iteration and support as your needs change.",
  },
];

export const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "Vercel",
  "Figma",
  "GraphQL",
];

// Project case studies. These are personal/concept builds, not client work —
// status is labeled honestly and there are no fabricated results or client
// names attached. Add `liveUrl` / `githubUrl` per project once they exist;
// the card only shows a button when a link is actually present.
export const work = [
  {
    title: "Atlas Freight",
    category: "Logistics · Web Platform",
    status: "Personal Project",
    description: "A real-time shipment tracking dashboard concept for logistics teams.",
    problem: "Spreadsheet-based tracking makes it hard to see shipment status at a glance.",
    built: "A live dashboard that surfaces shipment status, delays, and dispatch load in one view.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    features: ["Live status board", "Filterable dispatch view", "Role-based access"],
    liveUrl: null,
    githubUrl: null,
    color: "from-ember-500 to-amber-glow",
  },
  {
    title: "Nour & Co.",
    category: "Retail · E-commerce",
    status: "Concept Project",
    description: "A headless storefront concept built around checkout speed on mobile.",
    problem: "Traditional storefronts often ship slow, image-heavy checkout flows on mobile.",
    built: "A headless storefront with a lightweight, mobile-first checkout flow.",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    features: ["Headless product catalog", "Streamlined checkout", "Mobile-first layout"],
    liveUrl: null,
    githubUrl: null,
    color: "from-moss-400 to-moss-600",
  },
  {
    title: "Meridian Health",
    category: "Healthcare · Brand + Web",
    status: "Concept Project",
    description: "A rebrand and patient-facing site concept for a clinic network.",
    problem: "Healthcare sites often bury the one thing visitors want: how to book an appointment.",
    built: "A patient-facing site with clear service pages and a simple booking path.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: ["Service directory", "Appointment request flow", "Accessible design"],
    liveUrl: null,
    githubUrl: null,
    color: "from-amber-glow to-ember-600",
  },
  {
    title: "Fielder",
    category: "SaaS · Product Design",
    status: "Personal Project",
    description: "A design system and product UI concept for a field-service scheduling tool.",
    problem: "Scheduling tools for field teams often feel cluttered and inconsistent across screens.",
    built: "A component-based design system plus core scheduling and dispatch screens.",
    tech: ["React", "TypeScript", "Figma", "Storybook"],
    features: ["Reusable component library", "Calendar & dispatch views", "Dark mode support"],
    liveUrl: null,
    githubUrl: null,
    color: "from-moss-300 to-moss-500",
  },
];

export const pricing = [
  {
    name: "Starter",
    price: "$1,900",
    period: "one-time",
    description: "A polished launch site for new businesses.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "Contact form",
      "2 weeks turnaround",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "$4,500",
    period: "one-time",
    description: "For businesses ready to invest in conversion.",
    features: [
      "Up to 12 pages",
      "Custom UI/UX design",
      "CMS integration",
      "Technical SEO audit",
      "Analytics & tracking",
      "4 weeks turnaround",
    ],
    popular: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "quoted",
    description: "Full product builds and ongoing partnerships.",
    features: [
      "Web app / product build",
      "Design system",
      "API & database architecture",
      "Ongoing support & iteration",
      "Direct access to me, no middlemen",
    ],
    popular: false,
  },
];

export const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Marketing sites usually take 2–4 weeks. Full product builds vary based on scope, but I agree on a timeline with you before kickoff and stick to it.",
  },
  {
    question: "Do you work with clients outside Morocco?",
    answer:
      "Yes — I work with clients across time zones, fully remote, with regular calls and async updates in a shared channel.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "A short discovery call, your goals, and any brand assets you already have. I'll fill in the rest during the Discover phase.",
  },
  {
    question: "Can you work with my existing codebase?",
    answer:
      "Often, yes. I'll review your stack during discovery and tell you honestly whether extending it or rebuilding makes more sense.",
  },
  {
    question: "What happens after launch?",
    answer:
      "You get documentation, a walkthrough, and a direct line to me. Ongoing support is available if you want me to keep iterating.",
  },
];

// ---- Extended content for dedicated interior pages ----

export const values = [
  {
    title: "Craft over speed",
    description: "I'd rather ship two weeks later and have you proud of every pixel than rush something forgettable.",
  },
  {
    title: "Say the hard thing early",
    description: "If your idea won't work, you hear it in week one — not after the invoice.",
  },
  {
    title: "Own the outcome",
    description: "I measure success by your metrics, not the number of deliverables I handed off.",
  },
  {
    title: "Stay teachable",
    description: "The stack changes every year. I budget real time to learn instead of coasting on what worked in 2022.",
  },
];

// TODO: replace with your real name, role, and focus areas — this is a
// placeholder so the About page renders something honest until you fill it in.
export const founder = {
  name: "Add your name",
  role: "Independent Developer",
  focus: "Full-stack web development, from design to deployment",
};

export const serviceDetails = [
  {
    id: "web",
    title: "Web Development",
    summary: "Fast, scalable websites and web applications built on modern, maintainable stacks.",
    benefits: [
      "Sub-2s load times, benchmarked before launch",
      "Codebase your next hire can actually read",
      "Built to scale past your first 10,000 users",
    ],
    process: ["Technical audit & architecture", "Component-driven build", "Performance & QA pass", "Deploy & monitor"],
  },
  {
    id: "design",
    title: "UI / UX Design",
    summary: "Interfaces designed around how people actually decide, not how a mood board looks in isolation.",
    benefits: [
      "Design systems your engineers will thank you for",
      "Prototypes tested with real users before you build",
      "Consistent across web, mobile, and product surfaces",
    ],
    process: ["Research & user flows", "Wireframes", "High-fidelity design", "Prototype & test"],
  },
  {
    id: "brand",
    title: "Branding",
    summary: "Identity systems that hold up across a homepage, a pitch deck, and a business card — consistent, memorable, yours.",
    benefits: [
      "A visual language that scales beyond one campaign",
      "Guidelines your team can apply without asking us every time",
      "Art direction that fits how you actually sell",
    ],
    process: ["Positioning & research", "Concept exploration", "Identity system", "Brand guidelines handoff"],
  },
  {
    id: "growth",
    title: "SEO & Digital Marketing",
    summary: "Growth strategy grounded in data — technical SEO, content, and campaigns built to compound over time.",
    benefits: [
      "Technical fixes prioritized by actual traffic impact",
      "Content built around what your customers search for",
      "Reporting you can read without a translator",
    ],
    process: ["Technical & content audit", "Strategy & roadmap", "Implementation", "Measure & iterate"],
  },
  {
    id: "saas-development",
    title: "SaaS Development",
    summary: "End-to-end product builds — from your first user flow to a billing system that actually works.",
    benefits: [
      "Multi-tenant architecture done right the first time",
      "Auth, billing, and permissions handled, not bolted on",
      "Built with your roadmap in mind, not just the MVP",
    ],
    process: ["Product & data modeling", "Core flows first", "Billing & auth integration", "Beta, iterate, launch"],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    summary: "Storefronts engineered around one metric: checkout completion.",
    benefits: [
      "Headless builds that load fast on mobile data",
      "Cart and checkout flows tested against drop-off data",
      "Inventory & payments integrated cleanly",
    ],
    process: ["Conversion audit", "Storefront design", "Headless build & integrations", "Launch & A/B test"],
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    summary: "Native-feeling iOS and Android apps from a single React Native codebase.",
    benefits: [
      "One codebase, both app stores",
      "Native performance where it matters — animation, gestures, camera",
      "App store submission handled end-to-end",
    ],
    process: ["Platform scoping", "UI build", "Native module integration", "Store submission & release"],
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    summary: "Practical AI features — search, support automation, content tooling — grounded in your actual data.",
    benefits: [
      "Scoped to problems worth solving, not AI for its own sake",
      "Built on your data with proper evaluation, not vibes",
      "Clear guardrails and cost controls from day one",
    ],
    process: ["Use-case scoping", "Data & retrieval setup", "Build & evaluate", "Ship with monitoring"],
  },
  {
    id: "custom-software",
    title: "Custom Software",
    summary: "Internal tools and systems built for the specific way your team actually works.",
    benefits: [
      "Replaces the spreadsheet-and-Slack-thread workflow",
      "Integrates with the tools you already run on",
      "Documented and handed off — not a black box",
    ],
    process: ["Workflow mapping", "System design", "Build & integrate", "Train & handoff"],
  },
];

export const processFull = [
  { step: "Discovery", description: "I learn your business, your users, your constraints, and what success has to look like." },
  { step: "Strategy", description: "I turn discovery into a scoped plan — sitemap, tech approach, timeline, and a fixed estimate." },
  { step: "Design", description: "Wireframes to high-fidelity design, reviewed with you at every checkpoint, not just at the end." },
  { step: "Development", description: "Clean, tested code built in the open — you get staging access from week one." },
  { step: "Testing", description: "Cross-browser, cross-device QA, performance benchmarking, and accessibility checks before anything ships." },
  { step: "Launch", description: "Deployed, monitored, and handed off with documentation that actually makes sense." },
  { step: "Growth", description: "Ongoing SEO, iteration, and support so the site keeps compounding after day one." },
];

export const techCategories = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "PostgreSQL", "Prisma", "GraphQL", "REST"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Vercel", "Docker", "GitHub Actions", "Cloudflare"],
  },
  {
    category: "Design & Collaboration",
    items: ["Figma", "Linear", "Notion", "Storybook"],
  },
];

export const workAll = [
  ...work,
  {
    title: "Loop Studio",
    category: "Creative · Portfolio Site",
    status: "Concept Project",
    description: "A motion-driven portfolio concept for an independent design studio.",
    problem: "Portfolio sites often show static screenshots that undersell the actual product motion.",
    built: "A portfolio template with scroll-based reveals and project pages built for fast handoff.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    features: ["Scroll-driven reveals", "Reusable case-study template", "Fast client handoff"],
    liveUrl: null,
    githubUrl: null,
    color: "from-ember-600 to-ember-400",
  },
  {
    title: "Harvest Table",
    category: "Hospitality · Booking Platform",
    status: "Concept Project",
    description: "A reservation and events platform concept for a multi-location restaurant group.",
    problem: "Coordinating bookings across multiple locations by phone doesn't scale.",
    built: "A booking platform with per-location availability and an events calendar.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    features: ["Multi-location availability", "Events calendar", "Booking confirmations"],
    liveUrl: null,
    githubUrl: null,
    color: "from-moss-500 to-moss-300",
  },
  {
    title: "Northline Legal",
    category: "Professional Services · Web",
    status: "Concept Project",
    description: "A site rebuild and case-intake funnel concept for a law practice.",
    problem: "Prospective clients often bounce off a contact form with no sense of next steps.",
    built: "A marketing site with a guided case-intake funnel instead of a bare contact form.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: ["Guided intake funnel", "Practice-area pages", "Clear next-step messaging"],
    liveUrl: null,
    githubUrl: null,
    color: "from-amber-glow to-moss-400",
  },
  {
    title: "Pulse Analytics",
    category: "SaaS · AI Feature",
    status: "Experimental Project",
    description: "A retrieval-based in-app search and support assistant, built as a product feature experiment.",
    problem: "In-app search often can't answer support-style questions, only find pages.",
    built: "A retrieval-augmented assistant that answers questions from a product's own docs and data.",
    tech: ["TypeScript", "Node.js", "Vector search", "OpenAI API"],
    features: ["Retrieval-augmented answers", "In-app search UI", "Source citations"],
    liveUrl: null,
    githubUrl: null,
    color: "from-ember-500 to-moss-500",
  },
];

export const workCategories = [
  "All",
  "Web Platform",
  "E-commerce",
  "Brand + Web",
  "Product Design",
  "Portfolio Site",
  "Booking Platform",
  "Web",
  "AI Feature",
];

export const blogPosts = [
  {
    slug: "why-most-redesigns-fail",
    title: "Why most website redesigns fail (and how to avoid it)",
    category: "Strategy",
    excerpt:
      "A redesign that changes how a site looks but not how it performs against your goals isn't a redesign — it's a paint job. Here's how I scope engagements to avoid that trap.",
    date: "June 2026",
    readTime: "6 min read",
  },
  {
    slug: "core-web-vitals-that-matter",
    title: "The Core Web Vitals that actually move conversion",
    category: "Engineering",
    excerpt:
      "Not every performance metric affects revenue equally. Here's a breakdown of which numbers to chase first when speed is on a tight budget.",
    date: "May 2026",
    readTime: "5 min read",
  },
  {
    slug: "design-systems-worth-building",
    title: "When a design system is worth building — and when it isn't",
    category: "Design",
    excerpt:
      "Design systems are expensive to build and more expensive to maintain badly. A practical framework for deciding if you actually need one yet.",
    date: "April 2026",
    readTime: "7 min read",
  },
  {
    slug: "seo-technical-debt",
    title: "The technical SEO debt hiding in most rebuilds",
    category: "SEO",
    excerpt:
      "Migrating platforms without a redirect and metadata plan is the single most common way agencies quietly tank a client's organic traffic.",
    date: "March 2026",
    readTime: "4 min read",
  },
  {
    slug: "pricing-fixed-scope",
    title: "Why I quote fixed scope instead of hourly",
    category: "Studio",
    excerpt:
      "Hourly billing rewards slow work. Here's why I quote fixed scope instead, and how it changes the incentives for both sides of a project.",
    date: "February 2026",
    readTime: "5 min read",
  },
  {
    slug: "ai-features-worth-shipping",
    title: "The AI features actually worth shipping in 2026",
    category: "AI",
    excerpt:
      "Most 'AI-powered' features are a chatbot bolted onto a sidebar. This is a look at where retrieval and automation genuinely save users time.",
    date: "January 2026",
    readTime: "6 min read",
  },
];
