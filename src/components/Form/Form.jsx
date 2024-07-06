import React from 'react'

import facebook from "../../assets/facebook-icon.png"
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"
import likedIn from "../../assets/linkedIn.png"
import git from "../../assets/github.jpeg"
// import facebook from "../../assets/facebook-icon.png"
import "./Form.css"

const Form = () => {
    return (
       
      <div id='contact'>
         
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">Fill this below form for any work or appointment</span>
            <form action="" className="contactform">
              <input type="text" className="name" placeholder='Your Name' /><br />
              <input type="text" className="email" placeholder='Your Email' /><br />
                    <textarea name="message" rows="5" placeholder='Message' className='msg'></textarea>
                   
              <button className="submitBtn">Submit</button>
              <div className="links">
                 <a href="https://www.facebook.com/abhishek.ujale.92" target='blank'> <img src={facebook} alt="facebook" className='link' /></a>
                 <a href="https://www.facebook.com/abhishek.ujale.92" target='blank'> <img src={instagram} alt="instagram" className='link' /></a>
                 <a href="https://github.com/abhishekujale" target='blank'> <img src={git} alt="gitHub" className='link' /></a>
                 <a href="https://x.com/UjaleAbhishek" target='blank'> <img src={twitter} alt="twitter" className='link' /></a>
                 <a href="https://www.linkedin.com/in/abhishek-ujale-916284257/" target='blank'> <img src={likedIn} alt="likedIn" className='link' /></a>
              </div>
                </form>
              
            <footer>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Copyright &copy; 2024 Abhishek Ujale . All rights recieved </p>
            </footer>
            
            </div>
  )
}

export default Form