import ProjectCard from "../../components/projectscard/ProjectCard";
import "./Projects.css";
import SC1 from "../../assets/Screenshot1.png";
import SC2 from "../../assets/Screenshot2.png";
import SC3 from "../../assets/Screenshot3.png";

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
          github="https://github.com/Sabraaa/parla"
        />
        <ProjectCard
          title="The Dashboard"
          description="A wallet with dashboard project, created using React, Js, Shopify, CSS and SASS."
          image={SC3}
          link="https://luxury-gecko-4f43a0.netlify.app/"
          github="https://github.com/Sabraaa/sabrasdashboard"
        />
        <ProjectCard
          title="Sabra Akhavan Portfolio"
          description="A modern personal portfolio website showcasing my projects, skills, frontend development experience, and professional journey as a software development trainee in Germany."
          image={SC2}
          link="https://newportfolio-hazel-eta.vercel.app/"
          github="https://github.com/Sabraaa/newportfolio"
        />
      </div>
    </div>
  );
};

export default Projects;
