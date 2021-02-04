import React from "react";
import Button from "../button/Button";
import "./card.scss";

function Card(props) {
  const { classes } = props;
  const { title, bodyText, picture, pictureAlt, btnLink, btnText } = props.info;

  return (
    <>
      <div className={`${classes} card `}>
        <div className="card-img mb-3">
          <img src={picture} alt={pictureAlt}></img>
        </div>
        <div className="card-body px-2">
          <h3 className="mb-3">{title}</h3>
          <div className="mb-3 card-text">{bodyText[0]}</div>
          <Button classes="mb-3" btnLink={btnLink} btnText={btnText} />
        </div>
      </div>
    </>
  );
}

export default Card;
