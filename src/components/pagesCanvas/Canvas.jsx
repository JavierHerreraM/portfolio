import React from "react";
import PropTypes from 'prop-types';
import MainNav from '../mainNav/MainNav'
import "./canvas.scss";

function Canvas(props) {
  const { children } = props;
  return <>
    <MainNav />
    <div className="canvas p-2">
      <div className="container">
        {children}
      </div>
    </div>
  </>;
};

Canvas.propTypes = {
  children: PropTypes.element
};

export default Canvas;
