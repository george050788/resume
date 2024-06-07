import React from 'react'
import project1 from '../../image/project1.png'
import project2 from '../../image/project2.png'
import project3 from '../../image/project3.png'
import project4 from '../../image/project4.png'
import view from '../../image/view.svg'
import github from '../../image/github-logo.svg'




export default function Work () {


  const toproject1 = () => {
    window.open('https://george-project1.netlify.app')
  }
  const togithub1 = () => {
    window.open('https://github.com/george050788/weatherstack')
  }
  const toproject2 = () => {
    window.open('https://project2-covilla.netlify.app')
  }
  const togithub2 = () => {
    window.open('https://github.com/george050788/travel')
  }
  const toproject3 = () => {
    window.open('https://project3-glasses.netlify.app')
  }
  const togithub3 = () => {
    window.open('https://github.com/george050788/glasses')
  }
  const toproject4 = () => {
    window.open('https://georgep4.netlify.app/')
  }
  const togithub4 = () => {
    window.open('https://github.com/george050788/project4')
  }

  const handleclickHTML = () => {
    const element = document.getElementsByClassName('portfolio')
    console.log(element)
    for (let i = 0; i < element.length; i++) {
      if (i > 0) {
        element[i].style.display = 'none'
      }
      else { element[i].style.display = 'flex' }
    }
  }
  const handleclickJavaScript = () => {
    const element = document.getElementsByClassName('portfolio')
    console.log(element)
    for (let i = 0; i < element.length; i++) {
      if (i !== 1) {
        element[i].style.display = 'none'
      }
      else { element[i].style.display = 'flex' }
    }
  }

  const handleclickReact = () => {
    const element = document.getElementsByClassName('portfolio')
    console.log(element)
    for (let i = 0; i < element.length; i++) {
      if (i !== 2) {
        element[i].style.display = 'none'
      }
      else { element[i].style.display = 'flex' }
    }
  }

  const handleclickNode = () => {
    const element = document.getElementsByClassName('portfolio')
    console.log(element)
    for (let i = 0; i < element.length; i++) {
      if (i !== 3) {
        element[i].style.display = 'none'
      }
      else { element[i].style.display = 'flex' }
    }
  }
  const handleclickALL = () => {
    const element = document.getElementsByClassName('portfolio')
    console.log(element)
    for (let i = 0; i < element.length; i++) {

      element[i].style.display = 'flex'
    }
  }



  return (
    <>
      <div id='work' className='work'>
        <div className='container'>
          <div className='title'>
            <h1>My Creative <span>Portfolio</span> Section</h1>
          </div>
          <div className='nav'>
            <li onClick={handleclickHTML}>HTML</li>
            <li onClick={handleclickHTML}>CSS</li>
            <li onClick={handleclickJavaScript}>Javascript</li>
            <li onClick={handleclickReact}>ReactJs</li>
            <li onClick={handleclickReact}>Redux</li>
            <li onClick={handleclickNode}>NodeJs</li>
            <li onClick={handleclickALL}>All</li>
          </div>
          <div className='project'>
            <div className='portfolio'>
              <div className='img-container'>
                <img src={project1} alt="" width={430} height={350} />
                <div className='mask'>
                  <div onClick={toproject1}>
                    <img src={view} alt="" width={25} height={25} />
                  </div>
                  <div onClick={togithub1}>
                    <img src={github} alt="" width={25} height={25} />
                  </div>
                </div>
              </div>
              <h4>WeatherStack</h4>
              <p>Get current weather information, historical data and forecasts using weatherstack - a free world weather REST API supporting millions of global locations.</p>
              <div className='tool'>HTML</div>
            </div>
            <div className='portfolio'>
              <div className='img-container'>
                <img src={project2} alt="" width={430} height={350} />
                <div className='mask'>
                  <div onClick={toproject2}>
                    <img src={view} alt="" width={25} height={25} />
                  </div>
                  <div onClick={togithub2}>
                    <img src={github} alt="" width={25} height={25} />
                  </div>
                </div>
              </div>
              <h4>webflow-path-three</h4>
              <p>Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae.</p>
              <div className='tool'>Javascript</div>
            </div>
            <div className='portfolio'>
              <div className='img-container'>
                <img src={project3} alt="" width={430} height={350} />
                <div className='mask'>
                  <div onClick={toproject3}>
                    <img src={view} alt="" width={25} height={25} />
                  </div>
                  <div onClick={togithub3}>
                    <img src={github} alt="" width={25} height={25} />
                  </div>
                </div>
              </div>
              <h4>salinaka-ecommerce</h4>
              <p>Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we've got your eyes covered.</p>
              <div className='tool'>NodeJs</div>
            </div>
            <div className='portfolio'>
              <div className='img-container'>
                <img src={project4} alt="" width={430} height={350} />
                <div className='mask'>
                  <div onClick={toproject4}>
                    <img src={view} alt="" width={25} height={25} />
                  </div>
                  <div onClick={togithub4}>
                    <img src={github} alt="" width={25} height={25} />
                  </div>
                </div>
              </div>
              <h4>solelysneat.vercel.app</h4>
              <p>Sneat - Material Design React Admin Dashboard Template - is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.</p>
              <div className='tool'>ReactJs</div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}
