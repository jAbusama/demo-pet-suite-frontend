import { apiRequest } from './api'
import storage from 'store'

const actions = {
  login   : async (store, user, props) => {
		const res = await apiRequest('POST', 'login', user)
		if(res.status){
			storage.set('isLogin', true)
			storage.set('user', res.user)
			storage.set('token', res.token)
			if(res.user.role === 'manager'){
				await store.setState({ user: res.user, token: res.token, isLogin: true, loginLoaded: true } )
			}
			else if(res.user.role === 'employee') {
				await store.setState({  user: res.user, token: res.token, isLogin: true, loginLoaded: true })
			}
			else {
				await store.setState({  user: res.user, token: res.token, isLogin: true, loginLoaded: true })
			}
			props.history.push('/')
		}
		else {
			//console.log(res)
			await store.setState({ notificationError: res.message, notificationsLoaded: false})
		}
	},

	getLogin: (store) => {
		store.setState({user: storage.get('user'), token: storage.get('token'), isLogin: storage.get('isLogin'),
			routeLinks: storage.get('routeLinks'), loginLoaded: true })
	},
	
	logout: async(store, props) => {
		const res = await apiRequest('GET', 'logout')
		if(res.status) {
			storage.clearAll()
			storage.set('isLogin', false)
			await store.setState({ user: [], token: '', isLogin: false })
			props.history.push('/')
		}
		else {
			console.log('error', res)
		}
	},

	register: async (store, user, props ) => {
		const res = await apiRequest('POST', 'register', user)
		if(res.status) {
			props.history.push('/')
		}
		console.log(res)
		// await store.setState({ validationError: res.err })
	},

	getUsers: async(store) => {
		const res = await apiRequest('GET', 'users')
		store.setState({ users: res.users, isLoading: false, usersLoaded: true })
	},

	getPets: async(store) => {
		const res = await apiRequest('GET', 'pets')
		store.setState({ pets: res.pets, isLoading: false, petsLoaded: true })
	},

	getBookings: async(store) => {
		const res = await apiRequest('GET', 'bookings')
		store.setState({ bookings: res.bookings, isLoading: false, bookingsLoaded: true })
	},


	notificationDefault: store => {
		store.setState({ notificationError: '', notificationsLoaded: true })
	},

	toggleSidebar: store => {
		store.setState({isToggle: !store.state.isToggle})
	},

  getUser : async store => {
    const res = await apiRequest('GET', 'users')
    store.setState({ users: res.users, isLoading: false, usersLoaded: true })
  }
}

export default actions