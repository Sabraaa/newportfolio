import GradientButton from "../gradientButton/GradientButton";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, image, link, github }) => {
  return (
    <div className="my__card">
      <div className="my__card-img">
        <img src={image} alt={title} />
      </div>

      <div className="my__card-texts">
        <h3> {title}</h3>
        <p> {description}</p>
      </div>

      <div className="my__card-buttons">
        <a href={link}>
          <GradientButton text="Live preview" />
        </a>
        <a href={github}>
          <button className="my__cards-buttons_github">Check on GitHub</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
