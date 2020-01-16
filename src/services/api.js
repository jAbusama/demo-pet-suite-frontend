export const apiUrl = 'http://127.0.0.1:3333/api/'

export const apiRequest = async (method = 'GET', url = '', data = {}, headers = {}) => {
	try {
		const options = {
			method  : method,
			body    : method == 'GET' ? null : JSON.stringify(data),
			headers : {
				Accept         : 'application/json',
				'Content-Type' : 'appication/json'
			}
		}
		let response = await fetch(apiUrl + url + options)
		console.log(`API request successfull on ${url}`)
		return await response.json()
	} catch (e) {
		console.log('API request Failed')
		return false
	}
}
