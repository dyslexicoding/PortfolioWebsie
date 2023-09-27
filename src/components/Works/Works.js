import React from 'react'
import './Works.css'
import Thesis from '../../assets/Thesis.png'
import rubiks from '../../assets/rubiks.jpeg'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'


const Works = () => {
  return (
    <section id='Works'>
        <h2 className='WorksTitle'>My Protfolio</h2>
        <span className="WorksDesc">I Work hard with each project I worked on</span>
        <div className="WorksImages">
            <a  href='https://github.com/dyslexicoding/Masters-Thesis'>
                <img src={Thesis} alt="" className="WorksImg" />
                <figcaption className='Captions'>
                        Thesis
                </figcaption>
            </a>
            <a href='https://github.com/dyslexicoding/Rubiks-Cube-Project'>                
                <img src={rubiks} alt="" className="WorksImg" />
                    <figcaption className='Captions'>
                        Rubiks Project
                    </figcaption>                
            </a>
            <a href='https://github.com/dyslexicoding/Rubiks-Cube-Project'>                
                <img src={Portfolio3} alt="" className="WorksImg" />
                    <figcaption className='Captions'>
                        Test Project 3
                    </figcaption>                
            </a>
            <a href='https://github.com/dyslexicoding/Rubiks-Cube-Project'>                
                <img src={Portfolio4} alt="" className="WorksImg" />
                    <figcaption className='Captions'>
                        Test Project 4
                    </figcaption>                
            </a>
            <a href='https://github.com/dyslexicoding/Rubiks-Cube-Project'>                
                <img src={Portfolio5} alt="" className="WorksImg" />
                    <figcaption className='Captions'>
                        Test Project 5
                    </figcaption>                
            </a>
            <a href='https://github.com/dyslexicoding/Rubiks-Cube-Project'>                
                <img src={Portfolio6} alt="" className="WorksImg" />
                    <figcaption className='Captions'>
                        Test Project 6
                    </figcaption>                
            </a>
            
            

        </div>
        {/* <button className='WorksBtn'>Show More</button> */} {/* so not sure how to add the button right now but also not got the content to just dump there yet so meh */}

    </section>
  )
}

export default Works