import React from "react";
import "./button.scss";

function Button(props) {
  const { classes, btnText, btnLink } = props;

  return (
    <div className={`btn-box ${classes}`}>
      <a className='default-btn' href={btnLink}>{btnText}</a>
    </div>
  );
}

export default Button;
