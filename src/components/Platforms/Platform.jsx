import React from 'react'
import "./Platform.css"
const Platform = () => {
  return (
    <div id="platform">
    <div className="platPeakContainer">
      <div className="plathead">
        <h1>Skills</h1>
        
      </div>
      
      <div className="border">
      </div>
      
      <div className='platContainer'>

          <div className="platcards">
            <div className="plateHeading">
              <h3>Frameworks</h3>
            </div>
            <div className="platContaint">
                <p>ReactJS</p>
                <p>ExpressJs</p>
                <p>NodeJS</p>
                <p>NextJS</p>
                {/* <p>Flutter</p> */}
                <p>Tailwind-CSS</p>
                <p>BootStrap</p>
               {/* <p>Django</p> */}
               <p>Flask</p>
               {/* <p>ReactNative</p> */}
               <p>Streamlit</p>
            </div>
          </div>

          <div className="platcards">
             
            <div className="plateHeading">
              <h3>Libraries</h3>
               </div>
              <div className="platContaint">
                <p>Numpy</p>
                <p>Pandas</p>
                <p>Tensorflow</p>
                <p>OpenCv</p>
                <p>Keras</p>
                <p>Pygame</p>
                {/* <p>Beautiful Soup</p> */}
            </div>
          </div>
          <div className="platcards">
            <div className="plateHeading">
              <h3>Platforms</h3>
               </div>
              <div className="platContaint">
                <p>Docker</p>
                <p>AWS</p>
            {/* <p>KuberNetis</p> */}
            {/* <p>Azure</p> */}
                <p>Postman</p>
                <p>Mongo</p>
                <p>GitHub</p>
                <p>Git</p>
            </div>
          </div>
          <div className="platcards">
            <div className="plateHeading">
              <h3>Languages</h3>
               </div>
              <div className="platContaint">
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>C++</p>
                <p>Python</p>
            {/* <p>Dart</p> */}
            <p>Typescript</p>
            <p>SQL</p>
                <p>Java</p>
            </div>
          </div>
      </div> 
      <div className="extreContaint">
        <div className="horizontal">
          <h3>IDE's</h3>
          <ul>
         <li> <p>VSCode</p></li>
         <li> <p>Pycharm</p></li>
         <li> <p>NetBeans</p></li>
         <li>   <p>Eclipse</p></li>
           <li>   <p>Android Studio</p> </li> 
            </ul>
        </div>
        <div className="horizontal">
          <h3>Competitions</h3>
          <ul>
          <li><p>Codement_24 top 20 teams</p></li>
          <li><p>4th Rank in Hacknovate 2K24</p></li>
           <li> <p>Winner of PAKALP at GCOEK</p></li>
            </ul>
        </div><div className="horizontal">
           <h3>Voluteering</h3>
          <ul>
          <li><p>Technical Head <span><b> Acses KITCoEK</b></span></p></li>
          <li><p>Technical member at E-cell KITCoEk</p></li>
           <li> <p> Team member at ISTE </p></li>
          </ul>
        </div>
       
      </div>
      </div>
      </div>

  )
}

export default Platform
