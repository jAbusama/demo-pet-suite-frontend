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

	const isToggle = gState.isToggle
	useEffect(() => {
		console.log(isToggle)
		return () => console.log('unmount')
	},[])

	return (
		<React.Fragment>
			<div className='row'>
				<div className={`col-2  ${isToggle && 'active' }`} id='sidebar-wrapper'>
					<Sidebar />
				</div>
				<div className="col" id='content-wrapper'>
					<Nav props={props} />
					<div>{children}</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default MainLayout
