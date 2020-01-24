import { useState } from  'react'

export const useForm = initValues => {
  
  const [values, setValues] = useState(initValues)

  const data = (user) => {
    const userId = user.target.id
    if(userId === 'manager') {
      setValues({email: 'manager@petsuite.com', password: 'pass1234'})
    }
    else if(userId === 'employee') {
      setValues({email: 'employee@petsuite.com', password: 'pass1234'})
    }
    else {
      setValues({email: 'owner@petsuite.com', password: 'pass1234'})
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