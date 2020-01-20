import React, { useEffect } from 'react'
import MainLayout from '../../layouts/MainLayout'

function Users() {
	useEffect(() => {
		console.log('render User')
		return () => console.log('unmount user')
	},[])
	return <MainLayout>Users</MainLayout>
}

export default Users
