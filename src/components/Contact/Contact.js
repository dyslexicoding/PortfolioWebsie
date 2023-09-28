import React from 'react'
import './Contact.css'
import FirstBahrain from '../../assets/First Bahrain.png'
import BirthWell from '../../assets/Birthwell.png'
import Linkedin from '../../assets/linkedin.png'
import Github from '../../assets/githubWhite.png'
import Twitter from '../../assets/twitter.png'



const Contact = () => {
  return (
    <section id="ContactPage">
      <div id="Clients">
        <h1 className='ContactPageTitle'>My Clinets</h1>
        <p className="ClientDesc">
          I have had the opptunity to work with a diverse group of companies.
          Some of the notable companies I have worked with are:
        </p>
        <div className="ClientImgs">
          <a href="http://firstbahrain.com//"  rel="First Bahrain">
            <img src={FirstBahrain} alt="" className="ClientImg" />
          </a>
          <img src={BirthWell} alt="" className="ClientImg" />  
        </div>
      </div>
      <div id="Contact">
        <h1 className="ContactPageTitle">Contact Me</h1>
        <span className="ContactDesc">Please fill out the form belo to discuss any work opportunities.</span>
        <form className="ContactForm">
          <input type="text" className="Name"  placeholder='Your Name'/>
          <input type="email" className="Email" placeholder='Your Email'/>
          <textarea className="Message" rows='5' placeholder='Your Message'></textarea>
          <button type='submit' value='send' className="SubmitBtn">Submit</button>

          <div className="links">
            <a href='https://www.linkedin.com/in/s-j-taylor/' >
              <img src={Linkedin} alt="Linkedin" className="link" />
            </a>
            <a href='https://github.com/dyslexicoding' >
              <img src={Github} alt="Github" className="link" />
            </a>
            <a href='https://twitter.com/DyslexiCoding' >
              <img src={Twitter} alt="Twitter" className="link" />
            </a>

          </div>


        </form>
      </div>
    </section>
    
  )
}

export default Contact