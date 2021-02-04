import React from "react";
import { Helmet } from 'react-helmet';
import Card from "../common/card/Card";
import projects from '../projectsInfo/projectsInfo';
import './projects.scss';

function Projects() {
  return (
    <>
      <Helmet><title>Proyectos - Javier Herrera</title></Helmet>
      <div className='projects'>
        {projects.map((project, index) => (
          <Card
            key={index}
            classes=" mb-3 project"
            info={{
              title: project.title,
              bodyText: project.description,
              picture: project.images[0].imgUrl,
              pictureAlt: project.images[0].alt,
              btnLink: `/proyecto:${index}`,
              btnText: "VER MAS",
            }}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
