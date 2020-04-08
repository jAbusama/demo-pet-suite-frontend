import React, { useState } from 'react'
import TextFieldGroup from '../../components/common/TextFieldGroup'
import Notification from '../../components/Notification'
import { useForm }  from '../useForm'
import { Link } from 'react-router-dom'
import useGlobal from '../../services/useGlobal'

function Register({ history }) {
  const initValues = {
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    password: '',
    repassword: ''
  }

  const [ values, handleChange ] = useForm(initValues)
  const [ gStates, gActions ] = useGlobal()
  const [notf, setNotf] = useState(false);

  const register = async(e) => {
    e.preventDefault()
    const res = await gActions.register(values, history)
    if(res){
      history.push('/login');
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
    setNotf(false);
  }

  return (
    <div className='form'>
      {notf && <Notification state={gStates.notificationMessage} isDone={notfStatus} />}
      <form onSubmit={ register } >
        <h1>Register</h1>

        <div className="form-row">
          <TextFieldGroup 
            addClass = 'col-lg-6 col-md-12'
            field= 'firstname'
            value= {values.firstname}
            onChange= {handleChange}
            label= 'Firstname'
          /> 

          <TextFieldGroup 
            addClass = 'col-lg-6 col-md-12'
            field= 'lastname'
            value= {values.lastname}
            onChange= {handleChange}
            label= 'Lastname'
          /> 
         
        </div>

        <TextFieldGroup 
            field= 'email'
            value= {values.email}
            onChange= {handleChange}
            label= 'Email'
          /> 

          <TextFieldGroup 
            field= 'mobile'
            value= {values.mobile}
            onChange= {handleChange}
            label= 'Mobile Number'
          /> 

          <TextFieldGroup 
            type = 'password'
            field= 'password'
            value= {values.password}
            onChange= {handleChange}
            label= 'Password'
          />

          <TextFieldGroup 
            type = 'password'
            field= 'repassword'
            value= {values.repassword}
            onChange= {handleChange}
            label= 'Comfirm Password'
          />
        

        <div className='text-center form-group'>
          <small className='form-text text-muted login-footer'>
            Already have an account ? <u style={styles.accounts}>
                <Link to='/login'>
                Login
                </Link>
                </u> here
          </small>
          
        </div>
        <div className="text-center">
          <button type='submit' className='btn btn-primary '>
            Register
          </button>
        </div>
        
      </form>
    </div>

  )
}

export default Register