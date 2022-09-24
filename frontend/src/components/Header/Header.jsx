import React from 'react'

export const Header = () => {
  return (
    <header className='header'>
        <div className='logo'>
            myportfolio
        </div>
        <div className='nav'>
            <ul>
                <li>
                    <a href="#Home">Home</a>
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
