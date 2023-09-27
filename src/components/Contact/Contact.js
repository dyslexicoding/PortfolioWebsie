import React from 'react'
import './Contact.css'
import FirstBahrain from '../../assets/First Bahrain.png'
import BirthWell from '../../assets/Birthwell.png'


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
      
      </div>
    </section>
    
  )
}

export default Contact