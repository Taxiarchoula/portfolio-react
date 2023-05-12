import React from 'react'
import Header from './assets/component/header/Header' 
import Nav from './assets/component/nav/Nav'
import About from './assets/component/about/About'
import Experience from './assets/component/experience/Experience'
// import Services from './assets/component/services/Services'
import Portofolio from './assets/component/portofolio/Portofolio'
// import Testimonials from './assets/component/testimonials/Testimonials'
import Contact from './assets/component/contact/Contact'
import Footer from './assets/component/footer/Footer'
// import {  BrowserRouter as Router} from 'react-router-dom'
const App = () => {
  return (
    <>
       < Header/>
       < Nav/>
       <About/>
       <Experience/>
       <Portofolio/>
       <Contact/>
       <Footer/>
    </>
  )
}

export default App
