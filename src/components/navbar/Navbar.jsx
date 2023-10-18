import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="section__padding">
      <div className="my__nav" id="home">
        <div className="my__nav-logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="my__nav-menu">
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

        <div className="my__nav-icon">
          <IoLogoLinkedin size={22} />
          <IoLogoGithub size={22} />
          <IoMdMail size={22} />
        </div>
      </div>
      <div className="my__nav-mediamenu">
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
    </div>
  );
};

export default Navbar;
