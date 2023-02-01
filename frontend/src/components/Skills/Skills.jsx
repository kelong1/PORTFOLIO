import React from 'react'
import{MdVerified} from "react-icons/md"

export const Skills = () => {
  return (
      <section id='skills' className='skills'>
      <h1 style={{textAlign:"center"}}>My Skills</h1>
     <div className='skills_tabs'>
      <div className='front'>
        <h4>Frontend Development</h4>
        <ul>
          <li><MdVerified/>React <p>Experienced</p></li>
          <li><MdVerified/>Redux<p>Experienced</p></li>
          <li><MdVerified/>Javascript<p>Experienced</p></li>
          <li><MdVerified/>HTML<p>Experienced</p></li>
          <li><MdVerified/>CSS<p>Experienced</p></li>
          <li><MdVerified/>Boostrap<p>Experienced</p></li>
          <li><MdVerified/>Tailwind<p>Experienced</p></li>
          <li><MdVerified/>Typescript<p>Experienced</p></li>
        </ul>

      </div> 
      <div className='back'>
       <h4> Backend Development</h4>
        <ul>
          <li><MdVerified/>Nodejs<p>Experienced</p></li>
          <li><MdVerified/>Python<p>Experienced</p></li>
          <li><MdVerified/>Java<p>Experienced</p></li>
          <li><MdVerified/>SQL<p>Experienced</p></li>
          <li><MdVerified/>MongoDB<p>Experienced</p></li>
          <li><MdVerified/>PHP<p>Experienced</p></li>
        </ul>

      </div>
     </div>

 </section>
  )
}

