import { useState } from "react";
import "../assets/css/About.css";

const About = () => {
  const [showAll, setShowAll] = useState(false);
  const togelShow = () => {
    setShowAll((prev) => !prev);
  };
  // Data dummy dibagi dua bagian
  const resumeKiri = [
    {
      title: "RPL(Rekayasa Perangkat Lunak)",
      year: "2019 - 2022",
      place: "SMK Karya Bhakti Brebes",
      desc: "Fokus pada pengembangan software dan menghasilkan produk website dengan CMS",
    },
    {
      title: "Teknik Informatika",
      year: "2022 - Masih Aktif",
      place: "Politeknik Harapan Bersama Tegal",
      desc: "Fokus pada pengembangan software",
    },
    {
      title: "Full-Stack Laravel Flutter : E-Commerce App",
      year: "22 Januari 2023",
      place: "Buildwithangga",
      desc: "Membuat Projek flutter dengan backend laravel sebuah Aplikasi E-Commerce",
    },
    {
      title: "Mastering Flutter 2.0: Membangun Aplikasi Travel dan Pesawat",
      year: "22 Agustus 2023",
      place: "Buildwithangga",
      desc: "Membuat Projek flutter dengan Firebase sebuah Aplikasi Travel dan Pesawat",
    },
    {
      title: "Fullstack JavaScript Developer",
      year: "06 Mei 2022",
      place: "Buildwithangga",
      desc: "Membuat Projek Website dengan framework React JS sebuah Website tentang Traveling",
    },
  ];

  const resumeKanan = [
    {
      title: "PKL(Praktek Kerja Lapangan)",
      year: "2021",
      place: "Dinas Pendidikan Pemuda dan Olahraga Kabupaten Brebes",
      desc: "",
    },
    {
      title: "PPM(Pengabdian Pada Masyarakat)",
      year: "September - Desember",
      place: "SMA NU Kota Tegal",
      desc: (
        <div>
          <p>1. Membangun Website Profil dengan CMS Wordpress</p>
          <p>2. Membuat Virtual Tour</p>
        </div>
      ),
    },
    {
      title: "Panitia Invofest 2024 (Divisi IT Competition)",
      year: "Agustus - September",
      place: "Politeknik Harapan Bersama Tegal",
      desc: (
        <div>
          <p>1. Melakukan Pengawasan terhadap peserta IT Competition</p>
          <p>2. Mengatur komunikasi dengan juri, memberi briefing peserta</p>
          <p>3. Mengawasi jalannya kompetisi dan dokumentasi</p>
          <p>4. Menyusun laporan akhir kompetisi</p>
        </div>
      ),
    },
    {
      title: "Programming Division",
      year: "Okt 2024 - Sekarang",
      place: "Forum Riset Teknologi (FoRTi)",
      desc: (
        <div>
          <p>1. Penelitian bidang TI</p>
          <p>2. Memberikan materi dan mentoring</p>
          <p>3. Bimbingan proyek penelitian</p>
        </div>
      ),
    },
  ];
  return (
    <div className="ContainerAbout">
      <div className="bagianBottomHeader">
        <h1>Resume</h1>
        <div className="il2about"></div>
        <p>
          Saya adalah seorang Software Developer yang berdedikasi untuk
          menciptakan solusi digital inovatif menggunakan teknologi modern.
          Dengan pengalaman di Flutter, Flask, Laravel, dan Firebase, saya mampu
          mengembangkan aplikasi mobile dan backend yang handal
        </p>
        <div className="bagianContentList">
          <div className="ContentListKiri">
            {resumeKiri
              .slice(0, showAll ? resumeKiri.length : 2)
              .map((item, index) => (
                <div className="listResume" key={index}>
                  <div className="bagianKiriResume">
                    <div className="kotak"></div>
                    <div className="persegi"></div>
                  </div>
                  <div className="bagianKanan">
                    {index === 0 && <h4>Education</h4>}
                    <h1>{item.title}</h1>
                    <h5>{item.year}</h5>
                    <p>
                      <em>{item.place}</em>
                    </p>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
          </div>

          <div className="ListContentBagianKanan">
            {resumeKanan
              .slice(0, showAll ? resumeKanan.length : 2)
              .map((item, index) => (
                <div className="listResume" key={index}>
                  <div className="bagianKiriResume">
                    <div className="kotak"></div>
                    <div className="persegi"></div>
                  </div>
                  <div className="bagianKanan">
                    {index === 0 && <h4>Experience</h4>}
                    <h1>{item.title}</h1>
                    <h5>{item.year}</h5>
                    <p>
                      <em>{item.place}</em>
                    </p>
                    {item.desc}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div
          className="lihatSemuaContainer"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          <button onClick={togelShow} className="btnLihatSemua">
            {showAll ? "Sembunyikan" : "Lihat Semua"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
