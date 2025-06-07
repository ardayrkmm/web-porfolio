import "../assets/css/Home.css";
import pr from "../assets/image/pk.png";
import Carousel from "../components/Carusol";
import Service from "../components/Service";
import profil from "../assets/image/11111.jpg";
const Home = () => {
  return (
    <div className="container">
      <div className="bagianHeader">
        <div className="bagianAtasH">
          <h2>Hai Semua</h2>
          <h3>
            <span>Saya,</span> Arda Yudrik Malana
          </h3>
          <h1>Software Developer</h1>
        </div>

        <div className="bagianBawahH">
          <div className="bagianIl">
            <div className="il1"></div>

            <div className="il2"></div>
          </div>

          <img src={pr} alt="ss" />
        </div>
      </div>
      <Carousel />
      <Service />
      <div className="bagianHeaderAbout">
        <h1>About</h1>
        <p>
          Halo, Saya Arda yudrik malana seorang Software Developer yang
          bersemangat dalam menciptakan solusi digital yang inovatif dan
          efisien. Dengan pengalaman dan keahlian dalam Flutter, Flask, Laravel,
          dan Firebase, saya mengembangkan aplikasi mobile dan backend yang
          andal dan user-friendly.
        </p>
        <div className="ilHeaderAb"></div>
      </div>
      <div className="bagianTengahAbout">
        <div className="imgAbout">
          <img src={profil} alt="" />
        </div>
        <div className="bagianTextAbout">
          <h2>Software Developer</h2>
          <p>
            Saya fokus pada pengembangan aplikasi dengan desain yang responsif,
            performa tinggi, dan arsitektur sistem yang terorganisir.
          </p>
          <div className="bagianListAbout">
            <div className="isiListAbout">
              <div className="iconList"></div>
              <h3>
                <span>Birthday:</span> 15 Juli 2003
              </h3>
            </div>
            <div className="isiListAbout">
              <div className="iconList"></div>
              <h3>
                <span>Phone:</span> +62 812-3456-7890
              </h3>
            </div>
            <div className="isiListAbout">
              <div className="iconList"></div>
              <h3>
                <span>Email:</span> arda@example.com
              </h3>
            </div>
            <div className="isiListAbout">
              <div className="iconList"></div>
              <h3>
                <span>Location:</span> Tegal, Indonesia
              </h3>
            </div>
            <div className="isiListAbout">
              <div className="iconList"></div>
              <h3>
                <span>Freelance:</span> Available
              </h3>
            </div>
            <div className="isiListAbout">
              <div className="iconList"></div>
              <h3>
                <span>Github:</span> github.com/ardayudrik
              </h3>
            </div>
            <div className="isiListAbout">
              <div className="iconList"></div>
              <h3>
                <span>LinkedIn:</span> linkedin.com/in/arda
              </h3>
            </div>
          </div>
          <h4>
            Dengan keahlian dalam berbagai teknologi seperti Flutter untuk
            pengembangan aplikasi mobile, Flask untuk membangun API ringan,
            Laravel untuk sistem backend yang terstruktur, dan Firebase untuk
            solusi cloud, saya selalu siap membantu Anda mewujudkan ide menjadi
            kenyataan.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
