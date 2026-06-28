import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div id="aboutme" className="my__aboutme section__padding">
      <h1>About me</h1>
      <div className="my__aboutme-line"></div>

      <div className="my__aboutme-points">
        <div className="my__aboutme-points_each">
          <div className="my__aboutme-year">2020</div>
          <div className="same__bullet same__bullet-responsive"></div>
          <p>
            Started my coding journey as a frontend React intern at
            <span> Pejvak Dade Khazar</span>, gaining hands-on experience and
            building a strong foundation in web development.
          </p>
        </div>

        <div className="my__aboutme-points_each">
          <div className="my__aboutme-year">2022</div>
          <div className="same__bullet same__bullet-responsive"></div>
          <p>
            Worked at <span>Site Nova</span>, improved my frontend skills, and
            learned how to collaborate better in a professional team
            environment.
          </p>
        </div>

        <div className="my__aboutme-points_each">
          <div className="my__aboutme-year">2024</div>
          <div className="same__bullet same__bullet-responsive"></div>
          <p>
            Focused on improving my frontend skills and started learning
            Next.js more seriously by building more structured web projects.
          </p>
        </div>

        <div className="my__aboutme-points_each">
          <div className="my__aboutme-year">2026</div>
          <div className="same__bullet same__bullet-responsive"></div>
          <p>
            I am continuing my Ausbildung at <span>Schneider Electric</span> in
            Germany as a software development trainee, with a strong focus on
            Object-Oriented Programming (OOP). I am improving my frontend and
            backend skills through real projects and continuous practice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
