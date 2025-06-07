import ig from "../assets/image/Instagram.png";
import gt from "../assets/image/GitHub.png";
import linkd from "../assets/image/LinkedIn.png";
import "../assets/css/Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="bagianAtas">
        <div className="bagianKiri">
          <h1>Arda Yudrik Malana</h1>
          <h2>Software Developer</h2>
        </div>
        <div className="bagianKn">
          <h1>Contact me</h1>
          <div className="bagianSosmed">
            <a
              href="https://www.instagram.com/ardayrkmmm/"
              target="_blank"
              rel="noopener noreferrer"
              className="a-contact"
            >
              <div className="content-sosmed">
                <img src={ig} alt="ig" />
              </div>
            </a>
            <a
              href="https://github.com/ardayrkmm"
              target="_blank"
              rel="noopener noreferrer"
              className="a-contact"
            >
              <div className="content-sosmed">
                <img src={gt} alt="git" />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ardayudrik/"
              target="_blank"
              rel="noopener noreferrer"
              className="a-contact"
            >
              <div className="content-sosmed">
                <img src={linkd} alt="lnk" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bagianBawah">
        <h1>Copy Right by ardayrkm@2025</h1>
      </div>
    </div>
  );
};

export default Footer;
