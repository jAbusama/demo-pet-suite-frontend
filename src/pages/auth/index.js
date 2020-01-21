import React from 'react'
import Login from './Login'
import Register from './Register'
import bg from '../../images/bg.jpg'

export function login() {
  
  return (
    <div className='row login-front'>
      <div className='mobile-login-background'>
        <img src={bg} alt='dogs-in-the-basket' className='bg-auth' />
      </div>
      <div className='col auth-bg'>
        <img src={bg} alt='dogs-in-the-basket' className='bg-auth' />
      </div>
      <div className='col-4 d-flex justify-content-center auth-form box'>
        <Login />
      </div>
      
    </div>
  )
}

export function register() {
  return (
    <div className='row login-front'>
      <div className='mobile-login-background'>
        <img src={bg} alt='dogs-in-the-basket' className='bg-auth' />
      </div>
      <div className='col auth-bg'>
        <img src={bg} alt='dogs-in-the-basket' className='bg-auth' />
      </div>
      <div className='col-4 d-flex justify-content-center auth-form box'>
        <Register />
      </div>
    </div>
  )
}
