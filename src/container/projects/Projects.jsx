import ProjectCard from "../../components/projectscard/ProjectCard";
import "./Projects.css"

const Projects = () => {
  return (
    <div className="section__padding my__projects" id="#projects">
      <ProjectCard title="projectname" description="tecnologies i used" />
      <ProjectCard title="projectname" description="tecnologies i used" />
      <ProjectCard title="projectname" description="tecnologies i used" />
      <ProjectCard title="projectname" description="tecnologies i used" />
    </div>
  );
};

export default Projects;
