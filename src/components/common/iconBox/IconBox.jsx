import React from "react";
import "./iconBox.scss";

function IconBox(props) {
  return (
    <>
      <a className={`link-box ${props.classes}`} href={props.link}>
        <div className="circle">{props.icon}</div>
        {props.text && <p className="pl-3">{props.text}</p>}
      </a>
    </>
  );
}

export default IconBox;
