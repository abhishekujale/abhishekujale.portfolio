import React from 'react'
import "./Projects.css"
import FirstProjects from './FirstProjects/FirstProjects'
import SecondProjects from './SecondProjects/SecondProjects'
import ThirdProjects from './ThirdProjects/ThirdProjects'
const Projects = () => {
  return (
    <div id="projects">
      <div className='projectsContainer'>
        <div className='ProjectHeading'> <h1>Projects</h1></div>
        <div className="Border"></div>
        <div className="projects">
          <FirstProjects/>
          <SecondProjects />
          <ThirdProjects/>
          </div>
      </div>
      </div>
  )
}

export default Projects
