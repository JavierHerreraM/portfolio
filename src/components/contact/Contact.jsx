import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhoneAlt, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from 'react-helmet';
import IconBox from "../common/iconBox/IconBox";
import './contact.scss'

function App() {
  return (
    <>
      <Helmet><title>Contacto - Javier Herrera</title></Helmet>
      <h3 className="contact-title mb-2">Pongase en contacto:</h3>
      <div className="mx-2 contact-body">
        <IconBox
          link="https://www.linkedin.com/in/javier-herrera-madrigal"
          icon={<FontAwesomeIcon icon={faLinkedinIn} />}
          text="LinkedIn"
        />
        <IconBox
          link="https://github.com/JavierHerreraM"
          icon={<FontAwesomeIcon icon={faGithub} />}
          text="GitHub"
        />
        <IconBox
          link="#"
          icon={<FontAwesomeIcon icon={faAt} />}
          text="Javiherreramad@gmail.com"
        />
        <IconBox
          link="#"
          icon={<FontAwesomeIcon icon={faPhoneAlt} />}
          text="85910897"
        />
        <IconBox
          link="#"
          icon={<FontAwesomeIcon icon={faFileAlt} />}
          text="Descargue mi CV"
        />
      </div>
    </>
  );
}

export default App;