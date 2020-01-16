import Dashboard from './pages/Dashboard'
import Users from './pages/users/Index'
import Pets from './pages/pets/Index'
import Bookings from './pages/bookings/Index'

export const adminRoutes = [
	{
		key       : 'home',
		path      : '/',
		icon      : 'fa fa-home',
		label     : 'Home',
		exact     : true,
		component : Dashboard
	},

	{
		key       : 'users',
		path      : '/users',
		icon      : 'fas fa-users',
		label     : 'Users',
		component : Users
	},

	{
		key       : 'pets',
		path      : '/pets',
		icon      : 'fas fa-paw',
		label     : 'Pets',
		component : Pets
	},

	{
		key       : 'booking',
		path      : '/bookings',
		icon      : 'fas fa-book-open',
		label     : 'Booking',
		component : Bookings
	},
]

export const employeeRoutes = [
	{
		key       : 'home',
		path      : '/',
		icon      : 'house',
		label     : 'Home',
		exact     : true,
		component : Dashboard
	},

	{
		key       : 'pets',
		path      : '/pets',
		icon      : 'dog',
		label     : 'Pets',
		component : Pets
	},

	{
		key       : 'booking',
		path      : '/bookings',
		icon      : 'book',
		label     : 'Booking',
		component : Bookings
	},
]

export const ownerRoutes = [
	{
		key       : 'home',
		path      : '/',
		icon      : 'house',
		label     : 'Home',
		exact     : true,
		component : Dashboard
	},
	{
		key       : 'pets',
		path      : '/pets',
		icon      : 'dog',
		label     : 'Pets',
		component : Pets
	},

	{
		key       : 'booking',
		path      : '/bookings',
		icon      : 'book',
		label     : 'Booking',
		component : Bookings
	},
]
