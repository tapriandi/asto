/**
 * site.config.ts — the ONLY file to swap per client.
 *
 * New client = edit this file + drop images into public/img/.
 * No component reads copy from anywhere else.
 */

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  video?: string; // optional hover video in public/video/
};

export type Service = {
  no: string;
  title: string;
  desc: string;
};

export type Stat = { value: string; label: string };
export type Testimonial = { quote: string; name: string; role: string };
export type Faq = { q: string; a: string };
export type Post = { title: string; date: string; category: string; image: string };
export type NavItem = { no: string; label: string; href: string };

export const site = {
  brand: {
    name: "AstoDigi",
    mark: "Asto®",
    email: "hello@astodigi.com",
    tagline: "Creative studio based in South Tangerang.",
  },

  nav: [
    { no: "01", label: "Home", href: "/" },
    { no: "02", label: "Works", href: "/works" },
    { no: "03", label: "About", href: "/about" },
    { no: "04", label: "Blog", href: "/blog" },
    { no: "05", label: "Contact", href: "/contact" },
  ] as NavItem[],

  socials: [
    { label: "IG", href: "https://www.instagram.com/astodigi" },
    { label: "LI", href: "https://www.linkedin.com/company/astodigi" },
    { label: "FB", href: "https://www.facebook.com/astodigi" },
  ],

  hero: {
    lead: "We're Asto® —",
    headline: "a digital studio building solutions for growing businesses.",
    sub: "company profile / invitation website / web app / mobile app",
    cta: "Say Hello",
  },

  statement:
    "We're AstoDigi — a digital studio cultivating bold brands, beautiful websites, and ideas that refuse the ordinary.",

  projects: [
    { id: "01", title: "Lectus", category: "Concept", year: "2025", image: "/img/projects/port-1.jpg" },
    { id: "02", title: "The Stage", category: "Branding", year: "2025", image: "/img/projects/port-2.jpg" },
    { id: "03", title: "Art Direction", category: "Branding", year: "2025", image: "/img/projects/port-3.jpg" },
    { id: "04", title: "Petit Navire", category: "Branding", year: "2025", image: "/img/projects/port-4.jpg" },
    { id: "05", title: "Big Dream", category: "Creative", year: "2024", image: "/img/projects/port-5.jpg" },
    { id: "06", title: "Grotesks", category: "Creative", year: "2024", image: "/img/projects/port-6.jpg" },
    { id: "07", title: "Kimia", category: "Concept", year: "2024", image: "/img/projects/port-7.jpg" },
    { id: "08", title: "Zypher", category: "Creative", year: "2024", image: "/img/projects/port-8.jpg" },
  ] as Project[],

  services: [
    { no: "001", title: "Web Development", desc: "Company profile, invitation sites and web apps built with purpose and precision." },
    { no: "002", title: "Mobile App", desc: "Android and iOS products that feel native, fast and dependable." },
    { no: "003", title: "Branding & Design", desc: "Logos and brand systems that leave a lasting impression." },
    { no: "004", title: "SEO Optimization", desc: "Get found faster with tailored SEO backed by real data." },
  ] as Service[],

  stats: [
    { value: "120+", label: "Projects delivered for growing brands." },
    { value: "80+", label: "Clients across Indonesia and beyond." },
    { value: "35", label: "Awards recognising our craft." },
    { value: "6", label: "Years building on the web." },
  ] as Stat[],

  testimonials: [
    {
      quote:
        "AstoDigi transformed our marketing website into a conversion-focused platform. The structure is scalable, fast, and easy for our team to manage.",
      name: "Julia Anastasia",
      role: "Marketing Manager, Greenfield Corp",
    },
    {
      quote:
        "Sebagai pengajar, saya butuh sistem yang simpel namun stabil. AstoDigi membuat platform yang memudahkan pengelolaan materi dan administrasi kelas.",
      name: "Bagus Nur",
      role: "Pengajar, EduPlatform ID",
    },
    {
      quote:
        "Working with AstoDigi improved our operational efficiency significantly. The architecture is clean, reliable, and built for long-term scalability.",
      name: "Adhitya Pratama",
      role: "Operations Manager, Logistik Sejahtera",
    },
  ] as Testimonial[],

  faq: [
    {
      q: "What's included in a project?",
      a: "Every project includes discovery, design, development and launch. We tailor scope to your needs — whether that's a company profile site, a web app, or a full brand system.",
    },
    {
      q: "How long does a project usually take?",
      a: "Timelines depend on scope. Most company profile sites take 2–3 weeks; full web applications range from 3–6 weeks. We always give you a clear timeline upfront and stick to it.",
    },
    {
      q: "Do you offer ongoing support after launch?",
      a: "Absolutely. We offer ongoing maintenance, design tweaks, updates and new feature support. Think of us as a creative partner, not a one-time service.",
    },
    {
      q: "How do payments work?",
      a: "For fixed-scope projects we split payments into 50% upfront and 50% upon completion. For monthly retainers, payments are made at the start of each billing cycle.",
    },
    {
      q: "Do you work with clients from any country?",
      a: "Yes. We work with clients around the world across time zones and industries. Remote collaboration is our default — we've got it down to a science.",
    },
  ] as Faq[],

  posts: [
    { title: "Future Business Ideas.", date: "12 Feb 2025", category: "Strategy", image: "/img/blog/blog-1.jpg" },
    { title: "Is It Time To Rebrand?", date: "28 Jan 2025", category: "Branding", image: "/img/blog/blog-2.jpg" },
    { title: "Setting Up Creativity.", date: "09 Jan 2025", category: "Process", image: "/img/blog/blog-3.jpg" },
    { title: "Design To Remember.", date: "21 Dec 2024", category: "Design", image: "/img/blog/blog-4.jpg" },
  ] as Post[],

  team: [
    { name: "Jane Mills", role: "Creative Director", image: "/img/team/team-1-1.jpg" },
    { name: "Jim Mathis", role: "Lead Developer", image: "/img/team/team-1-2.jpg" },
    { name: "Ari Wibowo", role: "Brand Designer", image: "/img/team/team-1-3.jpg" },
    { name: "Nadia Putri", role: "Product Manager", image: "/img/team/team-1-4.jpg" },
  ],

  about: {
    lead: "We're a small studio with a simple belief —",
    body: "good digital work is built, not decorated. We pair sharp typography and honest layouts with engineering that holds up. Every project starts with the problem, not the pixels.",
    process: [
      { no: "01", title: "Discover", desc: "We map the problem, the audience and the constraints before a single pixel moves." },
      { no: "02", title: "Design", desc: "Type, grid and space. We design in the browser so what you see is what ships." },
      { no: "03", title: "Build", desc: "Fast, accessible, maintainable. We ship, measure and iterate with you." },
    ],
  },

  contact: {
    email: "hello@astodigi.com",
    phone: "+62 812-xxxx-xxxx",
    address: "Pamulang, South Tangerang",
    hours: "Mon–Fri, 09:00–18:00 WIB",
  },

  footer: {
    bigLine: "Let's build something.",
    copyright: "All rights reserved.",
  },
};

export default site;
