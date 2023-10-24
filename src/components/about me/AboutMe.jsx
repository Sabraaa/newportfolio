import Bullet from "../bullet/Bullet";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div id="aboutme" className="my__aboutme">
      <div className="my__aboutme-line"></div>

      <div className="my__aboutme-points">
        <div className="my__aboutme-points_each">
          <Bullet />
          <h3>2020</h3>
          <p>
            I embarked on my coding journey and gained hands-on experience as a
            frontend React intern at Pejvak Co. During this immersive
            internship, I absorbed valuable knowledge and demonstrated my
            ability to tackle a wide range of tasks.
          </p>
        </div>

        <div className="my__aboutme-points_each">
          <Bullet />
          <h3>2021</h3>
          <p>
            After concluding my internship, I transitioned into freelance work,
            taking on projects solo. I skillfully developed dashboards,
            portfolios, and various projects while continuously expanding my
            knowledge base
          </p>
        </div>

        <div className="my__aboutme-points_each">
          <Bullet />
          <h3>2022</h3>
          <p>
            While freelancing, I honed my design skills by creating restaurant
            menus and landing pages. I also dedicated myself to mastering
            advanced frontend concepts and crucial team collaboration skills
          </p>
        </div>

        <div className="my__aboutme-points_each">
          <Bullet />
          <h3>2023</h3>
          <p>
            {" "}
            Now, armed with a polished portfolio, I'm ready to tackle corporate
            challenges. I'm motivated to excel in professional roles while
            keeping my passion for ongoing learning in the coding world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
