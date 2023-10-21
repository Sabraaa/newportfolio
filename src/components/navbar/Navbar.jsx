import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="section__padding">
      <div className="my__nav" id="home">
        <div className="my__nav-logo">
          <a href="#home">
            <img src={Logo} alt="logo" />
          </a>
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
          <a href="https://www.linkedin.com/in/sabra-akhavan-5471ab229/?originalSubdomain=ir">
            <IoLogoLinkedin size={25} />
          </a>
          <a href="https://github.com/Sabraaa">
            <IoLogoGithub size={25} />
          </a>
          <a href="mailto:Iam@sabraakhavan.ir">
            <IoMdMail size={25} />
          </a>
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
