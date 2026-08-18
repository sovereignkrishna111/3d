import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Self-Taught Developer & Designer</h4>
                <h5>Independent Growth</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built expertise through self-directed learning, transforming curiosity into practical skills across web development and design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & CEO</h4>
                <h5>SONGOLI</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Founded SONGOLI to turn vision into action, leading digital innovation with a focus on meaningful products and scalable impact.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher-Level Education</h4>
                <h5>Advanced Learning</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Continuing education at a higher level while strengthening technical depth, leadership, and long-term strategic growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
