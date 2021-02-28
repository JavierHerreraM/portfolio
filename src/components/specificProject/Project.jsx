import React, { useState } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from 'react-helmet';
import Button from "../common/button/Button";
import IconBox from "../common/iconBox/IconBox";
import "./project.scss";
import projectsInfo from '../../modules/projectsInfo/projectsInfo';

function Project(props) {
  // * Defines which project is to set the info
  let projectIndex = props.match.params.numero;
  projectIndex = projectIndex.substring(1);

  const { title, gitHubLink, description, flags, images, btnLink } = projectsInfo[projectIndex];

  // TODO: make it open the images
  let [openImg, setOpenImg] = useState(false);
  let handleImgClick = (number) => {
    if (number === openImg) {
      setOpenImg(false);
    } else {
      setOpenImg(number);
    }
  };

  return <>
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

      <Button classes="mb-3" externalLink={true} btnLink={btnLink} btnText="VER PAGINA" />

      <div className="example-img">
        {images.map((img, index) => {
          return (
            <div key={index} className={`img-holder ${openImg === index ? 'open-img' : undefined}`} onClick={() => handleImgClick(index)}>
              <img
                src={img.imgUrl}
                alt={img.alt}
                className="mb-2"
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  </>;
};

Project.propTypes = {
  projectIndex: PropTypes.string,
};

export default Project;
