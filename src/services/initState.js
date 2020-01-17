import storage from 'store'

const initState = {
	users:						[],
	usersLoaded:			false,
	pets: 						[],
	petsLoaded: 			false,
	bookings: 				[],
	bookingsLoaded: 	false,
	isLogin: 					false,
	token: 						'',
	user: 						'',
	routeLinks:				''
}

export default initState
