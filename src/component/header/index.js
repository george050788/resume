import React from 'react'
import solelylogo from '../../image/solely-logo.svg'
export default function Header () {





  return (
    <>
      <div className='header'>
        <div className='container'>
          <div className='logo'>
            <img src={solelylogo} alt="" width={180} height={40} />
            <h3>Solely</h3>
          </div>
          <div className='navbar'>
            <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#work">WORK</a></li>
              <li><a href="#skills">SKILLS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>

        </div>
      </div>

    </>
  )
}
