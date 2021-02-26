import React from "react";
import PropTypes from 'prop-types';
import "./iconBox.scss";

function IconBox(props) {
  // * icon is a svg icon
  const { classes, link, icon, text } = props;
  return <>
    <a className={`link-box ${classes}`} href={link} target="_blank" rel="noopener noreferrer">
      <div className="circle">{icon}</div>
      {text && <p className="pl-3">{text}</p>}
    </a>
  </>;
};

IconBox.propTypes = {
  classes: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.node,
  text: PropTypes.string
};

export default IconBox;
