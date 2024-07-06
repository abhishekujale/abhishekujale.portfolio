import React from 'react'
import "./Intro.css"
import imge from "../../assets/image.png"
import hire from "../../assets/hireme.png"
import {Link} from "react-scroll"
const Intro = () => {
  return (
    <section id="intro">
          <div className="introContent">
              <span className="hello" style={{color:"black"}}>
                  Hello,
              </span>
              <span className="introText">
                  I'm <span className="introName">Abhishek </span> <br />
                  Computer Science Student <br />
              </span>
              <p className="introPara"></p>
              <a href='http://gmail.com' target='_blank'><button className="btn"><img src={hire} alt="" />Hire me</button></a>
          </div>   
          <div className="imgeContent">
          <img src={imge} alt="" className='bg'/>
          </div>
   </section>
  )
}

export default Intro
