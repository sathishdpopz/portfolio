import React from "react";
import "./Skill.scss";
import SkillImg from "../../asset/skill.jpg";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Element } from "react-scroll";

function Skill() {
  return (
    <Element className="skillContainer" id="skill">
      <div className="skillContainer__bg">
        <div className="skillContainer__img">
          <img src={SkillImg} alt="" />
        </div>
        <div className="skillContainer__text">
          <h2>SKILLSET</h2>
        </div>
        <div className="skillContainer__skillSet">
          <h5>C</h5>
        </div>
        <div className="skillContainer__slider skillContainer__slider1">
          <LinearProgress variant="determinate" value={70} />
        </div>
        <div className="skillContainer__skillSet">
          <h5>C++</h5>
        </div>
        <div className="skillContainer__slider skillContainer__slider2">
          <LinearProgress variant="determinate" value={75} />
        </div>
        <div className="skillContainer__skillSet">
          <h5>Java</h5>
        </div>
        <div className="skillContainer__slider skillContainer__slider3">
          <LinearProgress variant="determinate" value={80} />
        </div>
        <div className="skillContainer__skillSet">
          <h5>Spring Boot</h5>
        </div>
        <div className="skillContainer__slider skillContainer__slider4">
          <LinearProgress variant="determinate" value={75} />
        </div>
        <div className="skillContainer__skillSet">
          <h5>React</h5>
        </div>
        <div className="skillContainer__slider skillContainer__slider5">
          <LinearProgress variant="determinate" value={60} />
        </div>
        <div className="skillContainer__skillSet">
          <h5>My SQL</h5>
        </div>
        <div className="skillContainer__slider skillContainer__slider6">
          <LinearProgress variant="determinate" value={90} />
        </div>
      </div>
    </Element>
  );
}

export default Skill;
