import React, { useEffect } from 'react'
import { ToastContainer, toast, Bounce  } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Notification({message, id, isDone}) {

  const err = message
  const notify = () => {
    
    if(id === 'error' ) {
      toast.error(`${err}`, {
        autoClose: 3000,
        toastId: 'error',
        onClose: isDone
      });
    }
    else if(id === 'success') {
      toast.success(`${err}`, {
        autoClose: 3000,
        toastId: 'success',
        onClose: isDone
      });
    }
    else {
      toast.warning(`${err}`, {
        autoClose: 3000,
        toastId: 'warning',
        onClose: isDone
      });
    }
  }

  
    

  return (
    <div>
      {notify()}
      <ToastContainer />
    </div>
  )

  
  

}


export default Notification