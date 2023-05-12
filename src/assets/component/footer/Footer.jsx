import React from 'react'
import "./footer.css"
import {FiFacebook} from 'react-icons/fi'
import {SiInstagram} from 'react-icons/si'
import {VscGithubAlt} from 'react-icons/vsc'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>TK</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portofolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/taxiarxoula.karanika'><FiFacebook/></a>
        <a href='https://www.instagram.com/taxiarchoula_krn/'><SiInstagram/></a>
        <a href='https://github.com/Taxiarchoula/'><VscGithubAlt/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Designed and build with lots of ☕ and 💗. </small>
      </div>
    </footer>
  )
}

export default Footer
