export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  video?: string;
  /** Short paragraph shown beside the meta grid on the project page. */
  intro: string;
  /** Long-form paragraphs for the case-study body. */
  body: string[];
  scope: string[];
  timeline: string;
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
  lead: string;
  body: string[];
};
export type TeamMember = { name: string; role: string; image: string };
export type Award = { name: string; detail: string; date: string };
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
      title: "Kedai Kopi Senja",
      category: "Company profile",
      year: "07.25",
      timeline: "3 Weeks",
      image: "/img/projects/port-1.jpg",
      intro:
        "Kedai Kopi Senja punya pelanggan setia di satu kecamatan, tetapi belum punya tempat untuk menjelaskan menu, jam buka, dan cerita di balik kedai. Mereka ingin terlihat serius tanpa kehilangan suasana hangat.",
      body: [
        "Banyak bisnis lokal sudah punya produk yang kuat, tetapi informasi tentangnya tersebar di banyak tempat. Halaman company profile menyatukan semuanya ke dalam satu alamat yang mudah dibagikan.",
        "Kami menyusun urutan informasi: siapa mereka, apa yang disajikan, bukti dari pelanggan, dan langkah berikutnya. Setiap bagian punya satu tugas yang jelas, tanpa halaman yang hanya berisi hiasan.",
        "Hasilnya adalah satu halaman yang bisa dibuka cepat dari ponsel, dengan menu yang mudah dipindai dan tombol pesan yang selalu berada dalam jangkauan jempol.",
      ],
      scope: ["Struktur informasi", "Desain halaman", "Development responsif", "Setup dasar SEO"],
    },
    {
      id: "02",
      slug: "landing-page",
      title: "Rilis Produk Baru",
      category: "Campaign",
      year: "08.25",
      timeline: "2 Weeks",
      image: "/img/projects/port-2.jpg",
      intro:
        "Sebuah brand camilan lokal meluncurkan varian baru dan butuh satu halaman yang fokus, bukan katalog lengkap. Tujuannya satu: orang mencoba varian ini.",
      body: [
        "Landing page bekerja saat pesannya tunggal. Kami membuang distraksi dan menyisakan satu jalur menuju tindakan.",
        "Setiap blok menjawab satu pertanyaan pembeli: ini apa, kenapa beda, apa kata orang, dan bagaimana mencobanya. Tidak ada menu yang mengalihkan perhatian.",
        "Halaman dibuka dari tautan bio dan iklan berbayar, jadi ukuran gambar serta urutan pemuatan dibuat agar bagian terpenting muncul lebih dulu.",
      ],
      scope: ["Penulisan pesan", "Desain satu jalur", "Form & CTA", "Pengukuran dasar"],
    },
    {
      id: "03",
      slug: "toko-online",
      title: "Toko Roti Harian",
      category: "E-commerce",
      year: "09.25",
      timeline: "4 Weeks",
      image: "/img/projects/port-3.jpg",
      intro:
        "Toko roti yang selama ini menerima pesanan lewat pesan pribadi ingin mengumpulkan pesanan dalam satu alur, tanpa menambah pekerjaan staf.",
      body: [
        "Toko online yang baik dimulai dari katalog yang mudah dipindai, bukan dari tema yang ramai. Roti dijual per loyang, per potong, dan per paket — katalog harus bisa menjelaskan itu tanpa kebingungan.",
        "Kami menyusun kategori, kartu produk, dan alur checkout yang singkat. Pembeli memilih, mengisi alamat, lalu menyelesaikan pesanan dalam beberapa ketukan.",
        "Pemilik toko mendapat satu daftar pesanan yang rapi setiap pagi, bukan ratusan percakapan yang tercampur.",
      ],
      scope: ["Katalog produk", "Halaman detail", "Alur pemesanan", "Rekap pesanan harian"],
    },
    {
      id: "04",
      slug: "brand-digital",
      title: "Identitas Jasa Konsultan",
      category: "Branding",
      year: "05.25",
      timeline: "5 Weeks",
      image: "/img/projects/port-4.jpg",
      intro:
        "Sebuah jasa konsultan kecil ingin terlihat setara dengan firma besar saat mengirim proposal. Masalahnya bukan kualitas kerja, tetapi kesan pertama dari materi yang dipakai.",
      body: [
        "Brand yang konsisten lebih mudah diingat. Kami menyiapkan sistem visual, bukan hanya satu logo.",
        "Termasuk warna, tipografi, aturan jarak, dan contoh penerapan pada website, proposal, serta media sosial. Semuanya dalam satu dokumen pendek yang benar-benar bisa dipakai tim.",
        "Setelah sistem ini dipakai, materi yang dikirim ke calon klien terlihat berasal dari satu perusahaan yang sama.",
      ],
      scope: ["Arah visual", "Tipografi & warna", "Panduan pemakaian", "Aset kanal digital"],
    },
    {
      id: "05",
      slug: "undangan-digital",
      title: "Undangan Pernikahan Digital",
      category: "Event",
      year: "10.25",
      timeline: "2 Weeks",
      image: "/img/projects/port-5.jpg",
      intro:
        "Undangan dicetak untuk sebagian tamu, tetapi daftar panjang teman dan rekan kerja lebih praktis menerima tautan. Yang dibutuhkan bukan desain mewah, melainkan halaman yang cepat dan jelas.",
      body: [
        "Undangan digital sering dibuka dari tautan yang dibagikan lewat pesan. Karena itu ukuran dan kecepatan menjadi prioritas utama.",
        "Kami menyusun alur informasi acara, lokasi, dan konfirmasi kehadiran dalam satu halaman ringkas. Gambar dikompresi agar tetap ringan di jaringan seluler.",
        "Tamu bisa membuka peta, menyimpan tanggal, dan mengirim konfirmasi tanpa harus membuat akun.",
      ],
      scope: ["Struktur acara", "Desain mobile-first", "Peta & lokasi", "Konfirmasi kehadiran"],
    },
    {
      id: "06",
      slug: "web-app",
      title: "Sistem Pencatatan Laundry",
      category: "Development",
      year: "11.25",
      timeline: "6 Weeks",
      image: "/img/projects/port-6.jpg",
      intro:
        "Sebuah laundry mencatat pesanan di buku tulis. Saat dua orang mengambil pesanan bersamaan, catatan mudah tertukar dan pelanggan harus menunggu lebih lama.",
      body: [
        "Saat pencatatan masih manual, informasi mudah hilang. Aplikasi web menyimpan data di satu tempat yang bisa diakses dari kasir dan pemilik.",
        "Kami mulai dari proses yang paling sering diulang: terima pesanan, tandai selesai, hubungi pelanggan. Antarmuka mengikuti cara kerja tim, bukan sebaliknya.",
        "Pemilik bisa melihat jumlah pesanan hari ini dan status setiap cucian tanpa bertanya ke kasir.",
      ],
      scope: ["Pemetaan proses", "Hak akses", "Antarmuka kerja", "Rekap harian"],
    },
    {
      id: "07",
      slug: "menu-digital",
      title: "Menu Digital Warung",
      category: "Kuliner",
      year: "12.25",
      timeline: "1 Week",
      image: "/img/projects/port-7.jpg",
      intro:
        "Harga dan ketersediaan berubah lebih cepat dari jadwal cetak. Menu digital menyelesaikan masalah itu tanpa mengganti cara pelanggan memesan.",
      body: [
        "Pelanggan memindai kode di meja, menu terbuka, dan perubahan harga langsung terlihat tanpa mencetak ulang.",
        "Kami menyusun kategori yang mengikuti kebiasaan pelanggan: menu utama, minuman, dan tambahan. Gambar hanya dipakai pada item yang benar-benar membedakan.",
        "Pemilik bisa memperbarui item yang habis dalam hitungan detik dari ponsel.",
      ],
      scope: ["Kategori menu", "Kode QR", "Pembaruan konten", "Tampilan mobile"],
    },
    {
      id: "08",
      slug: "portfolio-brand",
      title: "Portfolio Fotografer",
      category: "Creative",
      year: "01.26",
      timeline: "3 Weeks",
      image: "/img/projects/port-8.jpg",
      intro:
        "Seorang fotografer pernikahan menyimpan hasil kerja di folder yang dibagikan satu per satu. Ia butuh satu halaman yang membuat calon klien melihat gayanya dalam beberapa detik.",
      body: [
        "Portfolio yang kuat menunjukkan proses, bukan hanya hasil akhir. Kami menyusun studi kasus singkat untuk beberapa acara utama.",
        "Setiap proyek dijelaskan lewat konteks, pilihan momen, dan hasilnya. Gambar ditampilkan dalam ukuran besar dengan pemuatan bertahap agar halaman tetap ringan.",
        "Calon klien bisa melihat ketersediaan dan mengirim pesan langsung dari halaman yang sama.",
      ],
      scope: ["Struktur studi kasus", "Galeri visual", "Navigasi proyek", "Form pemesanan"],
    },
  ] as Project[],
  services: [
    { no: "001", title: "Website bisnis", desc: "Jelaskan bisnis, layanan, lokasi, dan cara menghubungi Anda dalam satu tempat yang meyakinkan.", image: "/img/marque/marque-1.jpg" },
    { no: "002", title: "Landing page", desc: "Fokus pada satu produk, promo, atau campaign dengan halaman yang mendorong orang mengambil tindakan.", image: "/img/marque/marque-2.jpg" },
    { no: "003", title: "Undangan digital", desc: "Bagikan acara dengan pengalaman digital yang rapi, cepat dibuka, dan mudah diteruskan.", image: "/img/marque/marque-3.jpg" },
    { no: "004", title: "Toko online & web app", desc: "Mulai jualan online atau rapikan proses kerja dengan sistem yang dibangun sesuai kebutuhan.", image: "/img/marque/marque-4.jpg" },
  ] as Service[],
  stats: [
    { value: "24", label: "Proyek lokal yang dikerjakan bersama UMKM." },
    { value: "18", label: "Bisnis yang membangun kehadiran online pertama." },
    { value: "3", label: "Layanan inti: struktur, desain, development." },
    { value: "94", label: "Persen klien lanjut ke tahap pengembangan berikutnya." },
  ] as Stat[],
  testimonials: [
    {
      quote: "Website yang baik membuat calon pelanggan lebih percaya sebelum mereka menghubungi Anda.",
      name: "Kedai Kopi Senja",
      role: "Company profile",
      image: "/img/team/team-1-1.jpg",
    },
    {
      quote: "Kami mulai dari kebutuhan paling penting, lalu membangun halaman yang benar-benar dipakai.",
      name: "Jasa Konsultan Arka",
      role: "Brand & website",
      image: "/img/team/team-1-2.jpg",
    },
    {
      quote: "Desain boleh berani. Tapi pesan tetap harus jelas dan orang harus tahu harus klik apa.",
      name: "Toko Roti Harian",
      role: "Toko online",
      image: "/img/team/team-1-3.jpg",
    },
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
      slug: "plant-with-intention",
      title: "Mulai dari strategi, bukan hanya tampilan.",
      date: "16 May 2025",
      category: "Strategy",
      image: "/img/blog/blog-1.jpg",
      excerpt: "Warna dan tipografi menarik perhatian. Tetapi tanpa arah, semuanya hanya dekorasi.",
      lead:
        "Dalam dunia branding dan desain digital, mudah sekali teralih pada hal yang terlihat mengkilap. Warna berani, huruf sedang tren, logo yang bisa ditempel di tas. Semuanya menggoda.",
      body: [
        "Menjadi menarik adalah hal mudah. Yang sulit adalah membuat orang mengingat dan memilih Anda lagi. Di sinilah strategi bekerja: menentukan untuk siapa Anda hadir, masalah apa yang diselesaikan, dan kesan apa yang ingin ditinggalkan.",
        "Tanpa strategi, bahkan brand paling cantik hanya dekorasi di permukaan. Ia bisa menarik pandangan sesaat, tetapi tidak membangun kesetiaan.",
        "Sebaliknya, ketika arah sudah jelas, setiap keputusan visual punya alasan. Warna tidak dipilih karena sedang tren, tetapi karena mewakili perasaan yang ingin disampaikan. Tipografi tidak dipilih karena keren, tetapi karena sesuai karakter suara brand.",
        "Untuk UMKM, langkah ini justru lebih penting karena sumber daya terbatas. Anda tidak bisa mencoba sepuluh arah sekaligus. Satu arah yang jelas membuat setiap materi — dari kemasan sampai halaman website — saling menguatkan.",
        "Mulailah dengan tiga pertanyaan sederhana: apa yang kami jual, untuk siapa, dan kenapa harus kami. Jawaban yang jujur akan menentukan semua yang datang sesudahnya.",
      ],
    },
    {
      slug: "halaman-pertama-umkm",
      title: "Halaman pertama yang perlu dimiliki UMKM.",
      date: "23 May 2025",
      category: "Website",
      image: "/img/blog/blog-2.jpg",
      excerpt: "Kalau baru mulai, tidak perlu sepuluh halaman. Mulai dari tiga yang paling sering dicari.",
      lead:
        "Saat pertama kali membangun kehadiran online, daftar kebutuhan bisa terlihat panjang. Padahal pelanggan biasanya hanya mencari tiga hal sebelum menghubungi Anda.",
      body: [
        "Yang pertama adalah penjelasan singkat tentang bisnis Anda. Apa yang dikerjakan, untuk siapa, dan di mana. Ini bisa satu halaman, tidak perlu seratus kata.",
        "Yang kedua adalah bukti. Foto produk, hasil kerja, atau testimoni dari pelanggan yang bersedia disebut namanya. Bukti membuat calon pembeli lebih yakin dibanding klaim.",
        "Yang ketiga adalah cara menghubungi. Nomor WhatsApp, alamat, jam buka, dan satu tombol yang jelas. Banyak bisnis kecil kehilangan calon pembeli hanya karena informasi ini terkubur jauh di bawah halaman.",
        "Setelah tiga bagian ini berjalan, halaman lain ditambahkan sesuai kebutuhan — bukan karena daftar contoh website mengatakan harus ada.",
        "Ukuran keberhasilannya sederhana: apakah orang menemukan jawaban yang mereka cari dalam beberapa detik?",
      ],
    },
    {
      slug: "brand-terlihat-dipercaya",
      title: "Cara membuat brand terlihat lebih dipercaya.",
      date: "30 May 2025",
      category: "Branding",
      image: "/img/blog/blog-3.jpg",
      excerpt: "Kepercayaan datang dari konsistensi kecil: ejaan, jarak, warna, dan kecepatan halaman.",
      lead:
        "Kesan pertama terbentuk dalam hitungan detik. Sebagian besar dari kesan itu datang dari kerapian, bukan dari hiasan.",
      body: [
        "Tipografi yang konsisten, jarak yang cukup, dan warna yang tidak berlebihan membuat bisnis terlihat lebih mapan. Sebaliknya, terlalu banyak font dan warna membuat pesan tenggelam.",
        "Ejaan dan tata bahasa juga bagian dari kepercayaan. Satu salah ketik di halaman utama bisa membuat orang ragu melanjutkan.",
        "Halaman yang cepat dibuka bukan sekadar urusan teknis. Pembeli jarang menunggu lebih dari beberapa detik sebelum menutup tab.",
        "Foto yang rapi — pencahayaan cukup, latar bersih — sering kali lebih meyakinkan daripada ilustrasi mahal yang tidak menggambarkan produk sebenarnya.",
        "Tidak ada satu trik besar di sini. Yang ada adalah banyak detail kecil yang dikerjakan konsisten.",
      ],
    },
  ] as Post[],
  team: [
    { name: "Andi Pratama", role: "Founder & Developer", image: "/img/team/team-1-1.jpg" },
    { name: "Sari Wulandari", role: "Design Lead", image: "/img/team/team-1-2.jpg" },
    { name: "Bagas Nugroho", role: "Frontend Developer", image: "/img/team/team-1-3.jpg" },
    { name: "Nadia Putri", role: "Content Strategist", image: "/img/team/team-1-4.jpg" },
  ] as TeamMember[],
  awards: [
    { name: "Awwwards", detail: "Site of the Day", date: "Apr 2025" },
    { name: "CSS Design Awards", detail: "Best UX, UI & Innovation", date: "Mar 2025" },
    { name: "Webby", detail: "Best Visual Design", date: "Oct 2024" },
    { name: "Framer", detail: "Best Portfolio Website", date: "Aug 2024" },
    { name: "Figma", detail: "Creator of the Year", date: "Jul 2024" },
    { name: "Creativepool", detail: "People's Choice Gold", date: "May 2024" },
    { name: "Communication Arts", detail: "Web Excellence", date: "Feb 2024" },
    { name: "Indigo", detail: "Gold for Branding", date: "Nov 2023" },
  ] as Award[],
  about: {
    lead: "We're Asto® — studio digital yang membangun kehadiran online untuk bisnis lokal.",
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
