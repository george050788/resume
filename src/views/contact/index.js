import React, { useRef, useState } from 'react'
import emailIcon from '../../image/email.png'
import phone from '../../image/phone.png'




export default function Contact () {

  // const formRef = useRef()


  // const send = () => {
  //   const name = formRef.current['name'].value
  //   const email = formRef.current['email'].value
  //   const message = formRef.current['message'].value
  //   console.log('contact:', name, email, message)
  // }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:5000/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Message sent:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
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
          <form action="">
            <div>
              <input type="name" name='name' placeholder='Your Name' value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <input type="email" name='email' placeholder='Your Email' value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <input type="message" name='message' placeholder='Your Message' className='message' value={formData.message} onChange={handleChange} />
            </div>
          </form>

          <button type='button' onClick={handleSubmit} >Send Message</button>


        </div>

      </div>







    </>
  )
}
