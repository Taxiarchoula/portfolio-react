import React from 'react'
import "./portofolio.css"
import IMG4 from '../../loader_4.gif'

const data =[
  {
    id:1,
    image: IMG4,
    title: 'Weather App',
    github: 'https://github.com/Taxiarchoula/',
    demo: "https://github.com/Taxiarchoula"
  },
  {
    id:2,
    image: IMG4,
    title: 'To be loading',
    github: 'https://github.com/Taxiarchoula/',
    demo: 'https://github.com/Taxiarchoula'
  },
  {
    id:2,
    image: IMG4,
    title: 'To be loading',
    github: 'https://github.com/Taxiarchoula/',
    demo: 'https://github.com/Taxiarchoula'  
  }
]
const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recend Work</h5>
      <h2>Portfolio</h2>
      <div className='container portofolio__container'>
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article className='portofolio__item'>
          <div className='portofolio__item-image'>
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className='portofolio__item-cta'>
            <a href= {github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary'  target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
        </div>
    </section>
  )
}

export default Portofolio
