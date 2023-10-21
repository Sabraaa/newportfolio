import GradientButton from "../gradientButton/GradientButton";
import "./ProjectCard.css";
import Sabra from "../../assets/Sabra.png"

const ProjectCard = ({title, description}) => {
  return (
    <div className="my__card">
      <div className="my__card-img">
        <img src={Sabra}/>
      </div>

      <div className="my__card-texts">
        <h3> {title}</h3>
        <p> {description}</p>
      </div>
      
      <div className="my__card-buttons">
        <GradientButton text="Live preview" />
        <button >Check on GitHub</button>
      </div>
    </div>
  );
};

export default ProjectCard;
