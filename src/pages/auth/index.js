import React from 'react'
import Login from './Login'
import bg from '../../images/bg.jpg'

function Auth() {
  return (
    <div>
      <div className='row'>
        <div className='col-8'>
          <img src={bg} alt='dogs-in-the-basket' className='bg-auth' />
        </div>
        <div className='col-4'>
          <Login />
        </div>
      </div>
    </div>
  )
}

export default Auth
