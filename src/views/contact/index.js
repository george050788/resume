import React, { useRef } from 'react'
import emailIcon from '../../image/email.png'
import phone from '../../image/phone.png'




export default function Contact () {

  const formRef = useRef()


  const send = () => {
    const name = formRef.current['name'].value
    const email = formRef.current['email'].value
    const message = formRef.current['message'].value
    console.log('contact:', name, email, message)
  }
  return (
    <>
      <div className='contact' id='contact'>
        <div className='container'>
          <div className='title'>
            <h1>Take A Coffee & Chat With Me</h1>
          </div>
          <div className='contact-info'>
            <div>
              <img src={emailIcon} alt="" width={40} height={40} />
              <p>chu0507@gmail.com</p>
            </div>
            <div>
              <img src={phone} alt="" width={40} height={40} />
              <p>+1(626)501-2665</p>
            </div>
          </div>
          <form action="" ref={formRef}>
            <div>
              <input type="name" name='name' placeholder='Your Name' />
            </div>
            <div>
              <input type="email" name='email' placeholder='Your Email' />
            </div>
            <div>
              <input type="message" name='message' placeholder='Your Message' className='message' />
            </div>
          </form>

          <button type='button' onClick={send}>Send Message</button>








        </div>

      </div>







    </>
  )
}
