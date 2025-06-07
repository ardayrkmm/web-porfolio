import React from "react";
import "../assets/css/Carousol.css";
import logo from "../assets/image/logo.png";

const Carousel = () => {
  const items = [
    "Flutter",
    "Laravel",
    "React Js",
    "Flask",
    "Tailwind",
    "Flutter",
    "Laravel",
    "React Js",
    "Flask",
    "Tailwind",
    "Flutter",
    "Laravel",
    "React Js",
    "Flask",
    "Tailwind",
  ];

  return (
    <div className="carousel">
      <div className="carousel-track">
        {/* Duplikat biar seamless looping */}
        {[...items, ...items].map((item, index) => (
          <div className="carousel-item" key={index}>
            <img src={logo} className="imgL" alt="Logo" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
