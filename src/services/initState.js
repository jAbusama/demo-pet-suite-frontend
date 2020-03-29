const initState = {
	users:								[],
	usersLoaded:					false,
	pets: 								[],
	petsLoaded: 					false,
	bookings: 						[],
	bookingsLoaded: 			false,
	isLogin: 							false,
	token: 								'',
	user: 								'',
	userPets:							[],
	userPetsLoaded:				false,
	rooms:								[],
	roomsLoaded:					false,
	blogs:								[],
	blogsLoaded:					false,
	routeLinks:						[],
	loginLoaded:					false,
	isToggle: 						false,
	validationError:			[],
	error: 								'',
	success: 							'',
	warning: 							''
	
}
// storage.get('isLogin'),
export default initState
