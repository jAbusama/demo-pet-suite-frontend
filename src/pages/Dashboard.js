import React, { useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'

function Dashboard({history}) {
	useEffect(() => {
		console.log('dashboard rendered')
		return () => {
			console.log('dashboard unmouted')
		}
	})
	return (
		<MainLayout history={history}>Home</MainLayout>
	)
}

export default Dashboard
