import "./Navbar.css";
import Logo from "../assets/Logo.png";
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="section__padding my__header" id="home">
      <div className="my__header-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="my__header-menu">
        <p>
          <a href="#projects"> Projects</a>
        </p>
        <p>
          <a href="#technologies">Technologies</a>
        </p>
        <p>
          <a href="#aboutme">About me</a>
        </p>
      </div>
      <div className="my__header-icon">
        <IoLogoLinkedin size={22} />
        <IoLogoGithub size={22} />
        <IoMdMail size={22} />
      </div>
    </div>
  );
};

export default Navbar;
