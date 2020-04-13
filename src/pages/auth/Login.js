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
  
  const [gStates, gActions] = useGlobal()

  const initNotf = () => {
    if(gStates.notificationMessage.success.trim() !== "" || gStates.notificationMessage.error.trim() !== "") {
      return true;
    }
    return false;
  }

  const [notf, setNotf] = useState(initNotf());
  const [values, handleChange, data] = useForm(initialState)
  
  const signIn = async(e) => {
    e.preventDefault()
    const res = await gActions.login(values, history)
    
    if(res){
      const user = storage.get('user');
      console.log(user);
      if(user.role === 'manager' || user.role ==='employee') {
        history.push('/manage');
      }
      else {
        history.push('/');
      }
    }
    else {
      setNotf(true);
    }
  }

  const styles = {
    accounts : {
      cursor : 'pointer',
      color  : 'blue'
    }
  }

  const notfStatus = () => {
    console.log('test');
    setNotf(false);
  }

  return (
    <div className='form'>
      {notf && <Notification state={gStates.notificationMessage} isDone={notfStatus} />}
      <form onSubmit={ signIn }>
        <h1 className='heading'>Login</h1>
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
