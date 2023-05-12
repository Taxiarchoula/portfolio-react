import React,  { useRef } from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {TbBrandMessenger} from 'react-icons/tb'
import {FaViber} from 'react-icons/fa'
import {AiTwotoneMail} from 'react-icons/ai'
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7viyygl', 'template_dofsucs', form.current, 'BU3ag5KGaGASlRZMD')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiTwotoneMail  className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>taxiarxoula1@yahoo.gr</h5>
            <a href='mailto:taxiarxoula1@yahoo.gr' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <TbBrandMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Taxiarchoula Karanika</h5>
            <a href='https://m.me/taxiarxoula.karanika' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <FaViber className='contact__option-icon'/>
            <h4>Viber</h4>
            <h5>+30 6972374060</h5>
            <a href="viber://chat/?number=%2B306972374060" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT*/ }
          <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name' required />
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button> 
        </form>
      </div>
    </section>
  )
}


export default Contact
