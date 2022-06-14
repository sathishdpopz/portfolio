import React from "react";
import "./Work.scss";
import react from "../../asset/react.jpg";
import ui from "../../asset/ui.jpg";
import wd from "../../asset/wd.jpg";
import wd2 from "../../asset/wd2.jpg";
import wd3 from "../../asset/wd3.jpg";
import wd4 from "../../asset/wd4.jpg";
import { Element } from "react-scroll";

function Work() {
  return (
    <Element className="Works" id="work">
      <div className="work">
        <div className="work__section">
          <div className="cards">
            <img src={react} alt="" />
            <button>See Work</button>
          </div>

          <div className="cards">
            <img src={ui} alt="" />
            <button>See Work</button>
          </div>

          <div className="cards">
            <img src={wd} alt="" />
            <button>See Work</button>
          </div>

          <div className="cards">
            <img src={wd2} alt="" />
            <button>See Work</button>
          </div>

          <div className="cards">
            <img src={wd3} alt="" />
            <button>See Work</button>
          </div>

          <div className="cards">
            <img src={wd4} alt="" />
            <button>See Work</button>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Work;
