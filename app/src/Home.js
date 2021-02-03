import Sidebar from "./Sidebar.js";
import email from "./icons/mail.svg";
import github from "./icons/github.svg";
import linkedin from "./icons/linkedin.svg";
import matt from './images/matt.jpg';

function Home() {
  return (
    <div class="Home">
      <Sidebar/>
      <div className="body-container">
        <div className="body">
          <img src={matt} class="picture"></img>
          <p>Hi! I'm Matt, a mathematician, engineer, and adventurer. Looking for a new role starting June 2021.</p>
          <p>I use math to better the systems that have a major impact on people's lives. Education, healthcare, and fighting climate
            change are my current areas of focus. I'm looking for data engineering, data scientist, or machine learning engineering roles
            (especially in NLP).</p>
          <div class="footer">
            <div class="footer-content">
              <a href="mailto:mattwilber94@gmail.com"><img src={email} width="24px"/></a>
              <a href="https://www.linkedin.com/in/mattwilber/"><img src={linkedin} width="24px"/></a>
              <a href="https://github.com/mwilbz"><img src={github} width="24px"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
