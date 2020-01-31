import { useState, useReducer } from  'react'
// import initState from '../services/initState'

export const useForm = (initValues) => {
  
  const [values, setValues] = useState(initValues)

  const data = (e) => {
    const id = e.target.id
    if(id === 'manager') {
      setValues({
        ...values, 
        email: 'manager@petsuite.com',
        password: 'pass1234'
      })
    }
    else if (id === 'employee') {
      setValues({
        email: 'employee@petsuite.com',
        password: 'pass1234'
      })
    }
    else {
      setValues ({
        email: 'owner@petsuite.com',
        password: 'pass1234'
      })
    }
  }

  return [
    values,
    e => {
      setValues({ ...values, [e.target.name]: e.target.value })
    },
    data
  ]
}