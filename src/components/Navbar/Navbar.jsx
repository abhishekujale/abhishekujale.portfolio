import React from 'react'
import "./Navbar.css"
import skill from "../Skills/Skills"
import logo from "../../assets/logo.png"
import contact from "../../assets/contact.png"
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
    <div>
         <nav className="navbar">
              <img src={logo} alt="logo" className='logo'/>
              {/* <div className="desktopMenu">
                  <a className='desktopMenuListItem'>Home</a>
                  <a href={skill} className='desktopMenuListItem'>About</a>
                  <a className='desktopMenuListItem'>Skills</a>
                 
                  <a className='desktopMenuListItem'>Work</a>
                  <a className='desktopMenuListItem'>Contact</a>
          

              </div> */}
        
         <div className="desktopMenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                  <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
                  <Link activeClass='active' to='platform' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Skills</Link>
                  <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Work</Link>
                  <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Contact</Link>
          

              </div>
              <div className="desktopMenuBtn">
               <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} >   <img src={contact} alt="" className="desktopMenuImg" /><b>Contact Me</b></Link>
              </div>
        </nav>
   
    </div>
  )
}

export default Navbar
