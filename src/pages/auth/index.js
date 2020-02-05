import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import useGlobal from '../../services/useGlobal'
import LoginPage from './Login'
import RegisterPage from './Register'
import bg from '../../images/bg.jpg'

export function Login(props) {

  return (
    <div className='row login-front'>
      { background }
      <div className='col-4 mt-2'>
        
        { homeButton }
        
        <div className='d-flex justify-content-center auth-form'>
          <LoginPage props={props}/>
        </div>
      </div>
    </div>
  )
}

export function Register(props) {
  return (
    <div className='row login-front'>
      { background }

      <div className='col-4 mt-2'>
        
        { homeButton }

        <div className='d-flex justify-content-center auth-form'>
          <RegisterPage />
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
