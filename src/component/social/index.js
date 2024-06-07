import React from 'react'
import github from '../../image/github-logo.svg'
import linkedin from '../../image/linkedin.svg'
export default function Social () {




  return (
    <>
      <div className='social'>
        <div>
          <img src={linkedin} alt="" width={30} height={30} />
        </div>
        <div>
          <img src={github} alt="" width={30} height={30} />
        </div>

      </div>



    </>
  )
}
