import "./Footer.css";
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="my__footer section__margin">
      <p> Feel free to contact me </p>
      <div className="my__footer-icon">
        <a href="https://www.linkedin.com/in/sabraakhavan">
          <IoLogoLinkedin size={22} />
        </a>
        <a href="https://github.com/Sabraaa">
          <IoLogoGithub size={22} />
        </a>
        <a href="mailto:Iam@sabraakhavan.ir">
          <IoMdMail size={22} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
