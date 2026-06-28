import ProjectCard from "../../components/projectscard/ProjectCard";
import "./Projects.css";
import SC1 from "../../assets/Screenshot1.png";
import SC3 from "../../assets/Screenshot3.png";
import SC4 from "../../assets/Screenshot4.png";

const Projects = () => {
  const parlaImage = "/projects/parla-gruppe.png";

  return (
    <div className="section__margin my__projects" id="projects">
      <div className="my__project-title">
        <h1> Projects</h1>
      </div>
      <div className="my__projects-wrapper">
        <ProjectCard
          title="Sabra's GPT-3"
          description="Figma-based, responsive, created using React, Js, CSS, and BEM methodology."
          image={SC1}
          link="https://sabrasgpt.vercel.app/"
          github="https://github.com/Sabraaa/sabrasgpt"
        />
        <ProjectCard
          title="PARLA GRUPPE"
          description="A modern German business website for a service company offering Gebäudereinigung, Hausmeisterservice, Entrümpelung and Umzugsservice. Built with a clean, professional, responsive design."
          image={parlaImage}
          link="https://www.parla-gruppe.de/"
        />
        <ProjectCard
          title="The Dashboard"
          description="A wallet with dashboard project, created using React, Js, Shopify, CSS and SASS."
          image={SC3}
          link="https://luxury-gecko-4f43a0.netlify.app/"
          github="https://github.com/Sabraaa/sabrasdashboard"
        />
        <ProjectCard
          title="Sabra's Portfolio"
          description="Minimal portfolio project, created using React, Js, CSS and SASS."
          image={SC4}
          link="https://sabrasportfilio.vercel.app/"
          github="https://github.com/Sabraaa/sabrasportfilio"
        />
      </div>
    </div>
  );
};

export default Projects;
