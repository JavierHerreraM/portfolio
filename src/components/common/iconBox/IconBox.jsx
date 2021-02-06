import React from "react";
import "./iconBox.scss";

function IconBox(props) {
  const { classes, link, icon, text } = props;
  return (
    <>
      <a className={`link-box ${classes}`} href={link} target="_blank" rel="noopener noreferrer">
        <div className="circle">{icon}</div>
        {text && <p className="pl-3">{text}</p>}
      </a>
    </>
  );
}

export default IconBox;
