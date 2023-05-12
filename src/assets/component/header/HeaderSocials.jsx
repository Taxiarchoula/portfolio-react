import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {VscGithubAlt} from 'react-icons/vsc'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/taxiarchoula-karanika/" target='_blank'><FiLinkedin /> </a>
      <a href="https://github.com/Taxiarchoula/" target='_blank'> < VscGithubAlt/></a>
    </div>
  )
}

export default HeaderSocials
