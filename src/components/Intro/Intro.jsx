import React from 'react';
import "./Intro.css";
import imge from "../../assets/image.png";
import hire from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent animate__fadeInLeft">
        <span className="hello">
          Hello,
        </span>
        <span className="introText">
          I'm <span className="introName">Abhishek</span> 
          Computer Science Student
        </span>
        <p className="introPara"></p>
        <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' target='_blank' rel="noopener noreferrer">
          <button className="btn hoverEffect">
            <img src={hire} alt="Hire me" />Hire me
          </button>
        </a>
      </div>
      <div className="imgeContent animate__fadeInRight">
        <img src={imge} alt="Background" className='bg' />
      </div>
    </section>
  );
};

export default Intro;
