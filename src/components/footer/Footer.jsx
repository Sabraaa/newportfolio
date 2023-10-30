import "./Footer.css";
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="my__footer">
      <h5 className="gradient__bar"> Feel free to contact me </h5>
      <div className="my__footer-icon">
        <a href="https://www.linkedin.com/in/sabraakhavan">
          <IoLogoLinkedin size={20} />
        </a>
        <a href="https://github.com/Sabraaa">
          <IoLogoGithub size={20} />
        </a>
        <a href="mailto:Iam@sabraakhavan.ir">
          <IoMdMail size={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
