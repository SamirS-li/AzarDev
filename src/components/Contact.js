import React from 'react';
import contact_image from '../image/contact.webp'

export default function Contact() {
  return (
    <section id='Contact'>
      <div className="container">
        <div className="contact-main">
          <div className="contact-image">
            <img src={contact_image} alt="contact" />
          </div>
          <div className="contact-form-div">
            <form action="" className='contact-form'>
              <input type="text" placeholder='Name and Surname'/>
              <input type="mail" placeholder='Email Address'/>
              <input type="text" placeholder='Phone number (Optional)' />
              <textarea name="" id="" rows="11" placeholder='Message'></textarea>
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
