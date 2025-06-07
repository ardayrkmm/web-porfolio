import kanan from "../assets/image/arrow.png";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="projectcs">
      <img src={project.image[0]} alt={project.judul} className="project-img" />
      <div className="project-info">
        <h3>{project.judul}</h3>
        <p>{project.ringkasan}</p>
        <div className="details-btn">
          <Link to={`/project/${project.id}`}>Details</Link>
          <div className="arrow">
            <img src={kanan} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
