import "./Header.css";
import GradientButton from "../../components/gradientButton/GradientButton";
import Avatar from "../../assets/sabraavatar.jpg"

const Header = () => {
  const resumePath = "/Sabra-Akhavan-Resume.pdf";

  return (
    <div className="section__padding my__header" id="#home">
      <div className="my__header-texts">
        <h1 className="gradient__text">Hello I'm Sabra Akhavan,</h1>
        <h1>frontend developer</h1>
        <p>
          Crafting seamless web experiences with a focus on design and user
          interaction. Bringing your ideas to life, one line of code at a time.
        </p>
        <a href={resumePath} download="Sabra-Akhavan-Resume.pdf">
          <GradientButton text="Download CV" />
        </a>
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
