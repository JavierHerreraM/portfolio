import React from "react";
import PropTypes from 'prop-types';
import "./skillsBox.scss";

function SkillsBox(props) {
  // * each img has different width to make all the icon the same size
  const { logo, title, width } = props;
  return <>
    <div className="box mb-3 mx-2">
      <div className="round-border">
        <img className="logo" src={logo} alt="logo" style={width}></img>
      </div>
      <p className="pt-1">{title}</p>
    </div>
  </>;
};

SkillsBox.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.objectOf(PropTypes.string),
};

export default SkillsBox;
