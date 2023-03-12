import eichorn from "../images/cathedral_peak.jpg";
import fairview from "../images/fairview_dome.jpg";
import matthes from "../images/matthes_crest.jpg";
import snakeDike from "../images/snake_dike.jpg";

function Adventure() {
  return (
    <div class="Adventure">
      <div className="body">
        <div className="Adventure-body">
          <h1>Adventure</h1>
          <p>Some climbing memories.</p>
          <h2>Snake Dike</h2>
          <i>August 25, 2018.</i>
          <img src={snakeDike} alt="Matt climbing Snake Dike on Half Dome"/>
          <h2>Cathedral Peak</h2>
          <i>October 14, 2018.</i>
          <img src={eichorn} alt="Eichorn's Pinnacle on Cathedral Peak at sunset"></img>
          <h2>Matthes Crest</h2>
          <i>November 3, 2018.</i>
          <img src={matthes} alt="The south ridge of Matthes Crest, viewed from the north summit"/>
          <h2>Fairview Dome</h2>
          <i>July 14, 2020.</i>
          <img src={fairview} alt="Fairview Dome from the base, with a crescent moon hanging above"/>
        </div>
      </div>
    </div>
  )
};

export default Adventure;
