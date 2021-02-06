import React from "react";
import "./button.scss";

// * If btnPage is false the the link opens in the same tab, otherwise it opens in a new one
function Button(props) {
  const { classes, btnText, btnLink, btnPage } = props;
  return (
    <div className={`btn-box ${classes}`}>
      <a className='default-btn' href={btnLink} target={btnPage ? "_blank" : "_self"} rel="noopener noreferrer">{btnText}</a>
    </div>
  );
}

export default Button;
