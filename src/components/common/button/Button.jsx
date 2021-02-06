import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

// * If btnPage is false the the link opens in the same tab, otherwise it opens in a new one
function Button(props) {
  const { classes, btnText, btnLink, externalLink = false } = props;
  return (
    <div className={`btn-box ${classes}`}>
      {
        externalLink ?
          <a className='default-btn' href={btnLink} target="_blank" rel="noopener noreferrer">{btnText}</a>
          :
          <Link className='default-btn' to={btnLink}>{btnText}</Link>
      }
    </div>
  );
}

export default Button;
