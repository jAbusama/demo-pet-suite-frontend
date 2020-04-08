import { apiRequest } from './api'
import storage from 'store'
import { Redirect } from 'react-router-dom'

const actions = {
  login : async (store, user, history) => {
		const res = await apiRequest('POST', 'login', user)
		if(typeof(res) === 'undefined') {
			store.setState({
				isLoading: false,
				notificationMessage: {
					success: '',
					error: "Connection Problem",
					warning: ''
				}
			})
			return false
		}
		if(res.data.status){
			storage.set('isLogin', true)
			storage.set('user', res.data.user)
			storage.set('token', res.data.token)
			store.setState({ 
				user: res.data.user,
				token: res.data.token,
				isLogin: true,
				loginLoaded: true,
				notificationMessage: {
					error: '',
					success: res.data.message,
					warning: ''
				} 
			})
			return true;
		}
		store.setState({
			isLoading: false,
			notificationMessage: {
				success: '',
				error: res.data.message,
				warning: ''
			}
		})
		return false
	},

	getLogin: async(store) => {
		await store.setState({user: storage.get('user'), token: storage.get('token'), isLogin: storage.get('isLogin'),
		routeLinks: storage.get('routeLinks'), loginLoaded: true })
	},
	
	logout: async(store, props) => {
		const res = await apiRequest('GET', 'logout')
		if(res.status) {
			storage.clearAll()
			storage.set('isLogin', false)
			store.setState({ user: [], token: '', isLogin: false })
			// props.history.push('/login')

			return true
		}
		else {
			console.log('error', res.data)
			return false
		}
	},

	register: async (store, user, history) => {
		const res = await apiRequest('POST', 'users', user)
		if(res.data.status){
			console.log(res.data);
			store.actions.getUsers();
			store.setState({
				isLoading: false,
				notificationMessage: {
					success: res.data.message, 
					error: '', 
					warning: ''
				}
			})
			return true;
		}
		console.log('error: ', res.data);
		store.setState({
			isLoading: false,
			notificationMessage: {
				success: '',
				error: res.data.message,
				warning: ''
			}
		})
		return false;
	},

	getUsers: async(store) => {
		const res = await apiRequest('GET', 'users')
		if(res.status) {
			if(res.data.users.length !== 0){
				store.setState({ users: res.data.users, isLoading: false, usersLoaded: true })
			}
		}
		else {
			console.log('error: ', res.data)
		}
	},

	createUser: async(store, user) => {
		const res = await apiRequest('POST', 'users', user)
		if(res.data.status){
			console.log(res.data);
			store.actions.getUsers();
			store.setState({
				isLoading: false,
				notificationMessage: {
					success: res.data.message, 
					error: '', 
					warning: ''
				}
			})
			return true;
		}
		console.log('error: ', res.data);
		store.setState({
			isLoading: false,
			notificationMessage: {
				success: '',
				error: res.data.message,
				warning: ''
			}
		})
		return false;
	},

	deleteUser: async(store, id) => {
		const res = await apiRequest('DELETE', 'users', id)
		if(res.status) {
			await store.actions.getUsers()
		}
		console.log(res.data)
	},

	getPets: async(store) => {
		const res = await apiRequest('GET', 'pets')
		if(res.data.status) {
			store.setState({ pets: res.data.pets, isLoading: false, petsLoaded: true })
		}
		else {
			store.setState({
				isLoading: false,
				notificationMessage: { 
					success: '', 
					error: res.data.message, 
					warning: ''}
			})
			console.log('error: ', res.data)
			return false;
			
		}
	},

	createPet: async(store, pet) => {
		const res = await apiRequest('POST', 'pets', pet)
		if(res.data.status){
			console.log(res.data);
			 store.actions.getPets();
			 store.setState({
				 isLoading: false,
				 notificationMessage: { 
					 success: res.data.message,
					 error: '',
					 warning: ''		
				}
			})
			return true;
		}
		console.log('error: ', res.data);
		 store.setState({ 
			isLoading: false,
			notificationMessage: {
				success: '',
				error: res.data.message,
				warning: ''
			}
		})
		return false;
	},

	getBookings: async(store) => {
		const res = await apiRequest('GET', 'bookings')
		if(res.data.status) {
			if(res.data.bookings.length !==0) {
				store.setState({ bookings: res.data.bookings, isLoading: false, bookingsLoaded: true })
			}
		}
		else {
			console.log('error: ', res.data)
		}
	},
	bookPet: async(store, data) => {
		const header = {
			Authorization : `Bearer ${storage.get('token')}`
		}
		const res = await apiRequest('POST', 'bookings', data, header)
		if(res.status){
			await store.actions.getBookings();
			store.setState({
				isLoading: false,
				notificationMessage: { 
					success: res.data.message,
					error: '',
					warning: ''		
			   }
		   })
		   return true;
		}
		 store.setState({ 
			isLoading: false,
			notificationMessage: {
				success: '',
				error: res.data.message,
				warning: ''
			}
		})
		return false;
	},

	getUserPets: async(store, id) => {
		const res = await apiRequest('GET', `user-pets/${id}`)
		if(res.status){
			await store.setState({ userPets: res.data.pets, userPetsLoaded: true })
		}
		else {
			console.log(res)
		}
	},

	getRooms: async(store) => {
		const res = await apiRequest('GET', 'rooms')
		console.log(res);
		if(res.status === 200) {
			await store.setState({ rooms: res.data.rooms, isLoading: false, roomsLoaded: true })
		}
		else {
			await store.setState({ isLoading: false, error: res.data.message })
			console.log('error: ', res.data)
		}
	},

	createRoom: async(store, room) => {
		const res = await apiRequest('POST', 'rooms', room)
		console.log(res);
		if(res.status){
			await store.actions.getRooms();
			store.setState({
				isLoading: false,
				notificationMessage: { 
					success: res.data.message,
					error: '',
					warning: ''		
			   }
		   })
		   return true;
		}
		 store.setState({ 
			isLoading: false,
			notificationMessage: {
				success: '',
				error: res.data.message,
				warning: ''
			}
		})
		return false;
	},

	getBlogs: async(store) => {
		const res = await apiRequest('GET', 'blogs')
		if(res.status) {
			console.log(res);
			await store.setState({ blogs: res.data.blogs, isLoading: false, blogsLoaded: true })
		}
		else {
			await store.setState({ isLoading: false, error: res.data.message })
			console.log('error: ', res)
		}
	},

	createBlog: async(store, blog) => {
		const res = await apiRequest('POST', 'blogs', blog)
		if(res.status){
			await store.actions.getBlogs();
			store.setState({
				isLoading: false,
				notificationMessage: { 
					success: res.data.message,
					error: '',
					warning: ''		
			   }
		   })
		   return true;
		}
		 store.setState({ 
			isLoading: false,
			notificationMessage: {
				success: '',
				error: res.data.message,
				warning: ''
			}
		})
		return false;
	},

	toggleSidebar: store => {
		store.setState({isToggle: !store.state.isToggle})
	},

  getUser : async store => {
    const res = await apiRequest('GET', 'users')
    store.setState({ users: res.data.users, isLoading: false, usersLoaded: true })
  }
}

export default actions