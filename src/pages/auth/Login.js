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

  const login = async (e) => {
		e.preventDefault()
    await actions.login(user)
  }

  const styles = {
    bg       : {
      padding : '100px 100px 0 0'
    },
    accounts : {
      cursor : 'pointer',
      color  : 'blue'
    }
  }

  const logIn = async e => {
    e.preventDefault()
    await actions.login(user)
  }

  return (
    <div className='login' style={styles.bg}>
      <form onSubmit={logIn}>
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
            Sign in as:
            <span
              onClick={() => setUser({ password: 'pass1234', email: 'manager@petsuite.com' })}
              style={styles.accounts}
            >
              {' '}
              Manager
            </span>
            <span
              onClick={() => setUser({ password: 'pass1234', email: 'employee@petsuite.com' })}
              style={styles.accounts}
            >
              {' '}
              Employee
            </span>
            <span
              onClick={() => setUser({ password: 'pass1234', email: 'owner@petsuite.com' })}
              style={styles.accounts}
            >
              {' '}
              Owner
            </span>
          </small>
        </div>
        <div className='tect-center'>
          <small className='form-text text-muted'>
            Don't have an account ? <u style={styles.accounts}> Regiter</u> here
          </small>
        </div>
        <button type='submit' className='btn btn-primary'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
