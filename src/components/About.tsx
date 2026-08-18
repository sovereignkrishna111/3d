import "./styles/About.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I see design beyond aesthetics and development beyond functionality. For me, every project is an opportunity to create an experience that feels intuitive, communicates clearly, and leaves a lasting impression through thoughtful craftsmanship.
        </p>
        <div className="about-social-mobile">
          <a href="https://www.facebook.com/sovereign.krishna/" target="_blank" data-cursor="disable">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/krishna-bhattarai-663690349/" target="_blank" data-cursor="disable">
            <FaLinkedinIn />
          </a>
          <a href="https://x.com/Krishna_k111s" target="_blank" data-cursor="disable">
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/sovereign.krishna_/" target="_blank" data-cursor="disable">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
