import Bullet from "../../components/bullet/Bullet";
import ProgressBar from "../../components/progressBar/ProgressBar";
import "./Technologies.css";

const Technologies = () => {
  return (
    <div>
      <div className="my__technologies section__margin" id="technologies">
      
        <h1> Technologies</h1>
        <div className="my__technologies-progress__wrapper">
          <ProgressBar title="HTML" />
          <ProgressBar title="CSS3, Tailwind, Sass, Less, Bootstrap" />
          <ProgressBar title="Javascript" />
          <ProgressBar title="Git, GitHub" />
          <ProgressBar title="Netlify, Vercel" />
        </div>

        <h1> Soft Skills</h1>
        <div className="my__technologies-bullet__wrapper">
          <Bullet text="Communication Skills"/>
          <Bullet text="Teamwork"/>
          <Bullet text="Problem-Solving"/>
          <Bullet text="Attention to Detail"/>
          <Bullet text="Time Management"/>
          <Bullet text="Adaptability"/>
          <Bullet text="B2 english"/>
          <Bullet text="B1 deutsch"/>
        </div>
        <h1> Additional Skills</h1>
        <div className="my__technologies-bullet__wrapper">
          <Bullet text="Basic Knowledge of SEO Principles"/>
          <Bullet text="Adobes Tools: ps, Ai, Lr, Pr"/>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
