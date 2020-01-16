import React from 'react'
import Nav from '../components/Nav'

function MainLayout({ children }) {
	return (
		<React.Fragment>
			<Nav />
			<div>{children}</div>
		</React.Fragment>
	)
}

export default MainLayout
