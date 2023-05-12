import React from 'react'
import './about.css'
import ME from '../../Untitled.png'
import { FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <a href="#experience" ><h5 >Experience</h5></a>
              <small className='text-blue'>1+ Years</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <a href='#portofolio'><h5 >Projects</h5></a>
              <small className='text-blue'>3 Completed</small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Programming Languages</h5>
              <small className='text-blue'></small>
            </article> */}

          </div>
          <p>
          This is the captivating realm of web development, crafted with a touch of feminine prowess and newbie enthusiasm.
          My passion for web development emerged from a desire to blend the art of design with the logic of programming. Together, let's create digital wonders that leave a lasting imprint and inspire others to embark on their own web development journey. Welcome to my web development wonderland, where dreams come to life, one line of code at a time.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>

  )
}

export default About
