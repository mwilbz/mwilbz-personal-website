import matt from '../images/matt.jpg';

function Home() {
  return (
    <div class="Home">
      <div className="headshot">
        <img src={matt} alt="Matt standing in front of Tenaya Lake, with Tenaya Peak in the background" class="picture"></img>
      </div>
      <div className="intro">
        <p>Hi! I'm Matt, a mathematician, engineer, and adventurer. Currently a masters student in CS at Cornell University,
          looking for a new role starting June 2021.</p>
        <p>I use math to better the systems that have a major impact on people's lives. Education, healthcare, and fighting climate
          change are my current areas of focus. I'm looking for data engineering, data scientist, or machine learning engineering roles
          (especially in NLP).</p>
      </div>
    </div>
  )
};

export default Home;
