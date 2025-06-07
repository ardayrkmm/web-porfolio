import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../assets/css/nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="Navbar">
      <h1 className="Logo">Ardyrkm</h1>

      <div className={`nav-container ${isOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/project"
              className={location.pathname === "/project" ? "active" : ""}
            >
              Project
            </Link>
          </li>
        </ul>
      </div>
      <a
        href="https://wa.me/6285951545918"
        target="_blank"
        rel="noopener noreferrer"
        className="a-contact"
      >
        <div className="btn-contact">
          <h1>Contact Me</h1>
        </div>
      </a>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
    </div>
  );
};

export default Nav;
