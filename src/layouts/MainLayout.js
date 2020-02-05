import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import useGlobal from '../services/useGlobal'

function MainLayout({ props, children }) {

	const initState = {
		showCreate: false
	}

	const [ gState, gActions ] = useGlobal()
	const [state, setState] = useState(initState)

	console.log(gState.isLogin)

	const isToggle = gState.isToggle
	
	useEffect(() => {
		return () => console.log('unmount')
	},[])

	return (
		<div className="container-fluid">
			<div className='row main-content' id='admin'>
				<div className={`col-2 ${isToggle && 'active' }`} id='sidebar-wrapper'>
					<Sidebar />
				</div>
				<div className="col" id='content-wrapper'>
					<Nav props={props} />
					<div>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default MainLayout
