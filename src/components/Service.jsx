import "../assets/css/Service.css";
import mobile from "../assets/image/andro.png";
import code from "../assets/image/Code.png";
import design from "../assets/image/Design.png";
import web from "../assets/image/Web.png";
import ServiceCard from "./ServiceCard";
const Service = () => {
  return (
    <div className="ContainerService">
      <div className="bagianTextS">
        <h1>My Services</h1>
        <p>
          Kategori layanan berdasarkan keahlian saya di bidang pengembangan
          aplikasi dan sistem.
        </p>
      </div>

      <div className="bagianCardService">
        <ServiceCard
          nama="Mobile Development"
          deskripsi="Saya membuat aplikasi mobile Android dan iOS menggunakan Flutter, mulai dari desain UI hingga integrasi fitur seperti autentikasi, database, dan API"
          gambar={mobile}
        />
        <ServiceCard
          nama="Front End"
          deskripsi="Saya mengubah desain (Figma/Adobe XD) menjadi tampilan web responsif menggunakan HTML, CSS, dan JavaScript atau framework seperti Flutter Web."
          gambar={web}
        />
        <ServiceCard
          nama="Backend"
          deskripsi="Saya membangun REST API menggunakan Laravel atau Flask, termasuk fitur autentikasi, manajemen data, dan integrasi dengan database MySQL atau Firebase."
          gambar={code}
        />
        <ServiceCard
          nama="Design Database"
          deskripsi="Saya merancang struktur database mulai dari ERD (Entity Relationship Diagram) hingga implementasi tabel dan relasinya untuk mendukung kebutuhan aplikasi."
          gambar={design}
        />
      </div>
    </div>
  );
};
export default Service;
