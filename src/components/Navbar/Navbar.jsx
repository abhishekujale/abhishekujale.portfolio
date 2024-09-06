import React, { useState } from 'react';
import "./Navbar.css";
import { LuMenu } from "react-icons/lu";
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCogs, faProjectDiagram, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='TotalBar'>
      <nav className="navbar">
<div></div>
        <div className="desktopMenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
            <FontAwesomeIcon icon={faInfoCircle} /> About
          </Link>
          <Link activeClass='active' to='platform' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
            <FontAwesomeIcon icon={faCogs} /> Skills
          </Link>
          <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
            <FontAwesomeIcon icon={faProjectDiagram} /> Projects
          </Link>
        </div>

        <div className="desktopMenuBtn">
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}>
            <FontAwesomeIcon icon={faEnvelope} className="desktopMenuImg" />
            <b>Contact Me</b>
          </Link>
        </div>

        <button className="sidebarToggle" onClick={toggleSidebar}>
          {/* <FontAwesomeIcon icon={faBars} /> Hamburger icon */}
          {/* ||| */}
          <LuMenu />
          {/* <CiMenuBurger /> */}
        </button>
      </nav>

      {/* Sidebar for mobile view */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="closeSidebar" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faTimes} /> {/* Close icon */}
        </button>
        <Link onClick={toggleSidebar} activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='sidebarMenuListItem'>
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link onClick={toggleSidebar} activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='sidebarMenuListItem'>
          <FontAwesomeIcon icon={faInfoCircle} /> About
        </Link>
        <Link onClick={toggleSidebar} activeClass='active' to='platform' spy={true} smooth={true} offset={-100} duration={500} className='sidebarMenuListItem'>
          <FontAwesomeIcon icon={faCogs} /> Skills
        </Link>
        <Link onClick={toggleSidebar} activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='sidebarMenuListItem'>
          <FontAwesomeIcon icon={faProjectDiagram} /> Projects
        </Link>
        <Link onClick={toggleSidebar} activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='sidebarMenuListItem'>
          <FontAwesomeIcon icon={faEnvelope} /> Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
