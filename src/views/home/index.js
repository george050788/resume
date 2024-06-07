import React, { useEffect } from 'react'

import hand from '../../image/hand.svg'
import profilebg from '../../image/profilebg.svg'
import john from '../../image/john.png'
import icon1 from '../../image/icon1.png'
import icon2 from '../../image/icon2.png'
import icon3 from '../../image/icon3.png'
import icon4 from '../../image/icon4.png'
import icon5 from '../../image/icon5.png'

export default function Home () {

  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])


  return (
    <>
      <div id='home' className='home'>


        <div className='content'>
          <div className='left'>
            <div className='name'>
              <img src={hand} alt="" width={100} height={105} />
              <div>
                <h2>Hello, I am</h2>
                <h1>George</h1>
              </div>
            </div>
            <div className='experience'>
              <p>WEB DEVELOPER</p>
              <p>FRONTEND ENGINEER</p>
              <p>REACT NATIVE DEVELOPER</p>
              <p>BACKEND ENGINEER</p>
              <p>FULLSTACK DEVELOPER</p>
            </div>
          </div>
          <div className='center'>
            <img src={john} alt="" />
          </div>
          <div className='right'>
            <div>
              <img src={icon1} alt="" width={60} height={49} />
            </div>
            <div>
              <img src={icon2} alt="" width={90} height={73} />
            </div>
            <div>
              <img src={icon3} alt="" width={108} height={88} />
            </div>
            <div>
              <img src={icon4} alt="" width={90} height={73} />
            </div>
            <div>
              <img src={icon5} alt="" width={60} height={49} />
            </div>
          </div>
        </div>



      </div>

    </>
  )
}
