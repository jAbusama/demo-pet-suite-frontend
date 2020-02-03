import React from 'react'
import Login from './Login'
import Register from './Register'
import bg from '../../images/bg.jpg'
// import { browserHistory } from 'react-router-dom'

export function login(props) {
  return (
    <div className='row login-front'>
      { background }
      <div className='col-4 mt-2'>

        <button className='btn btn-link-danger btn-back' onClick={props.history.goBack} >
          <i className="fas fa-arrow-left"></i> Back
        </button>

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
        
        <button className='btn btn-link-danger btn-back' onClick={props.history.goBack}>
          <i className="fas fa-arrow-left"></i> Back
        </button>

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
