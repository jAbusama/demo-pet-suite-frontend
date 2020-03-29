// export const apiUrl = 'http://192.168.1.107:3333/api/'
export const apiUrl = 'http://localhost:3333/api/'

export const apiRequest = async(method = 'GET', url = '', data = {}, header = {}) => {
	try {
		const options = {
			method:		method,
			body: 		method === 'GET' ? null : JSON.stringify(data),
			headers : {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				...header
			}
		}
		return fetch(apiUrl + url, options)
			.then(res => res.json())
		// console.log(`API request successfull on ${url}`)
		// return await response.json()
	} catch (e) {
		console.log('API request Failed')
		return false
	}
}
