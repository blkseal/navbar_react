import './App.css';
import instagramIcon from './images/instagram.svg';
import linkedinIcon from './images/linkedin.svg';
import { useState } from 'react';

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
  const [activeButton, setActiveButton] = useState('Home');

  return <>
    <div className="navbarButtons">
      <button 
        className={activeButton === 'Home' ? 'active' : ''} 
        onClick={() => setActiveButton('Home')}
      > Home </button>
      <button 
        className={activeButton === 'About' ? 'active' : ''} 
        onClick={() => setActiveButton('About')}
      > About </button>
      <button 
        className={activeButton === 'My Work' ? 'active' : ''} 
        onClick={() => setActiveButton('My Work')}
      > My Work </button>
      <button 
        className={activeButton === 'Group Work' ? 'active' : ''} 
        onClick={() => setActiveButton('Group Work')}
      > Group Work </button>
      <button 
        className={activeButton === 'Contact' ? 'active' : ''} 
        onClick={() => setActiveButton('Contact')}
      > Contact </button>
    </div>
  </>
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
    <div className="navbar">
      <NavBarHeader name={name} title={title} />
      <NavBarButtons />
      <NavBarLinks instagram={instagram} linkedin={linkedin} />
    </div>
  </>
}

function App() {
  const name = "Hugo Fiuza"
  const title = "Full-Stack Developer"
  const instagram = "https://www.instagram.com/hugofiuza/"
  const linkedin = "https://www.linkedin.com/in/hugofiuza/"
  return <>
    <NavBar name={name} title={title} instagram={instagram} linkedin={linkedin} />
  </>
}

export default App;