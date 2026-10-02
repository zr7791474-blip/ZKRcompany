/**
 * Central site content. Everything here is either already in the original
 * repository or stated by Zakariaa Adli. Nothing is invented — unknown facts
 * are left empty and marked TODO(zakariaa).
 */

export const site = {
  name: "ZKR",
  url: "https://zkrcompany.com",
  /** Single source of truth for the founder's name. Change it here and it updates everywhere. */
  founder: "Zakariaa Adli",
  role: "Independent Developer",
  get identity() {
    return `ZKR — ${this.founder}, ${this.role}`;
  },
  region: "Morocco · Remote worldwide",
  availability: "Available for selected projects",
  email: "zr7791474@gmail.com",
  whatsapp: "https://wa.me/212657516301",
  twitter: "https://x.com/Zkr_ad",
  twitterHandle: "@Zkr_ad",
  /** TODO(zakariaa): paste a real booking link (Cal.com, Calendly…). The "Book a call" button only appears when this is set. */
  bookingUrl: "",
};

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const founder = {
  name: site.founder,
  role: site.role,
  location: "Casablanca, Morocco",
  /** TODO(zakariaa): first-person bio paragraphs (one string per paragraph). Only true facts. Empty = hidden. */
  bio: [] as string[],
  /** TODO(zakariaa): optional facts, e.g. { label: "Based in", value: "…" }. Never guess. */
  facts: [] as { label: string; value: string }[],
};

export const services = [
  {
    id: "web",
    title: "Web development",
    description: "Websites and web apps built with Next.js and React, from marketing sites to products with a backend.",
    points: ["Next.js & React builds", "Headless CMS integration", "API & database architecture"],
  },
  {
    id: "design",
    title: "UI / UX design",
    description: "Interface design that makes the next step obvious: layout, hierarchy and the details in between.",
    points: ["Product & marketing design", "Design systems", "Prototyping"],
  },
  {
    id: "brand",
    title: "Branding",
    description: "A visual identity that stays consistent across a website, a presentation and print.",
    points: ["Logo & visual identity", "Brand guidelines", "Art direction"],
  },
  {
    id: "seo",
    title: "SEO & digital marketing",
    description: "Technical and on-page SEO so the site can be found, plus analytics so you can see what works.",
    points: ["Technical & on-page SEO", "Analytics & reporting"],
  },
];

export const whyUs = [
  {
    title: "You work directly with me",
    description: "There are no account managers. The person who scopes your project is the person who builds it.",
  },
  {
    title: "Fixed scope, fixed price",
    description: "You know the cost and the timeline before I write a line of code.",
  },
  {
    title: "Performance-first",
    description: "I check speed, SEO and accessibility before a site ships.",
  },
  {
    title: "A direct line after launch",
    description: "Questions after launch come straight to me. There is no ticket queue.",
  },
];

export const process = [
  { step: "Discover", description: "Your goals, your users and what success looks like." },
  { step: "Design", description: "Wireframes to high-fidelity design, reviewed with you along the way." },
  { step: "Build", description: "Clean code, with staging access so you can watch it come together." },
  { step: "Launch", description: "Deployed and handed off with documentation." },
  { step: "Grow", description: "Ongoing iteration and support as your needs change." },
];

export const pricing = [
  {
    name: "Starter",
    price: "$1,900",
    note: "one-time",
    description: "A polished launch site for new businesses.",
    features: ["Up to 5 pages", "Responsive design", "Basic SEO setup", "Contact form", "2 weeks turnaround"],
  },
  {
    name: "Growth",
    price: "$4,500",
    note: "one-time",
    description: "For businesses ready to invest in conversion.",
    features: [
      "Up to 12 pages",
      "Custom UI/UX design",
      "CMS integration",
      "Technical SEO audit",
      "Analytics & tracking",
      "4 weeks turnaround",
    ],
  },
  {
    name: "Scale",
    price: "Custom",
    note: "quoted per project",
    description: "Web apps, product builds and ongoing work.",
    features: [
      "Web app / product build",
      "Design system",
      "API & database architecture",
      "Ongoing support & iteration",
      "Direct access to me",
    ],
  },
];

export const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Marketing sites usually take 2–4 weeks. Larger builds vary with scope. I agree on a timeline with you before kickoff.",
  },
  {
    question: "Do you work with clients outside Morocco?",
    answer: "Yes. I work remotely with clients across time zones, with calls and async updates.",
  },
  {
    question: "What do you need from me to get started?",
    answer: "A short discovery call, your goals, and any brand assets you already have.",
  },
  {
    question: "Can you work with my existing codebase?",
    answer:
      "Often, yes. I review your stack first and tell you honestly whether extending it or rebuilding makes more sense.",
  },
  {
    question: "What happens after launch?",
    answer:
      "You get documentation, a walkthrough, and a direct line to me. Ongoing support is available if you want it.",
  },
];
