import React, { useState } from 'react'
import useGlobal from '../../services/useGlobal'

function Login() {

  const initialState = {
    email    : '',
    password : ''
  }
  // const [ user, setUser ] = useState(initialState)

  const [user, setUser] = useState(initialState)
  const [state, actions] = useGlobal()
  
  const logIn = async e => {
    e.preventDefault()
    await actions.login(user)
  }

  const styles = {
    accounts : {
      cursor : 'pointer',
      color  : 'blue'
    }
  }

  return (
    <div className='login'>
      <form onSubmit={ logIn }>
        <h1>PetSuite</h1>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            className='form-control'
            value={user.email}
            onChange={e => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            className='form-control'
            value={user.password}
            onChange={e => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <small>
            <i className='sign-in-as'> Sign in as : </i>
           
            <u
              onClick={() => setUser({ password: 'pass1234', email: 'manager@petsuite.com' })}
              style={styles.accounts}
            >
              {' '}
              Manager
            </u>
            <u
              onClick={() => setUser({ password: 'pass1234', email: 'employee@petsuite.com' })}
              style={styles.accounts}
            >
              {' '}
              Employee
            </u>
            <u
              onClick={() => setUser({ password: 'pass1234', email: 'owner@petsuite.com' })}
              style={styles.accounts}
            >
              {' '}
              Owner
            </u>
          </small>
        </div>
        <div className='text-center'>
          <small className='form-text text-muted login-footer'>
            Don't have an account ? <u style={styles.accounts}> Regiter</u> here
          </small>
         
            <button type='submit' className='btn btn-primary '>
              Login
            </button>
          
        </div>
        
      </form>
    </div>
  )
}

export default Login
