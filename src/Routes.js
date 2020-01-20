import Dashboard from './pages/Dashboard'
import Users from './pages/users/Index'
import Pets from './pages/pets/Index'
import Bookings from './pages/bookings/Index'
import storage from 'store'

const adminRoutes = [
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
	}
]

const employeeRoutes = [
	{
		key       : 'home',
		path      : '/',
		icon      : 'fa fa-home',
		label     : 'Home',
		exact     : true,
		component : Dashboard
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

const ownerRoutes = [
	{
		key       : 'home',
		path      : '/',
		icon      : 'fa fa-home',
		label     : 'Home',
		exact     : true,
		component : Dashboard
	},

	{
		key       : 'pets',
		path      : '/pets',
		icon      : 'fas fa-paw',
		label     : 'Pets',
		component : Pets
	}
]


export default function routeLinks() {
	return route() 
}

function route() {
	const user = storage.get('user')
	let route = ownerRoutes
	if(user !== (undefined && '')) {
		if(user.role === 'manager') {
			route = adminRoutes
		}
		else if(user.role === 'employee') {
			route = employeeRoutes
		}
		else {
		 route = ownerRoutes
		}
	}
	return route
}
