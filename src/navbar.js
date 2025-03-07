import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import instagramIcon from './images/instagram.svg';
import linkedinIcon from './images/linkedin.svg';
import './navbar.css';

function NavBarHeader({ name, title }) {
    return <>
      <div className="navbarHeader">
        <h1 className=
          "navbarName">{name}</h1>
        <h2 className="navbarTitle">{title}</h2>
      </div>
    </>
  }
  
  function NavBarButtons() {
    const location = useLocation();
  
    return (
      <div className="navbarButtons">
        <Link to="/">
          <button className={location.pathname === '/' ? 'active' : ''}>
            Home
          </button>
        </Link>
        <Link to="/about">
          <button className={location.pathname === '/about' ? 'active' : ''}>
            About
          </button>
        </Link>
        <Link to="/mywork">
          <button className={location.pathname === '/mywork' ? 'active' : ''}>
            My Work
          </button>
        </Link>
        <Link to="/groupwork">
          <button className={location.pathname === '/groupwork' ? 'active' : ''}>
            Group Work
          </button>
        </Link>
        <Link to="/contact">
          <button className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </button>
        </Link>
      </div>
    );
  }
  
  function NavBarLinks({ instagram, linkedin }) {
    return <>
      <div className="navbarLinks">
      <img src={instagramIcon} onClick={() => window.open(instagram)} alt="Instagram" />
        <img src={linkedinIcon} onClick={() => window.open(linkedin)} alt="LinkedIn" />
      </div>
    </>
  }
  
  function NavBar({ name, title, instagram, linkedin }) {
    return <>
      <nav className="navbar">
        <NavBarHeader name={name} title={title} />
        <NavBarButtons />
        <NavBarLinks instagram={instagram} linkedin={linkedin} />
      </nav >
    </>
  }

  export default NavBar;