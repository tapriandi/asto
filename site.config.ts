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

export type Service = { no: string; title: string; desc: string; fit: string; image: string };
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
  body: string[];
};
export type Principle = { no: string; title: string; desc: string };
export type NavItem = { no: string; label: string; href: string };

export const site = {
  brand: {
    name: "Astodigi",
    mark: "AstoDigi",
    email: "hello@astodigi.com",
    tagline: "Studio digital untuk bisnis lokal yang siap tumbuh.",
    location: "South Tangerang / Indonesia",
    // TODO: ganti nomor placeholder dengan nomor WhatsApp asli sebelum publikasi.
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
    lead: "AstoDigi",
    headline: "Studio digital untuk bisnis yang ingin terlihat dan dipilih.",
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
    "Kami merancang dan membangun website, aplikasi web, dan produk digital untuk UMKM, perusahaan, organisasi, dan startup — dikerjakan langsung oleh tim kecil yang menangani struktur, desain, dan development sendiri.",
  processStatement: "Setiap halaman yang kami bangun harus menjawab satu pertanyaan pelanggan Anda. Kalau tidak, itu hanya dekorasi.",
  projects: [
    {
      id: "01",
      slug: "website-bisnis-umkm",
      title: "Kedai Kopi Senja",
      category: "Website bisnis",
      label: "Demo Concept",
      year: "2026",
      timeline: "3 minggu",
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
      features: ["Menu berkategori", "Jam buka", "Peta lokasi", "Tombol WhatsApp", "Galeri ruang", "Versi ringan untuk jaringan lambat"],
      scope: ["Struktur informasi", "Desain halaman", "Development responsif", "Setup dasar SEO"],
    },
    {
      id: "02",
      slug: "toko-roti-harian",
      title: "Toko Roti Harian",
      category: "E-commerce",
      label: "Demo Concept",
      year: "2026",
      timeline: "4 minggu",
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
      features: ["Katalog berkategori", "Varian & satuan", "Keranjang", "Checkout tanpa akun", "Konfirmasi WhatsApp", "Rekap pesanan harian", "Stok harian"],
      scope: ["Katalog produk", "Halaman detail", "Alur pemesanan", "Rekap pesanan harian"],
    },
    {
      id: "03",
      slug: "klinik-sehat-bersama",
      title: "Klinik Sehat Bersama",
      category: "Healthcare",
      label: "Demo Concept",
      year: "2026",
      timeline: "5 minggu",
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
      ],
      features: ["Jadwal dokter per poli", "Daftar layanan & estimasi biaya", "Alur pendaftaran", "Peta & jam operasional", "Halaman informasi BPJS/asuransi", "Pertanyaan umum"],
      scope: ["Struktur layanan", "Jadwal dokter", "Alur pendaftaran", "Aksesibilitas dasar"],
    },
    {
      id: "04",
      slug: "undangan-pernikahan-digital",
      title: "Undangan Pernikahan Digital",
      category: "Undangan digital",
      label: "Demo Concept",
      year: "2026",
      timeline: "2 minggu",
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
      features: ["Hitung mundur", "Detail acara", "Peta & navigasi", "Simpan ke kalender", "Konfirmasi kehadiran tanpa akun", "Galeri ringan", "Musik opsional dengan kontrol"],
      scope: ["Struktur acara", "Desain mobile-first", "Peta & lokasi", "Konfirmasi kehadiran"],
    },
    {
      id: "05",
      slug: "sistem-pencatatan-laundry",
      title: "Sistem Pencatatan Laundry",
      category: "Aplikasi web",
      label: "Demo Concept",
      year: "2026",
      timeline: "6 minggu",
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
      features: ["Input pesanan cepat", "Status cucian", "Pencarian pelanggan", "Notifikasi WhatsApp saat siap", "Hak akses kasir & pemilik", "Rekap harian & mingguan", "Riwayat perubahan status"],
      scope: ["Pemetaan proses", "Hak akses", "Antarmuka kerja", "Rekap harian"],
    },
    {
      id: "06",
      slug: "interactive-3d-produk",
      title: "Showroom Produk 3D",
      category: "Interactive 3D",
      label: "Demo Concept",
      year: "2026",
      timeline: "5 minggu",
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
      features: ["Model 3D dapat diputar & di-zoom", "Penanda bagian produk", "Mode warna/varian", "Fallback gambar", "Pengukuran dimensi", "Tombol beli langsung"],
      scope: ["Aset 3D", "Interaksi di browser", "Optimasi performa", "Fallback gambar"],
    },
  ] as Project[],
  services: [
    {
      no: "001",
      title: "Website bisnis",
      desc: "Halaman yang menjelaskan siapa Anda, apa yang dikerjakan, dan bagaimana dihubungi — dalam satu alamat yang bisa dibagikan.",
      fit: "UMKM, PT/CV, organisasi, praktik profesional.",
      image: "/img/marque/marque-1.jpg",
    },
    {
      no: "002",
      title: "E-commerce",
      desc: "Katalog, keranjang, dan alur checkout yang dibuat mengikuti cara pelanggan Anda benar-benar berbelanja. Terhubung ke rekap pesanan harian.",
      fit: "Toko retail, kuliner, brand lokal yang mulai jualan online.",
      image: "/img/marque/marque-2.jpg",
    },
    {
      no: "003",
      title: "Aplikasi web",
      desc: "Sistem internal atau layanan publik berbasis browser: pencatatan, pesanan, inventaris, booking, dashboard. Dibangun mengikuti alur kerja tim Anda.",
      fit: "Bisnis yang masih mencatat manual atau memakai banyak spreadsheet.",
      image: "/img/marque/marque-3.jpg",
    },
    {
      no: "004",
      title: "Aplikasi mobile",
      desc: "Aplikasi Android/iOS atau PWA untuk kebutuhan yang harus tersedia di ponsel pelanggan atau tim lapangan.",
      fit: "Layanan langganan, tim lapangan, aplikasi pelanggan.",
      image: "/img/marque/marque-4.jpg",
    },
    {
      no: "005",
      title: "Maintenance & perawatan",
      desc: "Perbarui konten, pantau uptime, perbaiki masalah, dan tambah halaman seiring bisnis berkembang. Bisa bulanan atau per kebutuhan.",
      fit: "Website yang sudah aktif dan perlu dijaga.",
      image: "/img/marque/marque-1.jpg",
    },
    {
      no: "006",
      title: "Interactive 3D experience",
      desc: "Pengalaman 3D interaktif di browser: produk yang bisa diputar, ruang virtual, atau landing page dengan animasi. Berjalan langsung tanpa aplikasi tambahan.",
      fit: "Peluncuran produk, showroom, brand yang butuh pembeda visual.",
      image: "/img/marque/marque-2.jpg",
    },
    {
      no: "007",
      title: "Produk digital",
      desc: "Template dan aset siap pakai untuk bisnis yang ingin memulai sendiri, dengan panduan pemasangan dan dukungan pembaruan.",
      fit: "Pemilik bisnis yang ingin mulai cepat dengan biaya lebih ringan.",
      image: "/img/marque/marque-3.jpg",
    },
  ] as Service[],
  stats: [
    { value: "Struktur → Desain → Development", label: "Satu tim menangani seluruh alur. Tidak ada pergantian vendor di tengah jalan." },
    { value: "5 Hari Kerja", label: "Untuk landing page dan undangan digital, pengerjaan bisa dimulai dari 5 hari kerja." },
    { value: "2 Putaran Revisi", label: "Dua putaran revisi termasuk pada setiap paket. Revisi berikutnya dihitung jelas." },
    { value: "100% Kepemilikan", label: "Source code, domain, dan hosting menjadi milik Anda setelah pelunasan." },
  ] as Stat[],
  process: [
    {
      no: "01",
      title: "Pahami",
      body: "Kami mulai dari bisnis Anda, bukan dari template. Kami tanyakan siapa pelanggan Anda, apa yang paling sering ditanyakan, dan apa yang membuat mereka akhirnya menghubungi Anda.",
      deliver: "Ringkasan tujuan + daftar halaman yang benar-benar dipakai.",
    },
    {
      no: "02",
      title: "Rancang",
      body: "Pesan disusun sebelum visual. Kami tulis urutan informasi, lalu menerjemahkannya menjadi tata letak yang bisa dipindai dalam beberapa detik.",
      deliver: "Struktur halaman + rancangan visual untuk direview.",
    },
    {
      no: "03",
      title: "Bangun & serahkan",
      body: "Website dibangun, diuji di ponsel dan desktop, lalu diserahkan beserta akun dan aksesnya. Kami sertakan panduan singkat cara memperbarui konten.",
      deliver: "Website aktif, akses penuh, dan catatan perawatan.",
    },
  ] as ProcessNote[],
  faq: [
    {
      q: "Berapa biaya membuat website?",
      a: "Biaya tergantung jumlah halaman, fitur, dan materi yang perlu dibuat. Landing page dan website bisnis satu halaman mulai dari kisaran Rp 5 juta. Toko online dan aplikasi web dihitung setelah kami tahu alur yang dibutuhkan. Estimasi tertulis diberikan sebelum pekerjaan dimulai.",
    },
    {
      q: "Berapa lama pengerjaan?",
      a: "Landing page dan undangan digital mulai 5 hari kerja. Website bisnis sekitar 2–3 minggu. Toko online 4 minggu. Aplikasi web dan pengalaman 3D dihitung setelah pemetaan kebutuhan.",
    },
    {
      q: "Bagaimana alur pengerjaannya?",
      a: "Kami mulai dengan diskusi kebutuhan, lanjut ke estimasi dan kesepakatan, lalu struktur dan rancangan, development, review bersama, dan peluncuran.",
    },
    {
      q: "Berapa kali revisi dan apakah ada biaya tambahan?",
      a: "Dua putaran revisi termasuk dalam setiap paket. Revisi pada tahap rancangan jauh lebih ringan daripada setelah development selesai. Revisi tambahan dihitung per jam dan disepakati lebih dulu.",
    },
    {
      q: "Siapa yang memiliki source code, domain, dan hosting?",
      a: "Anda. Setelah pelunasan, source code, domain, dan hosting menjadi milik Anda beserta seluruh akun dan aksesnya. Kami tidak menahan aset sebagai pengikat.",
    },
    {
      q: "Apakah Anda membantu menulis konten?",
      a: "Ya. Kami bantu merapikan struktur informasi dan menulis kerangka pesan. Materi seperti foto produk, daftar layanan, dan harga tetap dari Anda karena itu data yang paling akurat.",
    },
    {
      q: "Apakah website bisa saya perbarui sendiri?",
      a: "Bisa. Untuk halaman statis, kami sertakan panduan singkat. Untuk katalog dan konten yang sering berubah, kami bisa menyiapkan panel admin sederhana atau melatih tim Anda langsung.",
    },
    {
      q: "Teknologi apa yang digunakan?",
      a: "Umumnya Next.js dan Tailwind CSS untuk tampilan, dengan layanan basis data seperti Supabase bila diperlukan. Pilihan teknologi disesuaikan dengan kebutuhan Anda, bukan sebaliknya.",
    },
    {
      q: "Saya sudah punya website. Bisa diperbaiki tanpa membuat ulang?",
      a: "Bisa. Kami mulai dari penilaian cepat: masalah kecepatan, tampilan ponsel, dan struktur halaman. Kalau perbaikan sudah lebih mahal daripada membangun ulang, kami sampaikan terus terang.",
    },
    {
      q: "Apakah Anda menyediakan maintenance setelah website selesai?",
      a: "Ya, sebagai layanan terpisah. Isinya mencakup pembaruan konten, pemantauan uptime, perbaikan masalah, dan pencadangan berkala. Bisa bulanan atau per kebutuhan.",
    },
    {
      q: "Bagaimana keamanan dan privasi data ditangani?",
      a: "Data milik pelanggan Anda disimpan di layanan yang punya kendali akses berlapis. Untuk aplikasi yang menyimpan data pribadi, kami bahas penyimpanan dan siapa saja yang boleh mengaksesnya sebelum development.",
    },
    {
      q: "Bagaimana cara memulai?",
      a: "Kirim informasi tentang bisnis Anda, kebutuhan, dan referensi yang Anda suka lewat WhatsApp. Kami balas dengan arah pengerjaan, daftar kebutuhan, dan estimasi awal — tanpa biaya konsultasi.",
    },
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
    lead: "Asto® — studio digital yang membangun kehadiran online untuk bisnis lokal.",
    paragraphs: [
      "Kami mengerjakan struktur, desain, dan development untuk UMKM, perusahaan, organisasi, dan startup. Mulai dari website bisnis, landing page, undangan digital, sampai toko online, aplikasi web, dan pengalaman 3D.",
      "Setiap proyek dimulai dari pertanyaan yang sama: masalah apa yang Anda ingin selesaikan, dan siapa yang perlu diyakinkan. Dari situ kami menyusun informasi, merancang halaman, lalu membangunnya dengan satu prinsip: halaman harus jelas dan berguna.",
      "Kami bekerja langsung dengan pemilik bisnis. Tidak ada lapisan perantara, sehingga keputusan bisa dibuat cepat dan Anda selalu tahu siapa yang mengerjakan apa.",
    ],
    principles: [
      {
        no: "01",
        title: "Jelas sebelum menarik",
        desc: "Keindahan tanpa arah hanya dekorasi. Kami memastikan pengunjung paham Anda menawarkan apa sebelum mengagumi tampilannya.",
      },
      {
        no: "02",
        title: "Ramah jaringan seluler",
        desc: "Sebagian besar pembeli membuka website dari ponsel. Halaman dibuat ringan dan nampak rapi di layar kecil sejak awal.",
      },
      {
        no: "03",
        title: "Terbuka soal bauran",
        desc: "Kami sampaikan kalau kebutuhan Anda lebih baik ditangani modul yang sudah ada, bukan dibuat dari nol.",
      },
      {
        no: "04",
        title: "Anda memegang kendali",
        desc: "Akun, domain, dan source code diserahkan sepenuhnya. Anda tidak terikat kepada kami untuk memperbarui website.",
      },
    ] as Principle[],
  },
  contact: {
    email: "hello@astodigi.com",
    // TODO: nomor telepon placeholder — ganti dengan nomor kontak asli sebelum publikasi.
    phone: "+62 812-xxxx-xxxx",
    address: "Pamulang, South Tangerang",
    hours: "Mon–Fri, 09:00–18:00 WIB",
  },
  footer: { bigLine: "Mari mulai dari yang penting.", copyright: "All rights reserved." },
};

export default site;
