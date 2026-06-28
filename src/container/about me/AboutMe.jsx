import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div id="aboutme" className="my__aboutme section__padding">
      <h1>About me</h1>
      <div className="my__aboutme-line"></div>

      <div className="my__aboutme-points">

{/* STEP 1 */}
        <div className="my__aboutme-points_each">
          <div className="my__aboutme-year">2020</div>
          <div className="same__bullet same__bullet-responsive"></div>
          <p>
            I embarked on my coding journey and gained hands-on experience as a
            frontend React intern at <span>Pejvak Dade Khazar</span>. During this immersive
            internship, I absorbed valuable knowledge and demonstrated my
            ability to tackle a wide range of tasks.
          </p>
        </div>
{/* STEP 2 */}
        <div className="my__aboutme-points_each">
          <div className="my__aboutme-year">2021</div>
          <div className="same__bullet same__bullet-responsive"></div>
          <p>
            After concluding my internship, I transitioned into freelance work,
            taking on projects solo. I skillfully developed dashboards,
            portfolios, and various projects while continuously expanding my
            knowledge base.
          </p>
        </div>
{/* STEP 3 */}
        <div className="my__aboutme-points_each">
          <div className="my__aboutme-year">2022</div>
          <div className="same__bullet same__bullet-responsive"></div>
          <p>
            At <span>Site Nova</span>, I honed essential team skills and advanced
            frontend proficiency. This experience empowered me to excel in
            collaborative environments while elevating my technical expertise.
          </p>
        </div>
{/* STEP 4 */}
        <div className="my__aboutme-points_each">
          <div className="my__aboutme-year">2023</div>
          <div className="same__bullet same__bullet-responsive"></div>
          <p>
            Now, armed with a polished portfolio, I'm ready to tackle corporate
            challenges. I'm motivated to excel in professional roles while
            keeping my passion for ongoing learning in the coding world.
          </p>
        </div>
{/* STEP 5 */}
        <div className="my__aboutme-points_each">
          <div className="my__aboutme-year">2024</div>
          <div className="same__bullet same__bullet-responsive"></div>
          <p>
            I focused on improving my frontend skills and started learning
            Next.js more seriously, building stronger and more structured web
            projects.
          </p>
        </div>
{/* STEP 6 */}
        <div className="my__aboutme-points_each">
          <div className="my__aboutme-year">2025</div>
          <div className="same__bullet same__bullet-responsive"></div>
          <p>
            I expanded my skills beyond frontend by focusing more on backend
            development and databases. I also started my Ausbildung in Germany
            at <span>Schneider Electric</span>.
          </p>
        </div>
{/* STEP 7 */}
        <div className="my__aboutme-points_each">
          <div className="my__aboutme-year">2026</div>
          <div className="same__bullet same__bullet-responsive"></div>
          <p>
            I am continuing my Ausbildung while actively improving my skills in
            both frontend and backend development. I am working on becoming a
            stronger full-stack developer through real projects and continuous
            practice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
