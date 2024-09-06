import React from 'react'
import "./Skill.css"
import website from "../../assets/website-design.png"
import design from "../../assets/ui-design.png"
import appDesign from "../../assets/app-design.png"
import ml from "../../assets/ml.webp"
import devops from "../../assets/devops.jpg"
import cp from "../../assets/cp.jpg"


const Skills = () => {
  return (
    <div id="skills">
    <div className="Special">
      <div className='mainContainer'>
          <div className="heading">
            <h1 className='Hheading' >What I do</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing <br /> elit. Consequuntur quo facilis aliquam aperiam earum explicabo maiores porro suscipit accusantium <br />voluptatibus, nihil aut nulla ea odio id dicta mollitia accusamus neque!</p>
          </div>

          <div className="Cards">
              <div className="card">
            <img src={ml} alt="" className="imgeCard" />
            <div className="cardMainHeading">
                <h3 className="cardHeading">Machine Learning</h3>
                <p className="cardPara">
                     This react portfolio website can help you to showcase your work experience on online website. 
              </p>
            </div>
              </div>
              <div className="card">
            <img src={website} alt="" className="imgeCard" />
            <div className="cardMainHeading">
                <h3 className="cardHeading">Web Design</h3>
                <p className="cardPara">
                    This react portfolio website can help you to showcase your work experience on online website. 
              </p>
              </div>
              
          </div>
          
          <div className="card">
            <img src={devops} alt="" className="imgeCard" />
            <div className="cardMainHeading">
                <h3 className="cardHeading">DevOps</h3>
                <p className="cardPara">
                    This react portfolio website can help you to showcase your work experience on online website. 
              </p>
              </div>
              
          </div>
          
           <div className="card">
            <img src={cp} alt="" className="imgeCard" />
            <div className="cardMainHeading">
                <h3 className="cardHeading">Competitive Programming</h3>
                <p className="cardPara">
                    This react portfolio website can help you to showcase your work experience on online website. 
              </p>
              </div>
              
          </div>

              {/* <div className="card">
            <img src={appDesign} alt="" className="imgeCard" />
            <div className="cardMainHeading">
                <h3 className="cardHeading"> App Dev</h3>
                <p className="cardPara">
                    This react portfolio website can help you to showcase your work experience on online website. 
              </p>
              </div>
              </div> */}
          </div>
      </div>
      </div>
      </div>
  )
}

export default Skills
