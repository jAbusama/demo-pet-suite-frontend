import Dashboard from './pages/Dashboard'
import Users from './pages/users/Index'
import Pets from './pages/pets/Index'
import Bookings from './pages/bookings/Index'
import PublicHome from './public/pages/index'
import AboutUs from './public/pages/about-us/index'
import BookNow from './public/pages/book-now/index'
import Rooms from './public/pages/book-now/index'
import Blog from './public/pages/blog/index'
import { login, register} from './pages/auth/index'

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

const publicRoutes = [
	{
		key: 'home',
		path: '/',
		icon: 'fa fa-home',
		exact: true,
		label: 'Home',
		component: PublicHome
	},
	{
		key: 'about-us',
		path: '/about-us',
		icon: 'fa fa-home',
		label: 'About Us',
		component: AboutUs
	},
	{
		key: 'Book Now',
		path: '/book-now',
		icon: 'fa fa-home',
		label: 'Book Now',
		component: BookNow
	},
	{
		key: 'rooms',
		path: '/rooms',
		icon: 'fa fa-home',
		label: 'Rooms',
		component: Rooms
	},
	{
		key: 'blog',
		path: '/blog',
		icon: 'fa fa-home',
		label: 'Blog',
		component: Blog
	},
	{
		key: 'login',
		path: '/login',
		icon: 'fa fa-home',
		label: 'Login',
		component: login
	},
	{
		key: 'register',
		path: '/register',
		icon: 'fa fa-home',
		label: 'Register',
		component: register
	},
]


export default function routeLinks() {
	return route() 
}

function route() {
	const user = storage.get('user')
	let route = publicRoutes
	if(user !== (undefined && '')) {
		if(user.role === 'manager') {
			route = adminRoutes
		}
		else if(user.role === 'employee') {
			route = employeeRoutes
		}
		else {
		 route = publicRoutes
		}
	}
	return route
}
