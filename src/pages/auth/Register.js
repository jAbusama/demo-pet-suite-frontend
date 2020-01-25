import React, { useState } from 'react'
import { useForm }  from '../useForm'
import { Link } from 'react-router-dom'
import useGlobal from '../../services/useGlobal'

function Register({ props }) {
  const initValues = {
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    password: '',
    repassword: ''
  }

  const [ values, handleChange ] = useForm(initValues)
  const [ gState, gActions ] = useGlobal()

  const register = (e) => {
    e.preventDefault()
    gActions.register(values, props)
  }

  const styles = {
    accounts : {
      cursor : 'pointer',
      color  : 'blue'
    }
  }

  return (
    <React.Fragment>
      <div className='form'>
        <div className="notification">
        </div>
      <form onSubmit={ register } >
        <h1>Register</h1>
  
        <div className="form-row">
          <div className="form-group col-lg-6 col-md-12">
            <label htmlFor='firstname'>Firstname</label>
            <input
              type='text'
              name='firstname'
              id='firstname'
              className='form-control'
              value={ values.firstname }
              onChange={ handleChange }
            />
            <div className="invalid-feedback">
              { gState.notificationError.message }
            </div>
            
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label htmlFor='lastname'>Lastname</label>
            <input
              type='text'
              name='lastname'
              id='lastname'
              className='form-control'
              value={ values.lastname }
              onChange={ handleChange }
            />
          </div>
        </div>

        <h5 className="text-muted">CONTACT</h5>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            className='form-control'
            value={ values.email }
            onChange={ handleChange }
          />
        </div>
        
        <div className='form-group'>
          <label htmlFor='mobile'>Mobile</label>
          <input
            type='text'
            name='mobile'
            id='mobile'
            className='form-control'
            value={ values.mobile }
            onChange={ handleChange }
          />
        </div>

        <div className='form-group'>
          <label htmlFor='Password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            className='form-control'
            value={ values.password }
            onChange={ handleChange }
          />
        </div>

        <div className='form-group'>
          <label htmlFor='repassword'>Confirm Password</label>
          <input
            type='password'
            name='repassword'
            id='repassword'
            className='form-control'
            value={ values.repassword }
            onChange={ handleChange }
          />
        </div>

        <div className='text-center form-group'>
          <small className='form-text text-muted login-footer'>
           Already have an account ? <u style={styles.accounts}>
               <Link to='/'>
                Login
               </Link>
               </u> here
          </small>
          <button type='submit' className='btn btn-primary '>
            Register
          </button>
        </div>
      </form>
    </div>
    </React.Fragment>
  )
}

export default Register