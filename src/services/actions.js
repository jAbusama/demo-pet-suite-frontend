import { apiRequest } from './api'
import storage from 'store'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

const actions = {
  login   : async (store, user) => {
		const res = await apiRequest('POST', 'login', user)
		storage.set('isLogin', true)
		storage.set('user', res.user)
		storage.set('token', res.token)
		if(res.status){
			if(res.user.role === 'manager'){
				await store.setState({ user: res.user, token: res.token, isLogin: true, loginLoaded: true } )
			}
			else if(res.user.role === 'employee') {
				await store.setState({  user: res.user, token: res.token, isLogin: true, loginLoaded: true })
			}
			else {
				await store.setState({  user: res.user, token: res.token, isLogin: true, loginLoaded: true })
			}
			history.push('/')
		}
	},

	getLogin: (store) => {
		store.setState({user: storage.get('user'), token: storage.get('token'), isLogin: storage.get('isLogin'),
			routeLinks: storage.get('routeLinks'), loginLoaded: true })
	},
	
	logout: async(store, user) => {
		const res = await apiRequest('GET', 'logout')
		if(res.status) {
			storage.clearAll()
			storage.set('isLogin', false)
			await store.setState({ user: [], token: '', isLogin: false })
			history.push('/')
		}
		else {
			console.log('error', res)
		}
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