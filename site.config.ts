export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  video?: string;
};

export type Service = { no: string; title: string; desc: string; image: string };
export type Stat = { value: string; label: string };
export type Testimonial = { quote: string; name: string; role: string; image: string };
export type Faq = { q: string; a: string };
export type Post = { title: string; date: string; category: string; image: string };
export type NavItem = { no: string; label: string; href: string };

export const site = {
  brand: {
    name: "AstoDigi",
    mark: "Asto®",
    email: "hello@astodigi.com",
    tagline: "Studio digital untuk bisnis lokal yang siap tumbuh.",
    location: "South Tangerang / Indonesia",
    whatsapp: "62812xxxxxxxx",
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
    lead: "Asto®",
    headline: "Website modern untuk bisnis yang ingin terlihat dan dipilih.",
    sub: "company profile / landing page / undangan digital / toko online / web app",
    cta: "Diskusi via WhatsApp",
  },
  statement:
    "Kami membantu UMKM hadir lebih profesional di internet — dengan website yang jelas, cepat, dan dibuat untuk mendatangkan inquiry atau order.",
  projects: [
    { id: "01", title: "Website Bisnis", category: "Company profile", year: "Concept", image: "/img/projects/port-1.jpg" },
    { id: "02", title: "Landing Page", category: "Campaign", year: "Concept", image: "/img/projects/port-2.jpg" },
    { id: "03", title: "Toko Online", category: "E-commerce", year: "Concept", image: "/img/projects/port-3.jpg" },
    { id: "04", title: "Brand Digital", category: "Branding", year: "Concept", image: "/img/projects/port-4.jpg" },
    { id: "05", title: "Undangan Digital", category: "Event", year: "Concept", image: "/img/projects/port-5.jpg" },
    { id: "06", title: "Web App", category: "Development", year: "Concept", image: "/img/projects/port-6.jpg" },
    { id: "07", title: "Menu Digital", category: "Kuliner", year: "Concept", image: "/img/projects/port-7.jpg" },
    { id: "08", title: "Portfolio Brand", category: "Creative", year: "Concept", image: "/img/projects/port-8.jpg" },
  ] as Project[],
  services: [
    { no: "001", title: "Website bisnis", desc: "Jelaskan bisnis, layanan, lokasi, dan cara menghubungi Anda dalam satu tempat yang meyakinkan.", image: "/img/marque/marque-1.jpg" },
    { no: "002", title: "Landing page", desc: "Fokus pada satu produk, promo, atau campaign dengan halaman yang mendorong orang mengambil tindakan.", image: "/img/marque/marque-2.jpg" },
    { no: "003", title: "Undangan digital", desc: "Bagikan acara dengan pengalaman digital yang rapi, cepat dibuka, dan mudah diteruskan.", image: "/img/marque/marque-3.jpg" },
    { no: "004", title: "Toko online & web app", desc: "Mulai jualan online atau rapikan proses kerja dengan sistem yang dibangun sesuai kebutuhan.", image: "/img/marque/marque-4.jpg" },
  ] as Service[],
  stats: [
    { value: "01", label: "Satu partner untuk strategi, desain, dan development." },
    { value: "02", label: "Dua bahasa: visual yang menarik, pesan yang mudah dipahami." },
    { value: "03", label: "Tiga langkah sederhana: brief, build, launch." },
    { value: "∞", label: "Bisa dikembangkan saat bisnis Anda tumbuh." },
  ] as Stat[],
  testimonials: [
    { quote: "Website yang baik membuat calon pelanggan lebih percaya sebelum mereka menghubungi Anda.", name: "Bisnis kuliner", role: "Untuk brand yang ingin tampil lebih profesional", image: "/img/team/team-1-1.jpg" },
    { quote: "Kami mulai dari kebutuhan paling penting, lalu membangun halaman yang benar-benar dipakai.", name: "Bisnis jasa", role: "Untuk service business dan profesional", image: "/img/team/team-1-2.jpg" },
    { quote: "Desain boleh berani. Tapi pesan tetap harus jelas dan orang harus tahu harus klik apa.", name: "Brand lokal", role: "Untuk retail, event, dan produk kreatif", image: "/img/team/team-1-3.jpg" },
  ] as Testimonial[],
  faq: [
    { q: "Website apa yang bisa dibuat?", a: "Kami membuat company profile, landing page, undangan digital, toko online, dan web app. Mulai dari kebutuhan paling penting untuk bisnis Anda." },
    { q: "Berapa lama pengerjaannya?", a: "Landing page dan website bisnis biasanya dimulai dari 2–3 minggu, tergantung jumlah halaman, materi, dan revisi." },
    { q: "Apakah bisa bantu isi konten?", a: "Bisa. Kami dapat membantu merapikan struktur informasi dan mengarahkan materi yang perlu disiapkan." },
    { q: "Bagaimana cara mulai?", a: "Kirim jenis bisnis, kebutuhan, dan referensi yang Anda suka lewat WhatsApp. Kami balas dengan arah dan estimasi awal." },
    { q: "Apakah website bisa dikembangkan lagi?", a: "Bisa. Struktur dibuat agar dapat ditambah halaman, fitur, integrasi, atau katalog ketika kebutuhan bisnis bertambah." },
  ] as Faq[],
  posts: [
    { title: "Kenapa bisnis kecil tetap butuh website?", date: "12 Feb 2025", category: "Strategy", image: "/img/blog/blog-1.jpg" },
    { title: "Halaman pertama yang perlu dimiliki UMKM", date: "28 Jan 2025", category: "Website", image: "/img/blog/blog-2.jpg" },
    { title: "Cara membuat brand terlihat lebih dipercaya", date: "09 Jan 2025", category: "Branding", image: "/img/blog/blog-3.jpg" },
  ] as Post[],
  team: [],
  about: {
    lead: "Website bukan pajangan. Ia harus membantu bisnis bergerak.",
    body: "AstoDigi adalah partner digital untuk UMKM yang ingin punya presence online yang rapi, modern, dan mudah dikembangkan.",
    process: [
      { no: "01", title: "Pahami", desc: "Kami mulai dari bisnis, pelanggan, dan tujuan Anda — bukan dari template." },
      { no: "02", title: "Rancang", desc: "Kami susun pesan, struktur, visual, dan alur yang mudah dipahami." },
      { no: "03", title: "Luncurkan", desc: "Website dibuat, diuji, dan disiapkan untuk dipakai berkembang." },
    ],
  },
  contact: {
    email: "hello@astodigi.com",
    phone: "+62 812-xxxx-xxxx",
    address: "Pamulang, South Tangerang",
    hours: "Mon–Fri, 09:00–18:00 WIB",
  },
  footer: { bigLine: "Mari mulai dari yang penting.", copyright: "All rights reserved." },
};

export default site;
