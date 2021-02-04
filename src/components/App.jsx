import React from "react";
import { Route, Switch } from "react-router-dom";
import Canvas from "./common/pagesCanvas/Canvas";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";
import Project from "./specificProject/Project";

import "./styles/config.scss";

function App() {
  return (
    <Canvas>
      <Switch>
        <Route path="/proyectos" component={Projects} />
        <Route path="/habilidades" component={Skills} />
        <Route path="/contacto" component={Contact} />
        <Route path="/proyecto:numero" component={Project} />
        <Route path="/" component={Home} />
      </Switch>
    </Canvas>
  );
}

export default App;
