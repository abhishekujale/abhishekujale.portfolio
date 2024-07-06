import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import contact from "../../assets/contact.png"
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
    <div>
         <nav className="navbar">
              <img src={logo} alt="logog\" className='logo'/>
              <div className="desktopMenu">
                  <Link className='desktopMenuListItem'>Home</Link>
                  <Link className='desktopMenuListItem'>About</Link>
                  <Link className='desktopMenuListItem'>Portfolio</Link>
          <Link className='desktopMenuListItem'>Work</Link>
                  <Link className='desktopMenuListItem'>Contact</Link>
          

              </div>
              <div className="desktopMenuBtn">
                  <img src={contact} alt="" className="desktopMenuImg" /><b>Contact Me</b>
              </div>
        </nav>
   
    </div>
  )
}

export default Navbar
