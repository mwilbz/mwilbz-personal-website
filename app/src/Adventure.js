import Sidebar from "./Sidebar.js";
import eichorn from "./images/cathedral_peak.jpg";
import fairview from "./images/fairview_dome.jpg";
import matthes from "./images/matthes_crest.jpg";
import snakeDike from "./images/snake_dike.jpg";

function Adventure() {
  return (
    <div class="Adventure">
      <Sidebar/>
      <div className="body">
        <div className="Adventure-body">
          <h1>Adventure</h1>
          <p>I love outdoor adventures, especially rock climbing! Here's a few of the outdoor adventures I've been on over the years.</p>
          <h2>Snake Dike</h2>
          <i>August 25, 2018.</i> My climbing partner Izzy was wrapping up his internship in the Bay Area when we decided we needed to climb
          Half Dome before he left. Climbing Snake Dike took us 16 hours from car to car.
          <img src={snakeDike}/>
          <h2>Cathedral Peak</h2>
          <i>October 14, 2018.</i> I climbed Cathedral Peak with my friend <a href="https://jordan-vincent.com/">Jordan</a>.
          We started off-route and had to rappel back to the base before we started up again. We got to the top at sunset, where Jordan snapped
          this beautiful photo of Eichorn's Pinnacle.
          <img src={eichorn}></img>
          <h2>Matthes Crest</h2>
          <i>November 3, 2018.</i> Perhaps my favorite climb, approaching Matthes Crest requires a 2.5 hour hike in across beautiful
          terrain in the Tuolumne backcountry. As you climb the crest you're surrounded by views of the nearby peaks and
          lakes.
          <img src={matthes} />
          <h2>Fairview Dome</h2>
          <i>July 14, 2020.</i> Fairview Dome has my favorite pitch I've ever climbed, about halfway up. An intimidatingly steep
          crescent and roof is somehow well protected and no harder than 5.7. I dropped my approach shoe at the top of the pitch and
          was very fortunate that it didn't roll to the bottom of the dome!
          <img src={fairview}/>
        </div>
      </div>
    </div>
  )
};

export default Adventure;
