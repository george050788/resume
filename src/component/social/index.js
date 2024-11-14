import React from 'react'
import github from '../../image/github-logo.svg'
import linkedin from '../../image/linkedin.svg'
export default function Social () {

  const tolinkedin = () => {
    window.open('https://www.linkedin.com/in/chih-yu-chu-a2224a323/')
  }
  const togithub = () => {
    window.open('https://github.com/george050788')
  }


  return (
    <>
      <div className='social'>
        <div onClick={tolinkedin}>
          <img src={linkedin} alt="" width={30} height={30} />
        </div>
        <div onClick={togithub}>
          <img src={github} alt="" width={30} height={30} />
        </div>

      </div>



    </>
  )
}
