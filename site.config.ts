export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  video?: string;
  summary: string;
  body: string[];
  scope: string[];
};

export type Service = { no: string; title: string; desc: string; image: string };
export type Stat = { value: string; label: string };
export type Testimonial = { quote: string; name: string; role: string; image: string };
export type Faq = { q: string; a: string };
export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  body: string[];
};
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
    "Kami membantu UMKM hadir lebih profesional di internet — website yang jelas, cepat, dan dibuat untuk mendatangkan inquiry atau order.",
  metricLead: "AstoDigi® adalah studio digital yang membangun kehadiran online untuk bisnis lokal.",
  projects: [
    {
      id: "01",
      slug: "website-bisnis",
      title: "Website Bisnis",
      category: "Company profile",
      year: "Concept",
      image: "/img/projects/port-1.jpg",
      summary: "Struktur halaman untuk memperkenalkan bisnis, layanan, dan cara menghubungi Anda.",
      body: [
        "Banyak bisnis lokal sudah punya produk yang kuat, tetapi informasi tentangnya tersebar di banyak tempat. Halaman company profile menyatukan semuanya.",
        "Kami menyusun urutan informasi: siapa Anda, apa yang dikerjakan, bukti, dan langkah berikutnya. Setiap halaman punya satu tugas yang jelas.",
      ],
      scope: ["Struktur informasi", "Desain halaman", "Development responsif", "Setup dasar SEO"],
    },
    {
      id: "02",
      slug: "landing-page",
      title: "Landing Page",
      category: "Campaign",
      year: "Concept",
      image: "/img/projects/port-2.jpg",
      summary: "Halaman satu fokus untuk produk, promo, atau campaign tertentu.",
      body: [
        "Landing page bekerja saat pesannya tunggal. Kami membuang distraksi dan menyisakan satu jalur menuju tindakan.",
        "Cocok untuk peluncuran produk, promo musiman, atau iklan berbayar yang perlu halaman tujuan yang cepat dibuka.",
      ],
      scope: ["Penulisan pesan", "Desain satu jalur", "Form / CTA", "Pengukuran dasar"],
    },
    {
      id: "03",
      slug: "toko-online",
      title: "Toko Online",
      category: "E-commerce",
      year: "Concept",
      image: "/img/projects/port-3.jpg",
      summary: "Katalog produk dan alur pemesanan yang sederhana untuk penjualan harian.",
      body: [
        "Toko online yang baik dimulai dari katalog yang mudah dipindai, bukan dari tema yang ramai.",
        "Kami menyusun kategori, kartu produk, dan alur checkout agar pembeli tidak berhenti di tengah jalan.",
      ],
      scope: ["Katalog produk", "Halaman detail", "Alur checkout", "Integrasi pembayaran"],
    },
    {
      id: "04",
      slug: "brand-digital",
      title: "Brand Digital",
      category: "Branding",
      year: "Concept",
      image: "/img/projects/port-4.jpg",
      summary: "Identitas visual dan aturan pemakaian yang konsisten di semua kanal.",
      body: [
        "Brand yang konsisten lebih mudah diingat. Kami menyiapkan sistem visual, bukan hanya satu logo.",
        "Termasuk warna, tipografi, dan contoh penerapan pada website serta media sosial.",
      ],
      scope: ["Arah visual", "Tipografi & warna", "Panduan pemakaian", "Aset kanal digital"],
    },
    {
      id: "05",
      slug: "undangan-digital",
      title: "Undangan Digital",
      category: "Event",
      year: "Concept",
      image: "/img/projects/port-5.jpg",
      summary: "Undangan acara yang rapi dibuka di ponsel dan mudah diteruskan.",
      body: [
        "Undangan digital sering dibuka dari tautan yang dibagikan lewat pesan. Karena itu ukuran dan kecepatan menjadi prioritas.",
        "Kami menyusun alur informasi acara, lokasi, dan konfirmasi kehadiran dalam satu halaman ringkas.",
      ],
      scope: ["Struktur acara", "Desain mobile-first", "Peta & lokasi", "Konfirmasi kehadiran"],
    },
    {
      id: "06",
      slug: "web-app",
      title: "Web App",
      category: "Development",
      year: "Concept",
      image: "/img/projects/port-6.jpg",
      summary: "Aplikasi berbasis web untuk merapikan proses kerja internal.",
      body: [
        "Saat pencatatan masih manual, informasi mudah hilang. Aplikasi web menyimpan data di satu tempat.",
        "Kami mulai dari proses yang paling sering diulang, lalu membangun antarmuka yang mengikuti cara kerja tim Anda.",
      ],
      scope: ["Pemetaan proses", "Hak akses", "Antarmuka kerja", "Laporan dasar"],
    },
    {
      id: "07",
      slug: "menu-digital",
      title: "Menu Digital",
      category: "Kuliner",
      year: "Concept",
      image: "/img/projects/port-7.jpg",
      summary: "Menu yang bisa diperbarui kapan saja tanpa cetak ulang.",
      body: [
        "Harga dan ketersediaan berubah lebih cepat dari jadwal cetak. Menu digital menyelesaikan masalah itu.",
        "Pembeli memindai kode, menu terbuka, dan perubahan langsung terlihat.",
      ],
      scope: ["Kategori menu", "Kode QR", "Pembaruan konten", "Tampilan mobile"],
    },
    {
      id: "08",
      slug: "portfolio-brand",
      title: "Portfolio Brand",
      category: "Creative",
      year: "Concept",
      image: "/img/projects/port-8.jpg",
      summary: "Halaman portfolio untuk menampilkan karya dan hasil kerja.",
      body: [
        "Portfolio yang kuat menunjukkan proses, bukan hanya hasil akhir. Kami menyusun studi kasus yang mudah dibaca.",
        "Setiap proyek dijelaskan lewat konteks, apa yang dikerjakan, dan hasilnya.",
      ],
      scope: ["Struktur studi kasus", "Galeri visual", "Navigasi proyek", "Halaman detail"],
    },
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
    {
      slug: "kenapa-bisnis-kecil-butuh-website",
      title: "Kenapa bisnis kecil tetap butuh website?",
      date: "12 Feb 2025",
      category: "Strategy",
      image: "/img/blog/blog-1.jpg",
      excerpt: "Media sosial membantu orang menemukan Anda. Website membuat mereka yakin untuk membeli.",
      body: [
        "Media sosial bekerja untuk ditemukan. Tetapi ketika calon pembeli ingin memastikan, mereka mencari satu tempat yang menjelaskan bisnis Anda secara utuh.",
        "Website memberi ruang untuk menjelaskan layanan, harga, lokasi, dan bukti kerja tanpa dibatasi urutan unggahan.",
        "Yang penting bukan jumlah halaman, tetapi kejelasan: apa yang Anda jual, untuk siapa, dan bagaimana cara membelinya.",
      ],
    },
    {
      slug: "halaman-pertama-umkm",
      title: "Halaman pertama yang perlu dimiliki UMKM",
      date: "28 Jan 2025",
      category: "Website",
      image: "/img/blog/blog-2.jpg",
      excerpt: "Kalau baru mulai, tidak perlu sepuluh halaman. Mulai dari tiga yang paling sering dicari.",
      body: [
        "Tiga halaman pertama yang paling sering dibutuhkan: apa yang Anda kerjakan, bukti kerja, dan cara menghubungi.",
        "Halaman layanan menjelaskan penawaran. Halaman bukti menunjukkan hasil. Halaman kontak menutup jaraknya.",
        "Setelah tiga ini berjalan, halaman lain ditambahkan sesuai kebutuhan, bukan karena daftar contoh.",
      ],
    },
    {
      slug: "brand-terlihat-dipercaya",
      title: "Cara membuat brand terlihat lebih dipercaya",
      date: "09 Jan 2025",
      category: "Branding",
      image: "/img/blog/blog-3.jpg",
      excerpt: "Kepercayaan datang dari konsistensi kecil: ejaan, jarak, warna, dan kecepatan halaman.",
      body: [
        "Kesan pertama terbentuk dalam hitungan detik. Sebagian besar dari kesan itu datang dari kerapian, bukan dari hiasan.",
        "Tipografi yang konsisten, jarak yang cukup, dan warna yang tidak berlebihan membuat bisnis terlihat lebih mapan.",
        "Halaman yang cepat dibuka juga bagian dari kepercayaan. Pembeli jarang menunggu lebih dari beberapa detik.",
      ],
    },
  ] as Post[],
  team: [],
  about: {
    lead: "AstoDigi adalah studio digital untuk bisnis lokal yang ingin hadir lebih meyakinkan di internet.",
    body: "Kami mengerjakan struktur, desain, dan development untuk UMKM. Mulai dari website bisnis, landing page, undangan digital, sampai toko online dan aplikasi web. Semua dikerjakan dengan satu prinsip: halaman harus jelas dan berguna.",
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
