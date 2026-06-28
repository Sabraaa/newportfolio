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
          description="A Figma-based responsive web project created using React, JavaScript, CSS and BEM methodology. Focused on translating a design into a clean, responsive interface with structured styling and component-based development."
          image={SC1}
          link="https://sabrasgpt.vercel.app/"
          github="https://github.com/Sabraaa/sabrasgpt"
        />
        <ProjectCard
          title="PARLA GRUPPE"
          description="A modern German business website for a service company offering Gebäudereinigung, Hausmeisterservice, Entrümpelung and Umzugsservice. Built with Next.js, TypeScript and Tailwind CSS, featuring a mobile-first layout, service pages, contact flow and responsive production design."
          image={parlaImage}
          link="https://www.parla-gruppe.de/"
          github="https://github.com/Sabraaa/parla"
        />
        <ProjectCard
          title="The Dashboard"
          description="A wallet and dashboard web application created using React, JavaScript, Shopify, CSS and Sass. Focused on clean dashboard UI, reusable components, responsive layouts and structured frontend implementation."
          image={SC3}
          link="https://luxury-gecko-4f43a0.netlify.app/"
          github="https://github.com/Sabraaa/sabrasdashboard"
        />
        <ProjectCard
          title="My Portfolio"
          description="A modern personal portfolio website showcasing my projects, software development skills, frontend experience, and professional journey as a software development trainee in Germany. Built with a clean responsive UI and a dark, modern visual style."
          image={SC2}
          link="https://newportfolio-hazel-eta.vercel.app/"
          github="https://github.com/Sabraaa/newportfolio"
        />
      </div>
    </div>
  );
};

export default Projects;
