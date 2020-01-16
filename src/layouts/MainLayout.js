import React from 'react'
// import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
// import Sidebar from '../components/test'


function MainLayout({ children }) {


	return (
		<React.Fragment>
			<Sidebar />
			<div>{children}</div>
		</React.Fragment>
	)
}

export default MainLayout
