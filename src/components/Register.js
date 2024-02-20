import React from 'react';
import { Link } from 'react-router-dom';
import register_image from '../image/register.webp'

export default function Register() {
  return (
    <section id='Register'>
      <div className="container">
        <div className="register-main">
          <div className="register-form-div">
            <form action="" className='register-form'>
              <input type="text" placeholder='User name' />
              <input type="mail" placeholder='Email' />
              <input type="password" placeholder='Password' />
              <input type="password" placeholder='Password Again' />
              <button>Register</button>
            </form>
            <Link to="/login" className="register-login-link">Have an account ?<span>Login</span></Link>
          </div>
          <div className="register-image">
            <img src={register_image} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
