import React, { useEffect } from 'react'
import { ToastContainer, toast, Bounce  } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Notification({ state, isDone }) {

  const notificationState = () => {
		let id = 'error';
		let message = '';
		if(state.success.trim() !== '') {
			id = 'success';
			message = state.success;
		}
		else if(state.error.trim() !== '') {
      id= 'error';
			message = state.error;
		}
		else {
			id = 'warning';
			message = state.warning;
    }
		return [id, message]
	}

	const [notfId, notfMessage] = notificationState()

  const notify = () => {
    
    if(notfId === 'error' ) {
      toast.error(`${notfMessage}`, {
        autoClose: 3000,
        toastId: 'error',
        onClose: isDone
      });
    }
    else if(notfId === 'success') {
      toast.success(`${notfMessage}`, {
        autoClose: 3000,
        toastId: 'success',
        onClose: isDone
      });
    }
    else {
      toast.warning(`${notfMessage}`, {
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