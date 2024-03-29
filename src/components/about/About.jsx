import React from 'react'
import './about.css'
import ME from '../../assets/adrian-keyboard.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
            <FaAward className="about_icon" />
            <h5>Experience</h5>
            <small>123+ Years Working</small>
          </article>

          <article className='about_card'>
            <FiUsers className="about_icon" />
            <h5>Clients</h5>
            <small>123+ Clients Worldwide</small>
          </article>

          <article className='about_card'>
            <VscFolderLibrary className="about_icon" />
            <h5>Projects</h5>
            <small>123+ Completed Projects</small>
          </article>
        </div>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
      </section>
  )
}

export default About