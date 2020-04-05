import React, { useState, useEffect } from 'react'

function AddForm({title ,state, setState, children}) {

  const [ unActive , setUnActive ] = useState(true)

	const hideCreateForm = () => {
    setUnActive(false);
		setTimeout(() => {
      setState({...state, formCreated: false})
      setUnActive(true);
    },200)
	}

  return (
    <div>
      <div id='drawer-wrapper' onClick={hideCreateForm}>
      </div>
      <div className={`drawer ${unActive === false && 'form-unactive' }`}>
        <div className="drawer-header">
          <div className="drawer-title">
            { title }
          </div>
          <button className="btn btn-link drawer-close" onClick={hideCreateForm}>X</button>
        </div>
        { children }
      </div>
      
    </div>
  )
}

export default AddForm