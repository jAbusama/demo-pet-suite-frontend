import { apiRequest } from './api'

const actions = {
	login   : async store => {
		const res = await apiRequest('POST', 'auth')
	},

	getUser : async store => {
		const res = await apiRequest('GET', 'users')
		store.setState({ users: res.users, isLoading: false, usersLoaded: true })
	}
}
