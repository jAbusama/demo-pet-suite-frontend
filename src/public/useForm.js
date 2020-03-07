import { useState } from  'react'
// import initState from '../services/initState'

export const useForm = (initValues) => {
  
  const [values, setValues] = useState(initValues)

  return [
    values,
    e => {
      setValues({ ...values, [e.target.name]: e.target.value })
    },
    arriveDate => {
      setValues({ ...values, arriveDate })
    },
    departureDate => {
      setValues({ ...values, departureDate })
    },
    reset => {
      setValues({initValues})
    }
  ]
}