import React from "react";
import "./canvas.scss";

import MainNav from '../../mainNav/MainNav'

function Canvas(props) {
  return (
    <>
      <MainNav />
      <div className="canvas p-2">{props.children}</div>
    </>
  );
}

export default Canvas;
