import React from 'react'
import {MdEmail} from "react-icons/md"
import {BsLinkedin,BsInstagram } from "react-icons/bs"

const Footer = () => {
  return (
    <section className='footer' id='contact'>
        <h1>Contact me</h1>
        <div className='contact_info'>
          <div className='contact_social'>
            <div>
            <MdEmail/>
            <p>Email</p>
            <p>Kelongzac@gmail.com</p>
            </div>
            <div>
              <BsLinkedin/>
             <p> LinkedIn</p></div>
            <div>
           <BsInstagram/>
           <p> Instagram</p></div>
          </div>
        <div className='contact'>
            <form className='form-group contact_form' >
                <input type="text" className='form-control' placeholder='Your name'/><br />
                <input type="text" className='form-control' placeholder='Your email'/><br />
                <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' className='form-control'></textarea><br />
                <button className='btn btn-primary'> submit</button>
            </form>
          </div>
          </div>
        <div className='footer_last'>
          <h2>KELONG</h2>
          <ul>
            <li>Home</li>
            <li>About me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li><BsInstagram/></li>
            <li><BsLinkedin/></li>
            <li><MdEmail/></li>
          </ul>
          <p>@Kelong Zacharia .All rights reserved</p>
        </div>
    </section>

  )
}

export default Footer