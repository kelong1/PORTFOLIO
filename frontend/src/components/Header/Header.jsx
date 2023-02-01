import React from 'react'

export const Header = () => {
  return (
    <header className='header'>
        <div className='logo'>
           <p>myporfolio</p>
           <i></i>
        </div>
        <div className='nav'>
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                   <a href='#About'>About me</a>
                </li>
                <li>
                   <a href='#skills'>Skills</a>
                </li>
                <li>
                   <a href='#project'>Projects</a>
                </li>
                <li>
                  <a href='#contact'>Contact me</a>
                </li>
            </ul>
        </div>
    </header>
  )
}
