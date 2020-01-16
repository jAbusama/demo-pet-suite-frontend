import { apiRequest } from './api'
import storage from 'store'
import { createBrowserHistory } from 'history'
import { adminRoutes, employeeRoutes, ownerRoutes } from '../Routes'
const history = createBrowserHistory()

const actions = {
  login   : async (store, user) => {
		const res = await apiRequest('POST', 'login', user)
		if(res.user.role === 'manager'){
			await store.setState({ user: res.user, token: res.token, isLogin: true, routeLinks: adminRoutes})
		}
		else if(res.user.role === 'employee') {
			await store.setState({ user: res.user, token: res.token, isLogin: true, routeLinks: employeeRoutes})
		}
		else {
			await store.setState({ user: res.user, token: res.token, isLogin: true, routeLinks: ownerRoutes})
		}
		history.push('/')
  },

  getUser : async store => {
    const res = await apiRequest('GET', 'users')
    store.setState({ users: res.users, isLoading: false, usersLoaded: true })
  }
}

export default actions