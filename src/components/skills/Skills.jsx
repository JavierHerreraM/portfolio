import React from "react";
import { Helmet } from 'react-helmet';
import SkillsBox from "../common/skillsBox/SkillsBox";
import { front, back } from "./svgFiles";
import "./skills.scss";

function Skills() {
  return <>
    <Helmet><title>Habilidades - Javier Herrera</title></Helmet>

    <div className="skills">
      <h3>Frontend</h3>

      <div className="skills-holder">
        {/* Creates a SkillBox for every svg that is in front */}
        {front.map((svg, index) => (
          <SkillsBox
            key={index}
            logo={svg.logo}
            title={svg.title}
            width={{ width: svg.width }}
          />
        ))}
      </div>

      <h3>Backend</h3>

      <div className="skills-holder">
        {/* Creates a SkillBox for every svg that is in back */}
        {back.map((svg, index) => (
          <SkillsBox
            key={index}
            logo={svg.logo}
            title={svg.title}
            width={{ width: svg.width }}
          />
        ))}
      </div>
    </div>
  </>;
};

export default Skills;