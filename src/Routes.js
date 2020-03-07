import React from 'react'
import Dashboard from './pages/Dashboard'
import Users from './pages/users/Index'
import Pets from './pages/pets/Index'
import Bookings from './pages/bookings/Index'
import PublicHome from './public/pages/index'
import AboutUs from './public/pages/about-us/About-us'
import BookNow from './public/pages/book-now/Book-now'
import Rooms from './public/pages/rooms/Rooms'
import Blog from './public/pages/blog/Blog'
import ContactUs  from './public/pages/contact-us/Contact-us'
import { Login, Register} from './pages/auth/index'
// import Login from './pages/auth/Login'
// import Register from './pages/auth/Register'


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
	},
	{
		key:	'rooms',
		path: '/rooms',
		icon: 'fas fa-door-open',
		label: 	'Rooms',
		component: Bookings
	},
	{
		key:	'blogs',
		path: '/blogs',
		icon: 'fab fa-blogger',
		label: 	'Blogs',
		component: Bookings
	},
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
		key: 'home',
		path: '/',
		exact: true,
		label: 'Home',
		component: PublicHome
	},
	{
		key: 'about-us',
		path: '/about-us',
		label: 'About Us',
		component: AboutUs
	},
	{
		key: 'book-now',
		path: '/book-now',
		label: 'Book Now',
		component: BookNow
	},
	{
		key: 'rooms',
		path: '/rooms',
		label: 'Rooms',
		component: Rooms
	},
	{
		key: 'blog',
		path: '/blog',
		label: 'Blog',
		component: Blog
	},
	{
		key: 'contact-us',
		path: '/contact-us',
		class: 	'mr-5',
		label: 'Contact Us',
		component: ContactUs
	},
	{
		key: 'user-profile',
		dropdown: true,
		path: '#'
	},
]

const publicRoutes = [
	{
		key: 'home',
		path: '/',
		exact: true,
		label: 'Home',
		component: PublicHome
	},
	{
		key: 'about-us',
		path: '/about-us',
		label: 'About Us',
		component: AboutUs
	},
	{
		key: 'book-now',
		path: '/book-now',
		label: 'Book Now',
		component: BookNow
	},
	{
		key: 'rooms',
		path: '/rooms',
		label: 'Rooms',
		component: Rooms
	},
	{
		key: 'blog',
		path: '/blog',
		label: 'Blog',
		component: Blog
	},
	{
		key: 'contact-us',
		path: '/contact-us',
		class: 	'mr-5',
		label: 'Contact Us',
		component: ContactUs
	},
	{
		key: 'login',
		path: '/login',
		label: 'Login',
		component: Login
	},
	{
		key: 'register',
		path: '/register',
		label: 'Register',
		component: Register
	},
]


const routeLinks = () => {
	// const [gState, gAction] = useGlobal()
	const user = storage.get('user')

	return route(user) 
}

const  route =(user)=> {
	let route = publicRoutes
	if(user !== (undefined && '')) {
		if(user.role === 'manager') {
			route = adminRoutes
		}
		else if(user.role === 'employee') {
			route = employeeRoutes
		}
		else if(user.role === 'owner') {
			route = ownerRoutes
		}
		else {
		 route = publicRoutes
		}
	}
	return route
}


export default routeLinks