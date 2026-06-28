import "./Header.css";
import "../../components/gradientButton/GradientButton.css";
import Avatar from "../../assets/sabraavatar.jpg"

const Header = () => {
  return (
    <div className="section__padding my__header" id="#home">
      <div className="my__header-texts">
        <h1 className="gradient__text">Hello I'm Sabra Akhavan,</h1>
        <h1>software developer</h1>
        <p>
          Crafting seamless web experiences with a focus on design and user
          interaction. Bringing your ideas to life, one line of code at a time.
        </p>
        <div className="gradientbutton__wrapper">
          <a
            className="gradient__bg gradientbutton"
            href="/Sabra-Akhavan-CV.pdf"
            download="Sabra-Akhavan-CV.pdf"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="my__header-img">
        <div className="circle-linear"></div>
        <div className="circle-fill"></div>
        <img src={Avatar} />
      </div>
    </div>
  );
};

export default Header;

