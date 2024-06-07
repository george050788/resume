import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
export default function Nav () {

  const [isActive, setIsActive] = useState([true, false, false, false, false])

  const active = (i) => {
    const arr = new Array(5).fill(false)

    arr[i] = !arr[i]
    setIsActive([...arr])

  }

  const handlechange = document.addEventListener('scroll', () => {
    const a = document.getElementsByClassName('dot')
    console.log('a', a)
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove('active')

    }
    const i = Math.floor(window.scrollY / 1200)
    console.log(i)
    a[i].classList.add('active')
  })






  // const handlechange = () => {
  //   const a = document.getElementById('a')


  //   if (window.scrollY >= 50) {
  //     console.log(a)
  //     a[0].classList.remove('active')
  //     a[1].classList.add('active')
  //   }

  // }



  return (
    <>
      <div className='pages'>
        {
          ['home', 'about', 'work', 'skills', 'contact'].map((v, i) =>
            (<div key={i} onClick={() => { active(i) }}><a href={'#' + v} className={isActive[i] ? 'dot active' : 'dot'}></a></div>))
        }



      </div>






    </>
  )
}
