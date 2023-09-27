import React from 'react'
import './skills.css'
import DataScience from '../../assets/data-science.png'
import SoftewareEngineering from '../../assets/SoftwareEng.png'
import ElectronicEngineering from '../../assets/electronic.jpg'

const Skills = () => {
  return (
    <section id='skills'>
        <span className="SkillTitle">What I do </span>
        <span className="SkillDescription">this is for skilled Skill Description Software engineerring and data sciense and electronic engineering</span>
        <div className="SkillBars">
          <div className="SkillBar">

            <img src={DataScience} alt="DataScience" className="SkillBarImage" />
            <div className="SkillBarText">
              <h2>Data Science</h2>
              <p>Data science is the use of data to create or discover knowledge and insights.</p>
            </div>
          </div>

          <div className="SkillBar">
            <img src={SoftewareEngineering} alt="Softeware Engineering" className="SkillBarImage" />
            <div className="SkillBarText">
              <h2>Softeware Engineering</h2>
              <p>Software engineering is the use of engineering principles to design, develop, test, and maintain computer software.</p>
            </div>
          </div>

          <div className="SkillBar">
            <img src={ElectronicEngineering} alt="Electronic Engineering" className="SkillBarImage" />
            <div className="SkillBarText">
              <h2>Electronic Engineering</h2>
              <p>Electronic engineering is a sub-discipline of electrical engineering that uses active components such as semiconductor devices to amplify and control electric current flow.</p>
            </div>
          </div>

        </div>
    </section>
  )
}

export default Skills
