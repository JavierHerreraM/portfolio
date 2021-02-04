import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from 'react-helmet';
import Button from "../common/button/Button";
import IconBox from "../common/iconBox/IconBox";
import "./project.scss";

import projects from '../projectsInfo/projectsInfo';

function Project(props) {
  let projectIndex = props.match.params.numero;
  projectIndex = projectIndex.substring(1);

  // const project = projects[projectIndex];
  const { title, gitHubLink, description, flags, images, btnLink } = projects[projectIndex];

  return (
    <>
      <Helmet><title>Proyecto - Javier Herrera</title></Helmet>
      <div>
        {/* title and icon */}

        <div className="project-header mb-3">
          <h3>{title}</h3>
          <IconBox
            link={gitHubLink}
            icon={<FontAwesomeIcon icon={faGithub} />}
          />
        </div>

        {/* description */}

        <div className="mb-3 project-text">{
          description.map((text, index) => {
            return <p key={index}>{text}</p>
          })
        }</div>

        {/* flags */}
        <h4 className='mb-3'>Tecnologias usadas:</h4>
        <div className="flags mb-1">
          {/* creates a flag for every technology that recives */}
          {flags.map((text, index) => (
            <div key={index} className="mb-2 mx-1 px-1 tech-flag">
              {text}
            </div>
          ))}
        </div>

        <Button classes="mb-3" btnLink={btnLink} btnText="VER PAGINA" />

        <div className="example-img">
          {images.map((obj, index) => {
            return (
              <div key={index} className='img-holder'>
                <img
                  src={obj.imgUrl}
                  alt={obj.alt}
                  className="mb-2"
                ></img>
              </div>
            );
          })}
        </div>

      </div>
    </>
  );
}

export default Project;
