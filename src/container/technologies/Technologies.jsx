import Bullet from "../../components/bullet/Bullet";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import "./Technologies.css";

const Technologies = () => {
  return (
    <div>
      <div className="my__technologies section__margin" id="technologies">
        <h1> Technologies</h1>
        <div className="my__technologies-progress__wrapper">
          <ProgressBar title="HTML, CSS, JavaScript, TypeScript" />
          <ProgressBar title="React, Next.js, Redux" />
          <ProgressBar title="Tailwind, Sass, BEM, Responsive Web Design" />
          <ProgressBar title="Node.js, Express.js" />
          <ProgressBar title="SQL, SQLite" />
          <ProgressBar title="Git, GitHub, GitLab" />
          <ProgressBar title="Object-Oriented Programming (OOP), Data Structures & Algorithms" />
          <ProgressBar title="API Integration, UX/UI Design Principles" />
          <ProgressBar title="Netlify, Vercel" />
          <ProgressBar title="WordPress, WooCommerce, Basic SEO Principles" />
          <ProgressBar title="Microsoft Office, Photoshop, Illustrator, Premiere, Adobe XD" />
          <ProgressBar title="Agile Methodologies" />
        </div>

        <h1> Soft Skills</h1>
        <div className="my__technologies-bullet__wrapper">
          <Bullet text="Communication Skills" />
          <Bullet text="Teamwork" />
          <Bullet text="Attention to Detail" />
          <Bullet text="Problem-Solving" />
          <Bullet text="Time Management" />
          <Bullet text="Adaptability" />
          <Bullet text="C1 English" />
          <Bullet text="B2 German" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
