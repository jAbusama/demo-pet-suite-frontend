// export const apiUrl = 'http://192.168.1.107:9000/api/'

import axios from 'axios'

export const apiUrl = 'http://localhost:9000/api/'

export const apiRequest = async(method = 'GET', url = '', data = {}, header = {}) => {
	try {
		// const options = {
		// 	method:		method,
		// 	body: 		method === 'GET' ? null : JSON.stringify(data),
		// 	headers : {
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json',
		// 		...header
		// 	}
		// }
		// return fetch(apiUrl + url, options)
		// 	.then(res => res.json())
		// console.log(`API request successfull on ${url}`)
		// return await response.json()
		// axios.post(apiUrl + url, data)
		// 	.then(res => {
		// 		console.log(res.data);
		// 	}).catch(err => {
		// 		console.log(err.response);
		// 	})
		return axios({
			method,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				...header
			},
			url: apiUrl + url,
			data
		}).then(res => {
			return res
		}).catch(err => {
			return err.response
		})
	} catch (e) {
		console.log('API request Failed')
		return false
	}
}
