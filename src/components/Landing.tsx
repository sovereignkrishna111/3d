import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { MdArrowForward, MdOutlineFileDownload } from "react-icons/md";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-hero-glow"></div>
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              KRISHNA
              <br />
              <span>BHATTARAI</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Designer</div>
              <div className="landing-h2-2">Developer</div>
            </h2>
            <h2 className="landing-info-h2-sub">
              <div className="landing-h2-info">Developer</div>
              <div className="landing-h2-info-1">Designer</div>
            </h2>

            <div className="landing-mobile-details">
              <p className="landing-mobile-tagline">
                Crafting scalable, high-performance web applications and intuitive digital experiences with modern web technologies.
              </p>
              <div className="landing-mobile-actions">
                <a href="#work" className="landing-btn-primary" data-cursor="disable">
                  View Work <MdArrowForward />
                </a>
                <a
                  href="/resume/Krishna_Bhattarai_Professional_CV.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="landing-btn-secondary"
                  data-cursor="disable"
                >
                  Resume <MdOutlineFileDownload />
                </a>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
