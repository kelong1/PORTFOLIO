import React from 'react'

const About = () => {
  return (
    <section id='About' style={{textAlign:"center"}}>
         <h1>About me</h1>
    <div className='About_tabs'>
        <div className='image_section'>

        </div>
        <div className='About_me'>
            <div className='tabs'>
                <div>Experience</div>
                <div>skills</div>
                <div>projects</div>
            </div>
            <div>
            <p>I am a Software Developer specializing in frontend development 
                Experienced in designing ,creating and deploying of web based projects 
                .Well-versed in numerous programming languages including HTML,CSS ,Javascript,React,redux,Mongodb
                ,Node,Express,.Strong backgorund in web based projects and i can center a div!</p>
            <button className='btn btn-primary'>Lets Talk</button>
            </div>
        </div>
    </div>
    </section>
  )
}

export default About