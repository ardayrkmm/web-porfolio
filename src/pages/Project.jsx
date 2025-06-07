import ProjectCard from "../components/ProjectCard";
import kanan from "../assets/image/arrow.png";
import kiri from "../assets/image/kiri.png";
import "../assets/css/Project.css";
import { useState } from "react";
import projectData from "./projecData";

const Project = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const totalPages = Math.ceil(projectData.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectData.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="project-section">
      <div className="project-header">
        <h4>Kumpulan Project</h4>
        <h2>Project</h2>
        <p>
          Kumpulan dari project yang telah saya buat dengan menggunakan
          teknologi <b>Flutter</b>, <b>Flask</b>, <b>React</b>, dan{" "}
          <b>Laravel</b>
        </p>
        <div className="underline"></div>
      </div>

      <div className="bagianKanan">
        <div className="project-list">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Pagination dipindah ke luar project-list */}
        <div className="pagination">
          <span className="page-number" onClick={handlePrev}>
            <img src={kiri} alt="prev" />
          </span>
          {[...Array(totalPages)].map((_, index) => (
            <span
              key={index}
              className="page-number"
              style={{
                backgroundColor:
                  currentPage === index + 1 ? "#2a70b8" : "white",
                color: currentPage === index + 1 ? "white" : "#2a70b8",
              }}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </span>
          ))}
          <div className="page-number" onClick={handleNext}>
            <img src={kanan} alt="next" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
