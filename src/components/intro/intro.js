import React from 'react'
import './intro.css'
import bg from '../../assets/Samuel.png'
import {Link} from 'react-scroll'
import BtnImg from '../../assets/hireme.png'


const Intro = () => {
  return (
    <section id="intro">
        <div className="IntroContent">
            <span className="Hello">Hello</span>
            <span className="IntroText">I'm  <span className="IntroName">Samuel</span> <br />Software Engineer </span>
            <p className="IntroParagraph">Im and Skilled Engineer quick witted, loves puzzles and telling story with data.</p>
            <Link><button className="btn"><img src={BtnImg} alt="HireMe" />Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className='bg' />


    </section>
  )
}

export default Intro;