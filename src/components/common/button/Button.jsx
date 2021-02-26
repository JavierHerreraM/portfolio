import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./button.scss";

// * If externalLink is false then the link opens in the same tab, otherwise it opens in a new one
function Button(props) {
  const { classes, btnText, btnLink, externalLink = false } = props;
  return <>
    <div className={`btn-box ${classes}`}>
      {
        externalLink ?
          <a className='default-btn' href={btnLink} target="_blank" rel="noopener noreferrer">{btnText}</a>
          :
          <Link className='default-btn' to={btnLink}>{btnText}</Link>
      }
    </div>
  </>;
};

Button.propTypes = {
  classes: PropTypes.string,
  btnText: PropTypes.node,
  btnLink: PropTypes.string,
  externalLink: PropTypes.bool
};

export default Button;
