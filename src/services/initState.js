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
	routeLinks:						[],
	loginLoaded:					false,
	isToggle: 						false,
	validationError:			[],
	notificationsLoaded:	false,
	notificationError: 		'',
	notificationSuccess: 	''
	
}
// storage.get('isLogin'),
export default initState
