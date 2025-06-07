import { useParams } from "react-router-dom";
import projectData from "./projecData"; // perhatikan 't' yang hilang

import "../assets/css/DetailProjek.css";
import { useState, useEffect } from "react";

export default function DetailProject() {
  const { id } = useParams();
  const project = projectData.find((p) => String(p.id) === id);

  const [mainImage, setMainImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (project.image && project.image.length > 0) {
      setMainImage(project.image[0]);
    }
  }, [project]);

  if (!project) return <p>Project tidak ditemukan</p>;

  return (
    <div className="project-detail">
      <h1>{project.judul}</h1>
      <p>{project.ringkasan}</p>

      <div onClick={() => setModalOpen(true)}>
        {mainImage && <img src={mainImage} alt="Main" />}
      </div>

      <div className="thumbnail-list">
        {project.image &&
          project.image.length > 0 &&
          project.image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Project Thumbnail ${index}`}
              onClick={() => setMainImage(img)} // Klik untuk ganti main image
              className={img === mainImage ? "active" : ""}
            />
          ))}
      </div>
      <h2 className="des">Deskripsi</h2>
      <h4 className="isiDes">{project.deskripsi}</h4>
      <h3>Fitur</h3>
      <div className="fitur-list">
        {project.fitur.map((f, i) => (
          <div key={i} className="fitur-item">
            <span className="fitur-icon">✔️</span>
            <span className="fitur-text">{f}</span>
          </div>
        ))}
      </div>

      <h3>Cara Menjalankan</h3>
      <div className="fitur-list">
        {project.tutorial.map((u, i) => (
          <div key={i} className="fitur-item">
            <span className="fitur-icon">📌</span>
            <span className="fitur-text">{u}</span>
          </div>
        ))}
      </div>

      <h3>Teknologi</h3>
      <div className="fitur-list">
        {project.teknologi.map((tech, i) => (
          <div key={i} className="fitur-item">
            <span className="fitur-icon">💻</span>
            <span className="fitur-text">{tech}</span>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal" onClick={() => setModalOpen(false)}>
          {mainImage && <img src={mainImage} alt="Zoomed" />}
        </div>
      )}
    </div>
  );
}
