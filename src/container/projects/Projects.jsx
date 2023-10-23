import ProjectCard from "../../components/projectscard/ProjectCard";
import "./Projects.css"

const Projects = () => {
  return (
    <div className="section__margin my__projects"  id="projects">
    <h1> Projects</h1>
    <div className="my__projects-wrapper">    
      <ProjectCard title="projectname" description="tecnologies i used" />
      <ProjectCard title="projectname" description="tecnologies i used" />
      <ProjectCard title="projectname" description="tecnologies i used" />
      <ProjectCard title="projectname" description="tecnologies i used" />
    </div>
    </div>
  );
};

export default Projects;
