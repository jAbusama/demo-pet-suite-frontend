import { apiRequest } from './api'
import storage from 'store'
import { createBrowserHistory } from 'history'
import { adminRoutes, employeeRoutes, ownerRoutes } from '../Routes'
const history = createBrowserHistory()

const actions = {
  login   : async (store, user) => {
		const res = await apiRequest('POST', 'login', user)
		storage.set('isLogin', true)
		storage.set('user', res.user)
		if(res.user.role === 'manager'){
			storage.set('routeLinks', adminRoutes )
			await store.setState({ user: res.user, token: res.token, isLogin: storage.get('isLogin'), routeLinks: adminRoutes})
		}
		else if(res.user.role === 'employee') {
			storage.set('routeLinks', employeeRoutes )
			await store.setState({ user: res.user, token: res.token})
		}
		else {
			storage.set('routeLinks', ownerRoutes )
			await store.setState({ user: res.user, token: res.token})
		}
		history.push('/')
	},
	
	logout: async(store, user) => {
		const res = await apiRequest('GET', 'logout')
		if(res.status) {
			storage.clearAll()
			await store.setState({ user: [], token: '', isLogin: false })
			history.push('/')
		}
		else {
			console.log('error', res)
		}
	},

  getUser : async store => {
    const res = await apiRequest('GET', 'users')
    store.setState({ users: res.users, isLoading: false, usersLoaded: true })
  }
}

export default actions