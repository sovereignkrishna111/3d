import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    id: "01",
    name: "Personal Portfolio",
    category: "Portfolio Website",
    tools: "HTML, CSS, JavaScript, GSAP, Responsive Design",
    image: "/images/projects/Personal Portfolio.png",
  },
  {
    id: "02",
    name: "LARA Fashion",
    category: "E-Commerce Website",
    tools: "React, TypeScript, Tailwind CSS, Product Filtering, Responsive UI",
    image: "/images/projects/KIARA Fashion.png",
  },
  {
    id: "03",
    name: "KARA Studio",
    category: "Creative Landing Page",
    tools: "React, GSAP, Framer Motion, Smooth Scrolling, Modern UI",
    image: "/images/projects/Landing Page.png",
  },
  {
    id: "04",
    name: "Admin Analytics Dashboard",
    category: "Dashboard",
    tools: "React, TypeScript, Chart.js, Redux Toolkit, Data Visualization",
    image: "/images/projects/Admin Analytics Dashboards.png",
  },
  {
    id: "05",
    name: "BLOSSOM Store",
    category: "E-Commerce Platform",
    tools: "Next.js, Tailwind CSS, Stripe, Authentication, Shopping Cart",
    image: "/images/projects/Bloosom Store.png",
  },
  {
    id: "06",
    name: "Finance Analytics Dashboard",
    category: "SaaS Dashboard",
    tools: "Next.js, TypeScript, PostgreSQL, Recharts, Dark Mode",
    image: "/images/projects/Finance Analytics Dashboard.png",
  },
];

const Work = () => {
  useGSAP(() => {
    if (window.innerWidth <= 1024) {
      return;
    }

    const box = document.getElementsByClassName("work-box");
    if (!box || box.length === 0) return;

    function getTranslateX() {
      const container = document.querySelector(".work-container");
      if (!container || !box[0]) return 0;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement
        ? box[0].parentElement.getBoundingClientRect().width
        : window.innerWidth;
      const padding =
        parseInt(window.getComputedStyle(box[0]).paddingLeft || "80") / 2;
      return rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${Math.max(getTranslateX(), 100)}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    const refreshHandler = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", refreshHandler);

    return () => {
      window.removeEventListener("resize", refreshHandler);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
