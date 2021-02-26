import React from "react";
import { Route, Switch } from "react-router-dom";
import Canvas from "./pagesCanvas/Canvas";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";
import Project from "./specificProject/Project";
import Page404 from './Page404/Page404';
import "../modules/styles/config.scss";

function App() {
  return <Canvas>
    <Switch>
      <Route path="/proyectos" component={Projects} />
      <Route path="/habilidades" component={Skills} />
      <Route path="/contacto" component={Contact} />
      <Route path="/proyecto:numero" component={Project} />
      <Route exact path="/" component={Home} />
      <Route path="*" component={Page404} />
    </Switch>
  </Canvas>;
};

export default App;
