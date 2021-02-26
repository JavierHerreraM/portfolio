import React from "react";
import PropTypes from 'prop-types';
import Button from "../button/Button";
import "./card.scss";

function Card(props) {
  const { classes = undefined } = props;
  const { title, bodyText, picture, pictureAlt, btnLink, btnText } = props.info;

  return <>
    <div className={`${classes} card `}>
      <div className="card-img mb-3">
        <img src={picture} alt={pictureAlt}></img>
      </div>
      <div className="px-2">
        <h3 className="mb-3">{title}</h3>
        <div className="mb-3 card-text">{bodyText[0]}</div>
      </div>
      <Button classes="mb-3" btnLink={btnLink} btnText={btnText} />
    </div>
  </>;
};

Card.propTypes = {
  classes: PropTypes.string,
  title: PropTypes.string,
  bodyText: PropTypes.arrayOf(PropTypes.string),
  picture: PropTypes.string,
  pictureAlt: PropTypes.string,
  btnLink: PropTypes.string,
  btnText: PropTypes.node
};

export default Card;
