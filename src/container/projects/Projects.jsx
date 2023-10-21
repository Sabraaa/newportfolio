import ProjectCard from "../../components/projectscard/ProjectCard";
import "./Projects.css"

const Projects = () => {
  return (
    <div className="my__projects section__padding ">
    <h1> Projects</h1>
    <div className="my__projects-wrapper" id="#projects">    
      <ProjectCard title="projectname" description="tecnologies i used" />
      <ProjectCard title="projectname" description="tecnologies i used" />
      <ProjectCard title="projectname" description="tecnologies i used" />
      <ProjectCard title="projectname" description="tecnologies i used" />
    </div>
    </div>
  );
};

export default Projects;
