import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import bg from '../../images/bg.jpg'

export function login(props) {
  return (
    <div className='row login-front'>
      { background }
      <div className='col-4 mt-2'>
        
        { homeButton }

        <div className='d-flex justify-content-center auth-form'>
          <Login props={props}/>
        </div>
      </div>
    </div>
  )
}

export function register(props) {
  return (
    <div className='row login-front'>
      { background }

      <div className='col-4 mt-2'>
        
        { homeButton }

        <div className='d-flex justify-content-center auth-form'>
          <Register />
        </div>

      </div>
    </div>
  )
}

const background = (
  <div className='col auth-bg'>
    <img src={bg} alt='dogs-in-the-basket' className='bg-auth' />
  </div>
)

const homeButton = (
  <Link to='/'>
    <button className='btn btn-link-danger btn-back'>
      <i className="fas fa-arrow-left"></i> Home
    </button>
  </Link>
)
