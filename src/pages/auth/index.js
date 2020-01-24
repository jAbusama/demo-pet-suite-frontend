import React from 'react'
import Login from './Login'
import Register from './Register'
import bg from '../../images/bg.jpg'

export function login(props) {
  return (
    <div className='row login-front'>
      { background }
      <div className='col-4 d-flex justify-content-center auth-form'>
        <Login props={props}/>
      </div>
    </div>
  )
}

export function register(props) {
  return (
    <div className='row login-front'>
      { background }
      <div className='col-4 d-flex justify-content-center auth-form box'>
        <Register />
      </div>
    </div>
  )
}

const background = (
  <div className='col auth-bg'>
  <img src={bg} alt='dogs-in-the-basket' className='bg-auth' />
</div>
)
