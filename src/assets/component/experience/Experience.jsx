import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'
import {GiTechnoHeart} from 'react-icons/gi'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <GiTechnoHeart className='experience__details-icon'/>
              <div> 
                <h4>HTML</h4>
                <small className='text-light'>Skilled</small>
              </div>
            </article>
            <article className='experience__details'>
              <GiTechnoHeart className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Skilled</small>
              </div>             
            </article>
            <article className='experience__details'>
              <GiTechnoHeart className='experience__details-icon'/>
              <div>
                <h4>JavaScript ES6 </h4>
                <small className='text-light'>Average</small>
              </div>
            </article>
            <article className='experience__details'>
              <GiTechnoHeart className='experience__details-icon'/>
              <div>
                <h4>Typescript</h4>
                <small className='text-light'>Begginer</small>
              </div>             
            </article>
            <article className='experience__details'>
              <GiTechnoHeart className='experience__details-icon'/>
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Beginner</small>
              </div>             
            </article>
            <article className='experience__details'>
              <GiTechnoHeart className='experience__details-icon'/>
              <div>
                <h4>React Native</h4>
                <small className='text-light'>Beginner</small>
              </div>              
            </article>
          </div>
        </div>
        {/*END OF FRONTEND*/}
          <div className='experienced__tools'>
          <h3>Tools and platforms</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <GiTechnoHeart className='experience__details-icon'/>
              <div>
                <h4>Wordpress</h4>
                <small className='text-light'>Beginner</small>
              </div>              
            </article>
            <article className='experience__details'>
              <GiTechnoHeart className='experience__details-icon'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Beginner</small>
              </div>             
            </article>
            <article className='experience__details'>
              <GiTechnoHeart className='experience__details-icon'/>
              <div>
                <h4>Webpack</h4>
                <small className='text-light'>Beginner</small>
              </div>             
            </article>
            <article className='experience__details'>
              <GiTechnoHeart className='experience__details-icon'/>
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Average</small>
              </div> 
            </article>
            <article className='experience__details'>
              <GiTechnoHeart className='experience__details-icon'/>
              <div>
                <h4>Canva</h4>
                <small className='text-light'>Specialist</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
