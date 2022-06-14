import React from "react";
import "./Section.scss";
import Sathish from "../../asset/pic-1.jpeg";
import { Element } from "react-scroll";

function Section() {
  return (
    <Element className="Section" id="about">
      <div className="section">
        <div className="section__container">
          <div className="section__img">
            <img src={Sathish} alt="" />
          </div>

          <div className="section__content">
            <h1>Who is Sathish</h1>
            <p>Intermediate learner in Web Development</p>
            <p>UI & UX Designer</p>
            <p>Junior programmer</p>
            <p>3 years experience in Programming</p>
            <p>Java & Spring Boot Developer</p>
            <p>React js Developer</p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Section;
