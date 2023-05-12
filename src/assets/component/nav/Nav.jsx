import React from 'react'
import "./nav.css"
import {SiHomebridge} from 'react-icons/si'
import { GrUserFemale } from 'react-icons/gr'
import {BiBook} from 'react-icons/bi'
import {GiSoapExperiment} from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'
import { SiTinyletter } from 'react-icons/si'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><SiHomebridge/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><GrUserFemale/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiSoapExperiment/></a>
      <a href="#portofolio"onClick={() => setActiveNav('#portofolio')} className={activeNav === '#portofolio' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact"onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><SiTinyletter/></a>
    </nav>
  )
}

export default Nav
