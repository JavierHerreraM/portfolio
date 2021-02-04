import React from "react";
import "./skillsBox.scss";

function SkillsBox(props) {
  const { logo, title, width } = props;
  return (
    <div className="box mb-3 mx-2">
      <div className="round-border">
        <img className="logo" src={logo} alt="logo" style={width}></img>
      </div>
      <p className="pt-1">{title}</p>
    </div>
  );
}

export default SkillsBox;
