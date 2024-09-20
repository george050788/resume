import React from 'react'
import image1 from '../../image/image1.png'
import image2 from '../../image/image2.png'
import image3 from '../../image/image3.png'
import image4 from '../../image/image4.png'



export default function About () {





  return (
    <>
      <div id='about' className='about'>
        <div className='container'>
          <div className='title'>
            <h1>I Know That <span>Good Development</span></h1>
            <h1>Means <span>Good Developer</span></h1>
          </div>
          <div className='experiences'>
            <div className='top'>
              <div>
                <img src={image1} alt="" width={370} height={320} />
                <h3>FULLSTACK DEVELOPER</h3>
                <p>I am a fullstack developer with a passion for building beautiful and function web applications</p>
              </div>
              <div>
                <img src={image2} alt="" width={370} height={320} />
                <h3>WEB DEVELOPER</h3>
                <p>I am a web developer with a passion for building beautiful and function web applications</p>
              </div>
              <div>
                <img src={image3} alt="" width={370} height={320} />
                <h3>REACT NATIVE DEVELOPER</h3>
                <p>I am a react native developer with a passion for building beautiful and function web applications</p>
              </div>
            </div>
            <div className='bottom'>
              {/* <div>
                <img src={image3} alt="" width={370} height={320} />
                <h3>BACKEND DEVELOPER</h3>
                <p>I am a backend developer with a passion for building beautiful and function web applications</p>
              </div> */}
              <div>
                <img src={image4} alt="" width={370} height={320} />
                <h3>FRONTEND DEVELOPER</h3>
                <p>I am a frontend developer with a passion for building beautiful and function web applications</p>
              </div>
            </div>
          </div>


        </div>
      </div>




    </>
  )
}
