import React from 'react'

export const Project = () => {
  return (
    <section className='project' id="project">
        <div>
        <h1>MY WORK</h1>
        <p style={{textAlign:"center"}}>Here you will find a preview of some of the projects i have done with Mern Stack technology</p>
          </div>
        <div className='project_tabs'>
          <div>
            <img src="../public/images/mongo.jpg" alt="todo" />
            <p>To-do Application</p>
           
              <button className='btn'>Github</button>
              <a href="https://kelong1.github.io/React-Todo-Application/"><button className='btn'>Live Demo</button></a>
           
          </div>
          <div>
            <img src="../../../public/images/todo.PNG" alt="Blog" />
            <p>Blog Website</p>
           
              <button className='btn'>Github</button>
              <a href="https://kelong1.github.io/React-Todo-Application/"><button className='btn'>Live Demo</button></a>
           
          </div>
          <div>
            <img src="../../../public/images/todo.PNG" alt="Journal" />
            <p>Trading Journal website</p>
           
              <button  className='btn'>Github</button>
              <a href="https://kelong1.github.io/React-Todo-Application/"><button className='btn'>Live Demo</button></a>
           
          </div>
          <div>
            <img src="../../../public/images/todo.PNG" alt="Eccomerce" />
            <p>Ecommerce web</p>
           
              <button className='btn '>Github</button>
              <a href="https://kelong1.github.io/React-Todo-Application/"><button className='btn'>Live Demo</button></a>
           
          </div>
          
         
          

        

          
        </div>

    </section>
  )
}
