import matt from '../images/matt.jpg';

function Home() {
  return (
    <div class="Home">
      <div className="headshot">
        <img src={matt} alt="Matt standing in front of Tenaya Lake, with Tenaya Peak in the background" class="picture"></img>
      </div>
      <div className="intro">
        <p>Hi I'm Matt! Not much here yet. If you're visiting my page for recruiting, feel free to email me, but give me a good story on how your organization is making the world a better place.</p>
      </div>
    </div>
  )
};

export default Home;
