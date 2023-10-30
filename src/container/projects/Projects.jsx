import ProjectCard from "../../components/projectscard/ProjectCard";
import "./Projects.css"
import SC1 from "../../assets/Screenshot1.png"



const Projects = () => {
  return (
    <div className="section__margin my__projects"  id="projects">
    <h1> Projects</h1>
    <div className="my__projects-wrapper">    
      <ProjectCard title="Sabras GPT-3" description="Figma-based, fully responsive project about GPT-3, created using React, CSS, and BEM methodology."  image={SC1} link="https://sabrasgpt.vercel.app/" github="https://github.com/Sabraaa/sabrasgpt" />
      <ProjectCard title="projectname" description="tecnologies i used" />
      <ProjectCard title="projectname" description="tecnologies i used" />
      <ProjectCard title="projectname" description="tecnologies i used" />
    </div>
    </div>
  );
};

export default Projects;
