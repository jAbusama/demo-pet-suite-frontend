import React, { useEffect } from 'react'
import useGlobal from '../services/useGlobal'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Notification({message, gActions}) {

  useEffect(() => {
    console.log('test')
  },[])
  const err = message
  const notify = () => {
    toast.error(`${err}`) 
  }
  const test = () => (
    <div>
      {notify()}
      <ToastContainer/>
    </div>
  )

  return (
    <div>
    </div>
  )

  
  

}


export default Notification