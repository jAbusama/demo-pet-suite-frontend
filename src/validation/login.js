import Validator from './node_modules/Validator'
import isEmpty from './node_modules/lodash/isEmpty'

export default function login(data) {
	let errors = {}
	if (Validator.null(data.username)) {
		errors.username = 'This field is required'
	}
	if (Validator.null(data.password)) {
		errors.username = 'This field is required'
	}
	return {
		errors,
		isValid : isEmpty()
	}
}
