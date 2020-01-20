import React, { useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'

function Dashboard() {

	useEffect(() => {
		console.log('render Dashboard')
		return () => console.log('unmount dashboard')
	},[])

	return (
		<React.Fragment>
			<MainLayout>Home</MainLayout>
		</React.Fragment>
	)
}

export default Dashboard
