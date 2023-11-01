import ProjectCard from "../../components/projectscard/ProjectCard";
import "./Projects.css";
import SC1 from "../../assets/Screenshot1.png";
import SC2 from "../../assets/Screenshot2.png";
import SC3 from "../../assets/Screenshot3.png";
import SC4 from "../../assets/Screenshot4.png";

const Projects = () => {
  return (
    <div className="section__margin my__projects" id="projects">
      <div className="my__project-title">
        <h1> Projects</h1>
      </div>
      <div className="my__projects-wrapper">
        <ProjectCard
          title="Sabras GPT-3"
          description="Figma-based, fully responsive project about GPT-3, created using React, Js, CSS, and BEM methodology"
          image={SC1}
          link="https://sabrasgpt.vercel.app/"
          github="https://github.com/Sabraaa/sabrasgpt"
        />
        <ProjectCard
          title="My Portfolio"
          description="Figma-based, fully responsive portfolio project, created using React+Vite, Js, CSS, and BEM methodology"
          image={SC2}
          link="https://newportfolio-hazel-eta.vercel.app/"
          github="https://github.com/Sabraaa/newportfolio"
        />
        <ProjectCard
          title="The Dashboard"
          description="A wallet with dashboard project, created using React, Js, Shopify, CSS and SASS"
          image={SC3}
          link="https://luxury-gecko-4f43a0.netlify.app/"
          github="https://github.com/Sabraaa/sabrasdashboard"
        />
        <ProjectCard
          title="Sabra's Portfolio"
          description="Minimal portfolio project, created using React, Js, CSS and SASS"
          image={SC4}
          link="https://sabrasportfilio.vercel.app/"
          github="https://github.com/Sabraaa/sabrasportfilio"
        />
      </div>
    </div>
  );
};

export default Projects;
