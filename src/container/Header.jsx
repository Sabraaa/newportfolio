import "./Header.css";
import GradientButton from "../components/gradientButton/GradientButton";
import Sabra from "../assets/Sabra.png";

const Header = () => {
  return (
    <div className="section__padding my__header">
      <div className="my__header-texts">
        <h1 className="gradient__text">Hello I'm Sabra Akhavan,</h1>
        <h1>frontend developer</h1>
        <p>
          Crafting seamless web experiences with a focus on design and user
          interaction. Bringing your ideas to life, one line of code at a time.
        </p>
        <div>
          <GradientButton text="Download CV" />
        </div>
      </div>
      <div className="my__header-img">
        <div className="circle-overlay"></div>
        <div className="circle-transparent"></div>
        <div>
          
        </div>
        <img src={Sabra} />
      </div>
    </div>
  );
};

export default Header;
