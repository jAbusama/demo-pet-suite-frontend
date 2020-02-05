import React, { useState, useEffect } from 'react'
import useGlobal from '../../services/useGlobal'
import { Link } from 'react-router-dom'
import Notification from '../../components/Notification'
import { useForm } from '../useForm'


function Login({props}) {

  let initialState = {
    email    : '',
    password : ''
  }

  const [gState, gActions] = useGlobal()
  useEffect(() => {
    // if(isLogin){
    //   props.history.push('/')
    // }
    console.log('Login is rendered')
  })
  
  const [values, handleChange, data] = useForm(initialState)

  // const [user, setUser] = useState(initialState)
  const logIn = async e => {
    e.preventDefault()
    const res = await gActions.login(values, props)
    if(res) {
      props.history.push('/')
    }
  }


  const styles = {
    accounts : {
      cursor : 'pointer',
      color  : 'blue'
    }
  }

  return (
    <div className='form'>
      {gState.notificationsLoaded === false && <Notification message= {gState.notificationError}
        gActions= {gActions} />}
      <form onSubmit={ logIn }>
        <h1 className='heading'>PetSuite</h1>
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
          <label htmlFor='password'>Password</label>
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
          <small>
            <i className='sign-in-as'> Sign in as : </i>
           
            <u
              id='manager'
              onClick={data}
              style={styles.accounts}
            >
              {' '}
              Manager
            </u>
            <u
              id='employee'
              onClick={data}
              style={styles.accounts}
            >
              {' '}
              Employee
            </u>
            <u
              id='owner'
              onClick={data}
              style={styles.accounts}
            >
              {' '}
              Owner
            </u>
          </small>
        </div>
        <div className='form-group text-center'>
          <small className='form-text text-muted login-footer'>
            Don't have an account ? <u style={styles.accounts}>
               <Link to='/register'>
                Regiter
               </Link>
               </u> here
          </small>
        </div>
        <div className="text-center">
          <button type='submit' className='btn btn-primary '>
            Login
          </button>
        </div>
        

      </form>
    </div>
  )
}

export default Login
