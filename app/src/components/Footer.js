import email from "../icons/mail.svg";
import github from "../icons/github.svg";
import linkedin from "../icons/linkedin.svg";

function Footer() {
  return (
    <div class="footer">
      <div class="footer-content">
        <a href="mailto:mattwilber94@gmail.com"><img src={email} alt="Email icon" width="24px"/></a>
        <a href="https://www.linkedin.com/in/mattwilber/"><img src={linkedin} alt="LinkedIn icon" width="24px"/></a>
        <a href="https://github.com/mwilbz"><img src={github} alt="Github icon" width="24px"/></a>
      </div>
    </div>
  )
};

export default Footer;
