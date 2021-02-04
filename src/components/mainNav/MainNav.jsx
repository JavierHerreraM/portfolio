import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import IconBox from "../common/iconBox/IconBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./mainNav.scss";

function MainNav() {
  const [active, setActive] = useState(false);
  const [pageTitle, setPageTitle] = useState("");

  let location = useLocation();
  location = location.pathname;
  useEffect(() => {

    if (location === '/') {
      setPageTitle('INICIO');
    } else if (location.includes('/proyecto:')) {
      setPageTitle('PROYECTO');
    } else {
      setPageTitle(location.toUpperCase().substring(1));
    }
  }, [location]);

  function handleClick(fromMenu) {
    if (fromMenu === true) {
      setActive(false)
    } else {
      active ? setActive(false) : setActive(true);
    }
  }

  return (
    <>
      <nav className='px-2'>
        <div className='nav-box'>
          <FontAwesomeIcon
            icon={faBars}
            className="burger"
            onClick={handleClick}
          />
          <div className="page-title">
            <h2 >{pageTitle}</h2>
          </div>
          <div className={active ? "menu-open menu-box" : 'menu-box'}>
            <ul className='nav-links'>
              <li>
                <IconBox
                  icon={
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="close-icon"
                      onClick={handleClick}
                    />
                  }
                  classes='close-icon'
                />
              </li>
              <li>
                <Link
                  className={pageTitle === 'INICIO' ? 'selected' : undefined}
                  to="/"
                  onClick={() => {
                    handleClick(true);
                  }}
                >
                  INICIO
              </Link>
              </li>
              <li>
                <Link
                  className={pageTitle === 'PROYECTOS' ? 'selected' : undefined}
                  to="/proyectos"
                  onClick={() => {
                    handleClick(true);
                  }}
                >
                  PROYECTOS
              </Link>
              </li>
              <li>
                <Link
                  className={pageTitle === 'HABILIDADES' ? 'selected' : undefined}
                  to="/habilidades"
                  onClick={() => {
                    handleClick(true);
                  }}
                >
                  HABILIDADES
              </Link>
              </li>
              <li>
                <Link
                  className={pageTitle === 'CONTACTO' ? 'selected' : undefined}
                  to="/contacto"
                  onClick={() => {
                    handleClick(true);
                  }}
                >
                  CONTACTO
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MainNav;