const projectData = [
  {
    id: 1,
    judul: "Virtual Tour : SMA NU Kota Tegal ",
    ringkasan:
      "Proyek ini adalah virtual tour 360° SMA NU Kota Tegal yang memungkinkan eksplorasi sekolah secara online dengan fitur interaktif",
    deskripsi:
      "Virtual Tour ini menampilkan lingkungan SMA NU Kota Tegal secara interaktif menggunakan teknologi 360°. Pengguna dapat menjelajahi ruang-ruang sekolah secara virtual, berpindah antar lokasi dengan klik hotspot, serta melihat informasi tambahan di tiap area.",
    teknologi: ["Kamera 360", "Lapentor"],
    fitur: [
      "Tampilan 360° Interaktif",
      "Navigasi Area Sekolah",
      "Integrasi dengan Lapentor",
      "Tampilan Responsif (Mobile Friendly)",
      "Desain User Friendly",
    ],
    tutorial: [
      "Buka Link Virtual Tour",
      "Navigasi Sekolah",
      "Gunakan Hotspot",
      "Lihat Info Spot",
      "Gunakan Mini Map",
      "Zoom In / Out",
    ],
    image: [
      "/portofolio/virtualtoursma/vr1.png",
      "/portofolio/virtualtoursma/vr2.png",
      "/portofolio/virtualtoursma/vr3.png",
      "/portofolio/virtualtoursma/vr4.png",
    ],
    link: "https://app.lapentor.com/sphere/sma-nu-tegal?scene=661fa9597feb8403c401adb5",
  },
  {
    id: 2,
    judul: "SiPanda : Sistem Informasi Hewan Dilindungi",
    ringkasan:
      "Proyek ini adalah aplikasi mobile Flutter yang menyajikan informasi hewan dilindungi, data balai konservasi, chatbot berbasis LLM, serta deteksi AI melalui API eksternal.",
    deskripsi:
      "SiPanda adalah aplikasi edukatif berbasis Flutter yang menyediakan informasi tentang hewan dilindungi di Indonesia. Aplikasi ini dilengkapi dengan fitur data hewan dan balai konservasi, chatbot cerdas berbasis LLM (Large Language Model), serta integrasi deteksi gambar hewan menggunakan AI yang terhubung ke API eksternal.",
    teknologi: ["Flutter", "LLM", "REST API", "Vision API", "Mysql"],
    fitur: [
      "Informasi Spesies Hewan Dilindungi",
      "Data Balai Konservasi Nasional",
      "Chatbot Interaktif (LLM)",
      "Deteksi Gambar Hewan via AI (API)",
      "Antarmuka Mobile yang Mudah Digunakan",
    ],
    tutorial: [
      "Buka Aplikasi SiPanda",
      "Telusuri Menu Data Hewan dan Balai",
      "Gunakan Chatbot untuk Bertanya Seputar Hewan",
      "Coba Fitur Deteksi Gambar untuk Identifikasi",
      "Terima Hasil dari LLM dan AI melalui API",
    ],
    image: [
      "/portofolio/sipandaMobile/sm1.jpg",
      "/portofolio/sipandaMobile/sm2.png",
      "/portofolio/sipandaMobile/sm3.png",
      "/portofolio/sipandaMobile/sm4.png",
    ],
    link: "#",
  },
  {
    id: 3,
    judul: "SiPanda Web : Sistem Informasi Hewan Dilindungi (Website)",
    ringkasan:
      "Proyek ini adalah website sistem informasi hewan dilindungi berbasis Flask dan MySQL, dilengkapi fitur chatbot, deteksi AI, pelaporan hewan, serta pemetaan lokasi balai konservasi.",
    deskripsi:
      "SiPanda versi website merupakan sistem informasi hewan dilindungi yang dibangun menggunakan Flask dan MySQL. Website ini menyediakan data hewan yang dilindungi, balai konservasi, serta fitur chatbot berbasis LLM dan deteksi hewan menggunakan AI. Selain itu, pengguna dapat melaporkan penemuan hewan secara langsung, dan admin dari masing-masing balai konservasi dapat mengelola serta melihat laporan dari masyarakat. Website juga dilengkapi pemetaan lokasi balai konservasi terdekat untuk mempermudah akses.",
    teknologi: [
      "Flask",
      "MySQL",
      "LLM",
      "REST API",
      "TensorFlow",
      "Google Maps API",
    ],
    fitur: [
      "Informasi Hewan Dilindungi",
      "Data Lengkap Balai Konservasi",
      "Chatbot Interaktif (LLM)",
      "Deteksi AI Hewan via Upload Gambar",
      "Formulir Laporan Penemuan Hewan",
      "Pemetaan Lokasi Balai Konservasi Terdekat",
      "Dashboard Admin untuk Balai Konservasi",
      "Manajemen Data & Laporan Pengguna",
    ],
    tutorial: [
      "Akses Website SiPanda",
      "Telusuri Informasi Hewan dan Balai",
      "Gunakan Chatbot untuk Bertanya",
      "Coba Deteksi Hewan via Upload Gambar",
      "Laporkan Hewan Dilindungi yang Ditemukan",
      "Lihat Lokasi Balai Terdekat di Peta",
      "Admin Login untuk Akses Dashboard Laporan",
    ],
    image: [
      "/portofolio/sipandaWeb/sw3.png",
      "/portofolio/sipandaWeb/sw2.png",
      "/portofolio/sipandaWeb/sw1.png",

      "/portofolio/sipandaWeb/sw4.png",
    ],
    link: "#",
  },
  {
    id: 4,
    judul: "Diary App : aplikasi pencatatan harian",
    ringkasan:
      "Diary App adalah aplikasi catatan harian berbasis Flutter dan Firebase yang memungkinkan pengguna mencatat momen pribadi, menyimpan kenangan secara aman di cloud, dan mengaksesnya kapan saja. Aplikasi ini didesain dengan antarmuka sederhana namun intuitif, cocok untuk mencatat keseharian, refleksi diri, atau kegiatan penting.",
    deskripsi:
      "Diary App merupakan aplikasi mobile yang dikembangkan menggunakan Flutter dan Firebase untuk mencatat kegiatan atau perasaan harian pengguna. Setiap catatan disimpan secara online menggunakan Firebase Firestore, sehingga dapat diakses kembali dari perangkat lain selama pengguna login. Fitur keamanan seperti autentikasi Firebase menjaga privasi pengguna. Selain itu, pengguna dapat menambahkan gambar ke dalam catatan, mengedit atau menghapus entri, serta melihat riwayat catatan berdasarkan tanggal. Aplikasi ini dirancang untuk membantu pengguna membentuk kebiasaan journaling secara konsisten dan aman.",
    teknologi: ["Flutter", "Firebase", "GetX"],
    fitur: [
      "Buat, edit, dan hapus catatan harian",
      "Login & Registrasi menggunakan Firebase Authentication",
      "Simpan catatan di cloud (Firestore)",
      "Tambahkan gambar pada catatan",
      "Riwayat catatan berdasarkan tanggal",
      "Cari catatan berdasarkan kata kunci",
      "Dashboard Admin untuk Balai Konservasi",
      "Manajemen Data & Laporan Pengguna",
    ],
    tutorial: [
      "Download dan buka Diary App",
      "Login atau daftar akun dengan email dan password",
      "Klik tombol 'Tambah Catatan' untuk mulai menulis",
      "Isi judul, isi catatan, dan tambahkan gambar jika perlu",
      "Simpan catatan dan lihat riwayatnya di halaman utama",
      "Gunakan fitur 'Cari' untuk menemukan catatan tertentu",
      "Klik catatan untuk mengedit atau menghapus",
    ],
    image: [
      "/portofolio/DiaryApp/da1.jpg",
      "/portofolio/DiaryApp/da2.png",
      "/portofolio/DiaryApp/da3.png",
    ],
    link: "#",
  },
  {
    id: 5,
    judul: "Kopi App",
    ringkasan:
      "KopiApp adalah aplikasi e-Commerce berbasis Flutter dan Firebase yang memfasilitasi petani lokal untuk menjual biji kopi langsung ke konsumen tanpa perantara. Aplikasi ini mendukung kesejahteraan petani dan memberikan akses mudah bagi pembeli untuk mendapatkan kopi berkualitas dari sumbernya.",
    deskripsi:
      "KopiApp merupakan solusi digital berbasis Flutter dan Firebase yang dirancang untuk mempertemukan petani kopi lokal dengan konsumen tanpa melibatkan pihak ketiga. Aplikasi ini memungkinkan petani untuk memasarkan dan mengelola produk mereka secara langsung, termasuk menambahkan informasi produk, harga, dan stok. Konsumen dapat menjelajahi berbagai jenis biji kopi, melakukan pembelian, serta memberikan ulasan. Dengan sistem login yang aman dan database realtime dari Firebase, KopiApp menjadi jembatan yang efektif dalam mendukung ekonomi petani lokal serta memperluas akses pasar kopi nusantara.",
    teknologi: ["Flutter", "Firebase", "GetX"],
    fitur: [
      "Daftar dan login untuk petani dan konsumen",
      "Upload produk biji kopi oleh petani (gambar, deskripsi, harga, stok)",
      "List produk lengkap yang bisa dibeli langsung oleh konsumen",
      "Keranjang dan sistem checkout",
      "Transaksi dan riwayat pembelian",
      "Pencarian dan filter produk",
      "Rating & review produk oleh pembeli",
      "Notifikasi status pesanan",
      "Dashboard admin (opsional) untuk monitoring data",
    ],
    tutorial: [
      "Download dan buka aplikasi KopiApp",
      "Daftar sebagai petani atau konsumen menggunakan email",
      "Petani: Tambahkan produk biji kopi dengan foto, deskripsi, harga, dan stok",
      "Konsumen: Jelajahi dan cari biji kopi favorit melalui halaman produk",
      "Tambahkan produk ke keranjang dan lanjut ke proses checkout",
      "Lakukan pembayaran sesuai metode yang tersedia",
      "Pantau status pesanan melalui halaman transaksi",
      "Berikan ulasan setelah produk diterima",
    ],
    image: [
      "/portofolio/KopiApp/kp1.jpg",
      "/portofolio/KopiApp/kp2.png",
      "/portofolio/KopiApp/kp3.png",
      "/portofolio/KopiApp/kp4.png",
    ],
    link: "#",
  },
];
export default projectData;
