import ProgressBar from "../../components/progressBar/ProgressBar";
import "./Technologies.css";

const Technologies = () => {
  return (
    <div>
      <div className="my__technologies section__padding" id="technologies">
        <h1> Technologies</h1>
        <div className="my__technologies-progress__wrapper">
          <ProgressBar title="HTML" />
          <ProgressBar title="CSS3, Tailwind, Sass, Less, Bootstrap" />
          <ProgressBar title="Javascript" />
          <ProgressBar title="Git, GitHub" />
          <ProgressBar title="Netlify, Vercel" />
          <ProgressBar title="Adobes: ps, Ai, Lr, Pr" />
        </div>
<div className="my__technologies-bullet__wrapper">

</div>
      </div>
    </div>
  );
};

export default Technologies;
