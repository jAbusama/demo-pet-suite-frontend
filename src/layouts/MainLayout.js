import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import useGlobal from '../services/useGlobal'

function MainLayout({ props, children }) {

	const [ gState ] = useGlobal()
	const isToggle = gState.isToggle
	useEffect(() => {
		console.log(isToggle)
		return () => console.log('unmount')
	},[])
	return (
		<React.Fragment>
			<div className='row'>
				<div className={`col-2 ${isToggle && 'active' }`} id='sidebar'>
					<Sidebar />
				</div>
				<div className="col content">
					<Nav props={props} />
					<div>{children}</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default MainLayout
