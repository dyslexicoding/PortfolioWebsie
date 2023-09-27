import React from 'react'
import './Contact.css'
import FirstBahrain from '../../assets/First Bahrain.png'
import BirthWell from '../../assets/Birthwell.png'
import Linkedin from '../../assets/linkedin.png'
import Github from '../../assets/github.png'
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

            <img src={Linkedin} alt="Linkedin" className="links" />
            <img src={Github} alt="Github" className="links" />
            <img src={Twitter} alt="Twitter" className="links" />
            
          </div>


        </form>
      </div>
    </section>
    
  )
}

export default Contact