export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  label: "Demo Concept";
  year: string;
  image: string;
  video?: string;
  intro: string;
  challenge: string;
  solution: string;
  body: string[];
  features: string[];
  scope: string[];
  timeline: string;
};

export type Service = { no: string; title: string; desc: string; fit: string; image: string; featured?: boolean };
export type Stat = { value: string; label: string };
export type ProcessNote = { no: string; title: string; body: string; deliver: string };
export type Faq = { q: string; a: string };
export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  lead: string;
  seoTitle: string;
  metaDescription: string;
  body: string[];
};
export type Principle = { no: string; title: string; desc: string };
export type NavItem = { no: string; label: string; href: string };

export const site = {
  brand: {
    name: "Astodigi",
    mark: "AstoDigi",
    email: "hallo@astodigi.com",
    tagline: "Studio digital untuk bisnis yang ingin terlihat dan dipilih.",
    location: "Kabupaten Tegal, Jawa Tengah",
    whatsapp: "0857 0000 0000",
  },
  nav: [
    { no: "01", label: "Home", href: "/" },
    { no: "02", label: "Works", href: "/works" },
    { no: "03", label: "Services", href: "/services" },
    { no: "04", label: "About", href: "/about" },
    { no: "05", label: "Blog", href: "/blog" },
    { no: "06", label: "Contact", href: "/contact" },
  ] as NavItem[],
  socials: [
    { label: "IG", href: "https://www.instagram.com/astodigi" },
    { label: "LI", href: "https://www.linkedin.com/company/astodigi" },
    { label: "FB", href: "https://www.facebook.com/astodigi" },
  ],
  hero: {
    lead: "Asto®",
    headline: "Studio digital untuk bisnis yang ingin terlihat dan dipilih.",
    subhead:
      "Kami merancang dan membangun website, aplikasi web, dan produk digital untuk individu, UMKM, startup, PT/CV, dan organisasi — dikerjakan langsung dari struktur sampai peluncuran.",
    cta: "Ceritakan kebutuhan Anda",
    ticker: [
      "Website Bisnis",
      "Landing Page",
      "E-commerce",
      "Aplikasi Web",
      "Aplikasi Mobile",
      "Undangan Digital",
      "Maintenance",
      "Interactive 3D",
    ],
  },
  statement:
    "Kami merancang dan membangun website, aplikasi web, dan produk digital untuk individu, UMKM, startup, PT/CV, dan organisasi — dikerjakan langsung dari struktur sampai peluncuran.",
  processStatement: "Setiap halaman yang kami bangun harus menjawab satu pertanyaan pelanggan Anda. Kalau tidak, itu hanya dekorasi.",
  projects: [
    {
      id: "01",
      slug: "website-bisnis-umkm",
      title: "Kedai Kopi Senja",
      category: "Website bisnis",
      label: "Demo Concept",
      year: "2026",
      timeline: "Disepakati sesuai lingkup",
      image: "/img/projects/port-1.jpg",
      intro:
        "Kedai kopi dengan pelanggan setia di satu kecamatan, tapi belum punya satu tempat untuk menjelaskan menu, jam buka, dan cerita di balik kedai.",
      challenge:
        "Informasi tersebar di bio Instagram, story, dan chat. Calon pelanggan harus bertanya dulu untuk hal yang seharusnya bisa dibaca sendiri.",
      solution:
        "Satu halaman yang menyusun informasi dalam urutan: siapa mereka, apa yang disajikan, bukti dari pelanggan, lalu cara datang.",
      body: [
        "Banyak bisnis lokal punya produk yang kuat, tetapi informasinya tersebar di banyak tempat. Satu halaman menyatukan semuanya ke alamat yang mudah dibagikan.",
        "Kami menyusun urutan informasi dan memberi setiap bagian satu tugas yang jelas — tanpa halaman yang hanya berisi hiasan.",
        "Hasilnya satu halaman yang dibuka cepat dari ponsel, dengan menu mudah dipindai dan tombol pesan dalam jangkauan jempol.",
      ],
      features: ["Menu berkategori — Visualisasi", "Jam buka & peta lokasi — Visualisasi", "Tombol WhatsApp — Perlu verifikasi", "Galeri ruang & produk — Visualisasi", "Versi ringan untuk jaringan lambat — Konsep"],
      scope: ["Struktur informasi", "Desain halaman", "Development responsif", "Setup dasar SEO"],
    },
    {
      id: "02",
      slug: "toko-roti-harian",
      title: "Toko Roti Harian",
      category: "E-commerce",
      label: "Demo Concept",
      year: "2026",
      timeline: "Disepakati sesuai lingkup",
      image: "/img/projects/port-3.jpg",
      intro:
        "Toko roti yang menerima pesanan lewat pesan pribadi ingin mengumpulkan pesanan dalam satu alur tanpa menambah pekerjaan staf.",
      challenge:
        "Roti dijual per loyang, per potong, dan per paket. Percakapan pesanan bercampur dengan pertanyaan lain, dan pesanan mudah terlewat saat ramai.",
      solution:
        "Katalog yang mudah dipindai dengan alur checkout singkat, lalu satu rekap pesanan harian untuk pemilik.",
      body: [
        "Toko online yang baik dimulai dari katalog yang mudah dipindai, bukan dari tema yang ramai. Satuan jual yang berbeda harus terjelaskan tanpa kebingungan.",
        "Pembeli memilih, mengisi alamat, lalu menyelesaikan pesanan dalam beberapa ketukan.",
        "Pemilik toko mendapat satu daftar pesanan yang rapi setiap pagi, bukan ratusan percakapan yang tercampur.",
      ],
      features: ["Katalog berkategori + varian & satuan — Visualisasi", "Keranjang — Konsep", "Checkout tanpa akun — Konsep", "Konfirmasi via WhatsApp — Perlu verifikasi", "Rekap pesanan harian — Konsep", "Stok harian — Konsep"],
      scope: ["Katalog produk", "Halaman detail", "Alur pemesanan", "Rekap pesanan harian"],
    },
    {
      id: "03",
      slug: "klinik-sehat-bersama",
      title: "Klinik Sehat Bersama",
      category: "Healthcare",
      label: "Demo Concept",
      year: "2026",
      timeline: "Disepakati sesuai lingkup",
      image: "/img/projects/port-2.jpg",
      intro:
        "Klinik pratama dengan beberapa dokter jaga. Pasien sering menelepon hanya untuk tahu jadwal, biaya, dan cara mendaftar.",
      challenge:
        "Informasi jadwal berubah tiap minggu, dan pasien baru tidak tahu layanan apa yang tersedia. Telepon jadi jalur utama untuk pertanyaan yang seharusnya bisa dibaca.",
      solution:
        "Website yang menerbitkan jadwal dokter, daftar layanan, dan alur pendaftaran sebelum pasien datang — dengan catatan jelas bahwa pendaftaran dikonfirmasi ulang oleh staf.",
      body: [
        "Pasien mencari kepastian: jam berapa, dokter siapa, berapa biayanya, dan bagaimana mendaftar. Informasi ini harus bisa ditemukan tanpa menelepon.",
        "Kami menyusun halaman per layanan, bukan satu halaman panjang. Setiap layanan punya penjelasan singkat, jadwal, dan langkah berikutnya.",
        "Formulir pendaftaran dirancang sebagai permintaan, bukan konfirmasi langsung — staf tetap memverifikasi dan menghubungi pasien.",
        "Catatan: Ini adalah konsep desain tampilan dan alur informasi, bukan sistem rekam medis elektronik. Demo ini tidak menyimpan atau mengelola data medis pasien.",
      ],
      features: ["Jadwal dokter per poli — Visualisasi", "Daftar layanan & estimasi biaya — Visualisasi", "Alur pendaftaran (form) — Konsep", "Peta & jam operasional — Visualisasi", "Halaman informasi BPJS/asuransi — Visualisasi", "Pertanyaan umum — Visualisasi"],
      scope: ["Struktur layanan", "Jadwal dokter", "Alur pendaftaran", "Aksesibilitas dasar"],
    },
    {
      id: "04",
      slug: "undangan-pernikahan-digital",
      title: "Undangan Pernikahan Digital",
      category: "Undangan digital",
      label: "Demo Concept",
      year: "2026",
      timeline: "Disepakati sesuai lingkup",
      image: "/img/projects/port-5.jpg",
      intro:
        "Undangan cetak untuk sebagian tamu, tautan untuk daftar teman dan rekan kerja yang panjang. Yang dibutuhkan bukan desain mewah, melainkan halaman cepat dan jelas.",
      challenge:
        "Tamu membuka tautan dari pesan di jaringan seluler. Gambar besar membuat halaman lambat dibuka, dan informasi acara tenggelam di bawah animasi.",
      solution:
        "Halaman yang memprioritaskan tanggal, lokasi, dan konfirmasi kehadiran; animasi dibuat ringan dan tidak menghalangi informasi.",
      body: [
        "Undangan digital sering dibuka dari tautan yang dibagikan lewat pesan. Ukuran dan kecepatan menjadi prioritas utama, bukan pilihan desain.",
        "Kami menyusun urutan informasi acara, lokasi, dan konfirmasi kehadiran dalam satu halaman ringkas. Gambar dikompresi agar tetap ringan di jaringan seluler.",
        "Tamu bisa membuka peta, menyimpan tanggal, dan mengirim konfirmasi tanpa membuat akun.",
      ],
      features: ["Hitung mundur ke acara — Perlu verifikasi", "Detail acara — Visualisasi", "Peta & navigasi — Visualisasi", "Simpan ke kalender — Konsep", "Konfirmasi kehadiran tanpa akun — Konsep", "Galeri ringan — Visualisasi", "Musik opsional dengan kontrol — Konsep"],
      scope: ["Struktur acara", "Desain mobile-first", "Peta & lokasi", "Konfirmasi kehadiran"],
    },
    {
      id: "05",
      slug: "sistem-pencatatan-laundry",
      title: "Sistem Pencatatan Laundry",
      category: "Aplikasi web",
      label: "Demo Concept",
      year: "2026",
      timeline: "Disepakati sesuai lingkup",
      image: "/img/projects/port-6.jpg",
      intro:
        "Laundry yang mencatat pesanan di buku tulis. Saat dua orang mengambil pesanan bersamaan, catatan mudah tertukar dan pelanggan menunggu lebih lama.",
      challenge:
        "Data ada di satu buku, hanya bisa dibaca satu orang. Tidak ada cara melihat status cucian tanpa bertanya ke kasir, dan tidak ada riwayat saat terjadi selisih.",
      solution:
        "Aplikasi web yang menyimpan data di satu tempat, dengan antarmuka mengikuti proses kerja kasir yang sudah berjalan — bukan memaksa tim belajar alur baru.",
      body: [
        "Saat pencatatan masih manual, informasi mudah hilang. Aplikasi web menyimpan data di satu tempat yang bisa diakses dari kasir dan pemilik.",
        "Kami mulai dari proses yang paling sering diulang: terima pesanan, tandai selesai, hubungi pelanggan. Antarmuka mengikuti cara kerja tim, bukan sebaliknya.",
        "Pemilik bisa melihat jumlah pesanan hari ini dan status setiap cucian tanpa bertanya ke kasir.",
      ],
      features: ["Input pesanan — Konsep", "Status cucian (diterima/dicuci/siap/diambil) — Konsep", "Pencarian pelanggan — Konsep", "Notifikasi WhatsApp saat siap — Konsep", "Hak akses kasir & pemilik — Konsep", "Rekap harian & mingguan — Konsep", "Riwayat perubahan status — Konsep"],
      scope: ["Pemetaan proses", "Hak akses", "Antarmuka kerja", "Rekap harian"],
    },
    {
      id: "06",
      slug: "interactive-3d-produk",
      title: "Showroom Produk 3D",
      category: "Interactive 3D",
      label: "Demo Concept",
      year: "2026",
      timeline: "Disepakati sesuai lingkup",
      image: "/img/projects/port-8.jpg",
      intro:
        "Brand yang meluncurkan satu produk fisik ingin calon pembeli bisa memeriksa detailnya dari segala sisi sebelum membeli.",
      challenge:
        "Foto diam tidak memperlihatkan tekstur, ukuran, dan bagian yang jarang terlihat. Video terasa pasif, dan sebagian pengunjung tidak mau mengunduh aplikasi.",
      solution:
        "Model 3D yang bisa diputar langsung di browser, dengan fallback gambar untuk perangkat atau koneksi yang tidak mendukung rendering 3D.",
      body: [
        "Sebagian pembeli ingin memeriksa produk lebih dekat daripada yang bisa diberikan foto. Pengalaman 3D menjawab itu tanpa mengunduh aplikasi.",
        "Model dibuat ringan agar tetap terbuka di jaringan seluler, dan halaman menyediakan fallback gambar saat perangkat tidak mendukung.",
        "Interaksi dibatasi pada yang berguna: memutar, memperbesar, mengganti varian, dan melihat keterangan bagian.",
      ],
      features: ["Model 3D diputar & di-zoom — Konsep", "Penanda bagian produk — Konsep", "Mode warna/varian — Konsep", "Fallback gambar — Konsep", "Ukuran dimensi — Konsep", "Tombol beli — Konsep"],
      scope: ["Aset 3D", "Interaksi di browser", "Optimasi performa", "Fallback gambar"],
    },
  ] as Project[],
  services: [
    {
      no: "001",
      title: "Fondasi kehadiran digital",
      desc: "Google Business Profile dan WhatsApp Business disiapkan rapi: kategori, jam buka, foto, katalog, dan balasan cepat — supaya usaha Anda ditemukan dan mudah dihubungi.",
      fit: "UMKM yang belum muncul di Google Maps atau masih memakai WhatsApp biasa.",
      image: "/img/marque/marque-4.jpg",
      featured: true,
    },
    {
      no: "002",
      title: "Website bisnis",
      desc: "Halaman yang menjelaskan siapa Anda, apa yang dikerjakan, dan bagaimana dihubungi — dalam satu alamat yang bisa dibagikan.",
      fit: "UMKM, PT/CV, organisasi, praktik profesional, personal brand.",
      image: "/img/marque/marque-1.jpg",
      featured: true,
    },
    {
      no: "003",
      title: "E-commerce",
      desc: "Katalog, keranjang, dan alur checkout yang mengikuti cara pelanggan Anda berbelanja, dengan rekap pesanan yang mudah diikuti pemilik.",
      fit: "Toko retail, kuliner, brand lokal yang mulai jualan online.",
      image: "/img/marque/marque-2.jpg",
      featured: true,
    },
    {
      no: "004",
      title: "Aplikasi web",
      desc: "Sistem berbasis browser: pencatatan, pesanan, inventaris, booking, dashboard. Dibangun mengikuti alur kerja tim Anda, bukan sebaliknya.",
      fit: "Bisnis atau organisasi yang masih bergantung pada pencatatan manual dan banyak spreadsheet.",
      image: "/img/marque/marque-3.jpg",
    },
    {
      no: "005",
      title: "Aplikasi mobile",
      desc: "Aplikasi Android/iOS atau PWA untuk kebutuhan yang harus tersedia di ponsel pelanggan atau tim lapangan.",
      fit: "Layanan langganan, tim lapangan, aplikasi pelanggan.",
      image: "/img/marque/marque-4.jpg",
    },
    {
      no: "006",
      title: "Maintenance & perawatan",
      desc: "Pembaruan konten, pemeriksaan masalah, dan penyesuaian halaman seiring bisnis berkembang. Lingkup dan jadwal kerja disepakati per kebutuhan.",
      fit: "Website yang sudah aktif dan perlu dijaga.",
      image: "/img/marque/marque-1.jpg",
      featured: true,
    },
    {
      no: "007",
      title: "Interactive 3D experience",
      desc: "Pengalaman 3D interaktif di browser: produk yang bisa diputar, ruang virtual, atau halaman peluncuran dengan animasi. Berjalan tanpa aplikasi tambahan.",
      fit: "Peluncuran produk, showroom, brand yang butuh pembeda visual.",
      image: "/img/marque/marque-2.jpg",
    },
    {
      no: "008",
      title: "Produk digital",
      desc: "Template dan aset siap pakai untuk Anda yang ingin memulai sendiri, dengan panduan pemasangan dan dukungan sesuai produknya.",
      fit: "Pemilik usaha yang ingin mulai cepat dengan biaya lebih ringan.",
      image: "/img/marque/marque-3.jpg",
    },
  ] as Service[],
  stats: [
    { value: "Satu alur kerja", label: "Struktur, desain, dan development ditangani tim yang sama — Anda tidak berpindah vendor." },
    { value: "Bisa dimulai dari kecil", label: "Satu halaman pun cukup untuk memulai. Halaman lain ditambah ketika kebutuhan benar-benar ada." },
    { value: "Bisa dibangun bertahap", label: "Struktur disiapkan agar bisa ditambah halaman, fitur, atau integrasi tanpa membangun ulang." },
    { value: "Terbuka soal bauran", label: "Kalau kebutuhan cukup diselesaikan modul yang sudah ada, kami sampaikan — bukan memaksa membangun dari nol." },
  ] as Stat[],
  process: [
    {
      no: "01",
      title: "Pahami",
      body: "Kami mulai dari bisnis Anda, bukan dari template. Kami tanyakan siapa pelanggan Anda, apa yang paling sering ditanyakan, dan apa yang membuat mereka akhirnya menghubungi Anda.",
      deliver: "Ringkasan tujuan dan daftar halaman yang akan dipakai.",
    },
    {
      no: "02",
      title: "Rancang",
      body: "Pesan disusun sebelum visual. Kami menuliskan urutan informasi, lalu menerjemahkannya menjadi tata letak yang bisa dipindai dalam beberapa detik.",
      deliver: "Struktur halaman dan rancangan visual untuk direview.",
    },
    {
      no: "03",
      title: "Bangun & serahkan",
      body: "Website dibangun, diuji di ponsel dan desktop, lalu diserahkan bersama akun dan aksesnya. Kami sertakan catatan singkat cara memperbarui konten.",
      deliver: "Website yang berjalan, akses, dan dokumentasi singkat.",
    },
  ] as ProcessNote[],
  faq: [
    { q: "Berapa biaya membuat website?", a: "Biaya pembuatan website disesuaikan dengan kebutuhan, kompleksitas fitur, dan ruang lingkup pengerjaan. Kami akan memberikan estimasi tertulis sebelum proyek dimulai." },
    { q: "Berapa lama pengerjaannya?", a: "Durasi tergantung jumlah halaman, fitur, dan kesiapan materi. Setelah lingkup kerja disepakati, kami menyampaikan perkiraan jadwal tertulis bersama estimasi biaya." },
    { q: "Bagaimana alur pengerjaannya?", a: "Kami mulai dari diskusi kebutuhan, lanjut ke estimasi dan kesepakatan, lalu struktur dan rancangan, development, review bersama, dan peluncuran." },
    { q: "Bagaimana kebijakan revisinya?", a: "Jumlah dan lingkup revisi disepakati di awal proyek. Revisi pada tahap rancangan biasanya lebih ringan daripada setelah development selesai. Perubahan di luar kesepakatan dihitung dan disetujui lebih dulu." },
    { q: "Siapa yang memiliki source code, domain, dan hosting?", a: "Kepemilikan source code, domain, hosting, dan akses aset menjadi kebijakan resmi: ketentuannya dibahas sebelum proyek dimulai dan dicatat dalam kesepakatan kerja." },
    { q: "Apakah Anda membantu menulis konten?", a: "Ya, sebatas merapikan struktur informasi dan menulis kerangka pesan. Materi seperti foto produk, daftar layanan, dan harga tetap dari Anda karena itu data yang paling akurat." },
    { q: "Apakah website bisa saya perbarui sendiri?", a: "Untuk halaman statis, kami sertakan panduan singkat. Untuk katalog dan konten yang sering berubah, kami bisa menyiapkan panel admin sederhana atau melatih tim Anda langsung — tergantung lingkup yang disepakati." },
    { q: "Teknologi apa yang digunakan?", a: "Umumnya Next.js dan Tailwind CSS untuk tampilan, dengan layanan basis data seperti Supabase bila diperlukan. Pilihan teknologi disesuaikan dengan kebutuhan Anda, bukan sebaliknya." },
    { q: "Saya sudah punya website. Bisa diperbaiki tanpa membuat ulang?", a: "Bisa. Kami mulai dari penilaian singkat: kecepatan, tampilan ponsel, dan struktur halaman. Kalau perbaikan sudah lebih mahal daripada membangun ulang, kami sampaikan terus terang." },
    { q: "Apakah tersedia layanan perawatan setelah website selesai?", a: "Tersedia sebagai layanan terpisah dengan lingkup dan jadwal yang disepakati per kebutuhan. Silakan sampaikan kebutuhan Anda untuk mendapat penawaran yang sesuai." },
    { q: "Bagaimana keamanan dan privasi data ditangani?", a: "Untuk aplikasi yang menyimpan data, kami bahas lebih dulu data apa yang disimpan, siapa yang boleh mengaksesnya, dan di mana disimpan. Akses dibatasi sesuai kebutuhan peran pengguna." },
    { q: "Bagaimana cara memulai?", a: "Kirim informasi tentang bisnis atau proyek Anda, kebutuhan, dan referensi yang Anda suka. Kami balas dengan arah pengerjaan, daftar kebutuhan, dan estimasi awal. Diskusi awal tidak dikenakan biaya." },
  ] as Faq[],
  posts: [
    {
      slug: "biaya-buat-website-bisnis-indonesia",
      title: "Berapa biaya membuat website bisnis di Indonesia?",
      date: "03 November 2026",
      category: "Website",
      image: "/img/blog/blog-1.jpg",
      excerpt: "Harga website bisa berbeda sepuluh kali antar penawaran. Artikel ini menjelaskan komponen biaya yang sebenarnya Anda bayar.",
      lead:
        "Harga website bisa berbeda sepuluh kali antar penawaran. Artikel ini menjelaskan komponen biaya yang sebenarnya Anda bayar.",
      seoTitle: "Berapa Biaya Membuat Website Bisnis? Panduan Komponen Harga",
      metaDescription: "Rincian komponen biaya website bisnis — domain, hosting, desain, development, konten, dan perawatan — supaya Anda bisa membaca penawaran dengan lebih paham.",
      body: [
        "Saat meminta penawaran untuk website bisnis, Anda mungkin menerima angka yang sangat berbeda dari beberapa penyedia. Perbedaan itu tidak selalu berarti salah satunya menipu. Yang berbeda biasanya adalah cakupan pekerjaan dan apa yang dihitung sebagai biaya awal.",
        "Biaya pertama datang dari nama dan tempat website tinggal. Domain biasanya diperpanjang setiap tahun. Hosting membayar ruang server dan lebar data. Keduanya bisa murah untuk halaman sederhana, dan naik jika website memuat banyak gambar atau menjalankan sistem seperti toko online.",
        "Setelah itu ada pekerjaan manusia: menata struktur informasi, merancang tampilan, menulis konten, dan membangun serta mengujinya. Ini bagian terbesar dalam anggaran, karena menentukan apakah website akhirnya dipakai atau hanya tampak bagus di gambar.",
        "Untuk website template, sebagian pekerjaan itu sudah tersedia. Anda membayar lebih sedikit tetapi menerima struktur yang sudah jadi. Website custom memakan waktu lebih lama karena dirancang mengikuti kebutuhan Anda, bukan sebaliknya.",
        "Yang paling sering terlupakan adalah biaya setelah tayang. Perpanjangan domain, perawatan, pembaruan keamanan, dan perubahan konten adalah biaya berulang. Tanyakan sejak awal apa yang termasuk dan apa yang dihitung terpisah, supaya tidak kaget di tahun kedua.",
        "Pertanyaan yang paling membantu sebelum tanda tangan bukan 'berapa harganya', tapi 'apa saja yang termasuk di dalamnya, dan apa yang terjadi setelah website tayang'. Jawaban yang jelas biasanya lebih menenangkan daripada angka yang paling rendah.",
      ],
    },
    {
      slug: "website-vs-hanya-media-sosial",
      title: "Website atau cukup media sosial saja?",
      date: "03 November 2026",
      category: "Strategi",
      image: "/img/blog/blog-2.jpg",
      excerpt: "Keduanya bukan pilihan saling menggantikan. Yang menentukan adalah bagaimana pelanggan mencari Anda.",
      lead: "Keduanya bukan pilihan saling menggantikan. Yang menentukan adalah bagaimana pelanggan mencari Anda.",
      seoTitle: "Website atau Media Sosial Saja? Panduan untuk Bisnis Kecil",
      metaDescription: "Kapan bisnis masih cukup dengan media sosial, dan kapan website mulai diperlukan — termasuk cara memakai keduanya tanpa kerja dua kali.",
      body: [
        "Banyak bisnis kecil bertahan hanya dengan media sosial. Itu masuk akal: pembuatannya cepat, dan di sana pelanggan sudah berkumpul. Jadi kapan website benar-benar dibutuhkan?",
        "Media sosial sangat baik untuk ditemukan dan terlihat aktif. Yang tidak bisa dilakukannya adalah menjadi satu tempat yang Anda kendalikan sepenuhnya. Jangkauan bisa turun karena perubahan algoritma, akun bisa terkena pembatasan, dan riwayat konten lama sulit ditemukan kembali oleh pelanggan baru.",
        "Ada tiga tanda yang biasanya muncul saat website mulai diperlukan. Pertama, calon pelanggan sering bertanya hal yang sama tentang layanan dan harga. Kedua, Anda perlu dipercaya oleh pihak yang lebih serius, seperti perusahaan atau organisasi. Ketiga, Anda ingin hasil pencarian di Google tetap mengarah ke tempat yang bukan milik orang lain.",
        "Yang menarik, website dan media sosial tidak harus bersaing. Website menjadi tempat informasi tetap yang tidak berubah setiap minggu: layanan, alamat, cara menghubungi. Media sosial menjadi tempat kabar terbaru dan interaksi. Keduanya bisa saling menautkan tanpa harus menyalin semua isi.",
        "Kesalahan yang umum terjadi justru sebaliknya: website dibuat dengan antusias, lalu tidak pernah diperbarui. Alamat atau jam buka yang usang lebih merugikan daripada tidak punya website sama sekali, karena pengunjung datang dengan informasi yang salah.",
        "Kalau tujuannya adalah dipercaya dan mudah dihubungi, website membantu. Kalau tujuannya adalah dikenal dengan cepat, media sosial tetap berguna. Yang terbaik biasanya memakai keduanya, dengan pembagian tugas yang jelas.",
      ],
    },
    {
      slug: "kesalahan-website-umkm",
      title: "Delapan kesalahan umum pada website UMKM",
      date: "03 November 2026",
      category: "Website",
      image: "/img/blog/blog-3.jpg",
      excerpt: "Kebanyakan website bisnis kecil kehilangan calon pembeli karena hal yang sederhana, bukan karena desainnya buruk.",
      lead: "Kebanyakan website bisnis kecil kehilangan calon pembeli karena hal yang sederhana, bukan karena desainnya buruk.",
      seoTitle: "8 Kesalahan Umum pada Website Bisnis Kecil dan Cara Memperbaikinya",
      metaDescription: "Delapan masalah yang paling sering ditemukan pada website bisnis kecil — dari kontak yang tersembunyi sampai halaman lambat — beserta perbaikan praktisnya.",
      body: [
        "Setelah melihat cukup banyak website bisnis kecil, polanya sering mirip. Masalahnya jarang terletak pada selera desain, dan lebih sering pada informasi yang tersembunyi atau langkah berikutnya yang tidak jelas.",
        "Pertama, nomor WhatsApp atau kontak tersembunyi di halaman terpisah. Pengunjung yang sudah tertarik sering berhenti mencari. Kontak yang baik terlihat di halaman utama dan di menu, tanpa perlu menggulir jauh.",
        "Kedua, tidak ada penjelasan singkat tentang apa yang dikerjakan. Bisnis menganggap semua orang sudah tahu. Bandingkan dengan pengunjung pertama yang cuma punya beberapa detik untuk memutuskan apakah ini relevan.",
        "Ketiga, foto produk gelap atau tidak fokus. Foto buram memberi kesan tidak teliti. Foto yang diambil di bawah cahaya cukup, dengan latar sederhana, hampir selalu lebih meyakinkan daripada ilustrasi berbayar yang tidak menggambarkan produk sebenarnya.",
        "Keempat dan kelima saling terkait: website lambat dan hanya nyaman di layar besar. Gambar yang tidak dikompresi membuat halaman berat, khususnya di jaringan seluler. Sebagian besar pelanggan membuka dari ponsel, dan mereka tidak menunggu lama.",
        "Keenam, tidak ada bukti. Testimoni pelanggan yang bersedia disebut, foto hasil kerja, atau dokumen izin usaha membuat pengunjung lebih yakin. Tanpa itu, klaim hanya menjadi klaim.",
        "Ketujuh, alamat dan jam buka tidak diperbarui. Informasi yang tidak akurat sama merugikannya dengan tidak ada informasi. Kedelapan, tidak ada satu langkah berikutnya yang jelas. Setelah membaca halaman, pengunjung harus tahu harus mengklik apa: memesan, menghubungi, atau datang.",
        "Tidak satu pun dari daftar ini memerlukan desain ulang total. Sebagian besar bisa diperbaiki dalam beberapa jam, dan dampaknya terasa lebih besar daripada mengganti tema.",
      ],
    },
    {
      slug: "landing-page-vs-website-perusahaan",
      title: "Kapan butuh landing page, kapan butuh website perusahaan?",
      date: "03 November 2026",
      category: "Strategi",
      image: "/img/blog/blog-4.jpg",
      excerpt: "Landing page dan website perusahaan menjawab pertanyaan yang berbeda. Memilih yang salah membuat biaya keluar tanpa hasil.",
      lead: "Landing page dan website perusahaan menjawab pertanyaan yang berbeda. Memilih yang salah membuat biaya keluar tanpa hasil.",
      seoTitle: "Landing Page vs Website Perusahaan: Mana yang Anda Butuhkan?",
      metaDescription: "Perbedaan tujuan, struktur, dan hasil landing page dan website perusahaan — beserta situasi yang membuat masing-masing pilihan tepat.",
      body: [
        "Landing page dan website perusahaan sering disebut sebagai dua pilihan tingkat, padahal keduanya menjawab pertanyaan yang berbeda. Landing page dirancang untuk satu tujuan: membuat pengunjung mengambil satu tindakan. Website perusahaan dirancang untuk menjawab banyak pertanyaan dari pelanggan yang berbeda.",
        "Landing page paling tepat saat Anda memperkenalkan satu produk, satu promo, atau satu campaign. Pengunjung datang dari satu tautan — bio media sosial atau iklan — dan sebaiknya tidak dialihkan ke halaman lain. Semua bagian diarahkan ke satu tindakan yang jelas.",
        "Website perusahaan tepat saat calon pelanggan mendatangi Anda dengan berbagai alasan. Sebagian ingin tahu layanan yang tersedia, sebagian ingin melihat hasil kerja, dan sebagian lagi hanya ingin memastikan alamat dan kontak. Satu halaman tidak cukup untuk menjawab semua itu tanpa terasa penuh.",
        "Pertanyaan praktisnya: apakah semua pengunjung Anda datang dengan satu tujuan, atau dengan pertanyaan yang beragam? Jika jawabannya satu, landing page lebih fokus. Jika jawabannya beragam, website perusahaan lebih masuk akal.",
        "Banyak bisnis akhirnya memakai keduanya. Website utama menyimpan informasi tetap, dan setiap peluncuran produk memiliki landing page sendiri yang ditautkan. Cara ini bekerja baik karena setiap halaman tetap punya tugas tunggal.",
        "Untuk bisnis dengan sumber daya terbatas, mulai dari yang paling penting. Jika sedang meluncurkan sesuatu, landing page biasanya lebih tepat untuk saat itu. Jika tujuan utama adalah dipercaya dan ditemukan, website perusahaan lebih tahan lama.",
      ],
    },
    {
      slug: "checklist-website-siap-tayang",
      title: "Daftar periksa sebelum website bisnis Anda tayang",
      date: "03 November 2026",
      category: "Website",
      image: "/img/blog/blog-1.jpg",
      excerpt: "Beberapa hal yang terlupakan sebelum peluncuran bisa membuat website tidak ditemukan atau tidak dipercaya.",
      lead: "Beberapa hal yang terlupakan sebelum peluncuran bisa membuat website tidak ditemukan atau tidak dipercaya.",
      seoTitle: "Daftar Periksa Sebelum Website Bisnis Tayang",
      metaDescription: "Periksa daftar ini sebelum website bisnis Anda diluncurkan — judul halaman, kecepatan, tampilan ponsel, formulir, dan hal yang sering terlewat.",
      body: [
        "Peluncuran website sering dianggap sebagai puncak pekerjaan. Kenyataannya, ada beberapa pemeriksaan sederhana yang menentukan apakah website benar-benar berguna setelah dibuka untuk umum.",
        "Mulailah dari judul dan deskripsi setiap halaman. Judul adalah yang pertama muncul di hasil pencarian dan di tab browser. Jika setiap halaman memakai judul yang sama, mesin pencari sulit membedakan isinya.",
        "Periksa tampilan di ponsel. Buka website dari perangkat Anda sendiri, dengan jaringan seluler. Uji kecepatan muat, dan pastikan teks tidak terpotong dan tombol cukup besar untuk disentuh.",
        "Uji formulir dan tombol kontak. Kirim pesan melalui formulir sendiri dan cek apakah pesan benar-benar sampai. Tombol WhatsApp dan tautan email juga perlu ditekan satu kali sebelum dipercaya.",
        "Pastikan alamat, jam buka, dan informasi legal akurat. Tautan peta sebaiknya mengarah ke lokasi yang benar. Informasi yang tidak akurat lebih merugikan daripada tidak ada informasi.",
        "Tambahkan peta situs, favicon, dan gambar penampilan saat dibagikan. Gambar itulah yang muncul saat tautan website dibagikan lewat pesan atau media sosial.",
        "Terakhir, pegang seluruh kepemilikan. Domain, hosting, dan akses pengelolaan website sebaiknya berada di akun Anda, bukan hanya di akun penyedia. Itu memudahkan Anda ketika ingin memperbarui atau memindahkan website di masa depan.",
        "Setelah tayang, tentukan apa yang akan dipantau. Kanal kontak mana yang benar-benar dipakai, halaman mana yang paling sering dibuka, dan bagian mana yang perlu diperbarui secara berkala. Meluangkan waktu untuk ini sekarang membuat website tetap relevan beberapa bulan ke depan.",
      ],
    },
  ] as Post[],
  about: {
    lead: "Halo, kami Astodigi — teman Anda membangun kehadiran digital, dari usaha rumahan sampai perusahaan.",
    paragraphs: [
      "Kami mengerjakan struktur, desain, dan development untuk beragam kebutuhan: website bisnis, landing page, toko online, undangan digital, sampai aplikasi web dan pengalaman 3D interaktif.",
      "Setiap proyek dimulai dari pertanyaan yang sama: masalah apa yang ingin diselesaikan, dan siapa yang perlu diyakinkan. Dari situ kami menyusun informasi, merancang halaman, lalu membangunnya dengan satu prinsip — halaman harus jelas dan berguna.",
      "Kami bekerja langsung dengan pemilik proyek. Tidak ada lapisan perantara, sehingga keputusan bisa dibuat cepat dan Anda tahu siapa yang mengerjakan apa.",
    ],
    principles: [
      {
        no: "01",
        title: "Jelas sebelum menarik",
        desc: "Keindahan tanpa arah hanya dekorasi. Pengunjung harus paham Anda menawarkan apa sebelum mengagumi tampilannya.",
      },
      {
        no: "02",
        title: "Ramah jaringan seluler",
        desc: "Sebagian besar pengunjung membuka website dari ponsel. Halaman dibuat ringan dan rapi di layar kecil sejak awal.",
      },
      {
        no: "03",
        title: "Terbuka soal bauran",
        desc: "Kalau kebutuhan Anda lebih baik ditangani modul yang sudah ada, kami sampaikan — bukan memaksa membangun dari nol.",
      },
      {
        no: "04",
        title: "Bisa dikembangkan bertahap",
        desc: "Struktur disiapkan agar halaman, fitur, dan integrasi bisa ditambah tanpa membangun ulang dari awal.",
      },
    ] as Principle[],
  },
  contact: {
    email: "hallo@astodigi.com",
    phone: "0857 0000 0000 (placeholder)",
    address: "Jl. Sri Gunting, RT 06 RW 05, Desa Pakulaut, Kecamatan Margasari, Kabupaten Tegal",
    hours: "Senin–Jumat, 09.00–18.00 WIB",
  },
  footer: { bigLine: "Mari mulai dari yang penting.", copyright: "All rights reserved." },
};

export default site;
