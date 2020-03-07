import React, { useState, useEffect } from 'react'
import useGlobal from '../../services/useGlobal'
import { Link } from 'react-router-dom'
import Notification from '../../components/Notification'
import { useForm } from '../useForm'
import TextFieldGroup from '../../components/common/TextFieldGroup'
import storage from 'store'

function Login({history}) {

  let initialState = {
    email    : '',
    password : ''
  }

  
  const [gState, gActions] = useGlobal()
  const isLogin = storage.get('isLogin')
  useEffect(() => {
    console.log('Login is rendered')
    // let unmounted = false
    // if(unmounted) {
    //   if(isLogin){
    //     history.push('/')
    //   }
    // }
   
    return () => console.log('Login is unmounted')
  },[])
  
  const [values, handleChange, data] = useForm(initialState)

  const logIn = (e) => {
    e.preventDefault()
    const res = gActions.login(values, history)
    if(!res ){
      
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
        <TextFieldGroup 
          type='text'
          field='email'
          label='Email'
          value= {values.email}
          onChange= {handleChange}
          // error= ''
        />
        <TextFieldGroup 
          type='password'
          field='password'
          label='Password'
          value= {values.password}
          onChange= {handleChange}
        />
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
