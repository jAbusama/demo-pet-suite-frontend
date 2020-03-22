import React, { useState } from 'react'
import {useForm} from '../useForm'
import useGlobal from '../../services/useGlobal'
// import FormFields from '../../wigets/forms/FormFields2'
function CreateUser() {

	const initValues = {
		firstname: '',
		lastname: '',
		email: '',
		mobile: '',
		password: '',
		repassword: '',
		role: 'owner',
	}

	const errInitState = {
		firstnameError: '',
		lastnameError: '',
		emailError: '',
		mobileError: '',
		passwordError: '',
		repasswordError: '',
		isChange: true
	}

	const [ state, setState ] = useState(errInitState)
	const [values, handleChange, data, resetData] = useForm(initValues)
	const [gState, gActions] = useGlobal()

	const isValid = () => {
		let firstnameError = ''
		let lastnameError = ''
		let emailError = ''
		let mobileError = ''
		let passwordError = ''
		let repasswordError = ''

		if(values.firstname === '') {
			firstnameError = "Firstname is required!"
		}
		if(values.lastname === '') {
			lastnameError = "Lastname is required!"
		}
		if(values.email === '') {
			emailError = "Email is required!"
		}
		if(values.mobile === '') {
			mobileError = "Mobile is required!"
		}
		if(values.password === '') {
			passwordError = "Password is required!"
		}
		if(values.repassword === '') {
			repasswordError = "Confirm Password is required!"
		}
		if(firstnameError || lastnameError || emailError || mobileError || passwordError || repasswordError) {
			setState({...state, firstnameError, lastnameError, emailError, mobileError, passwordError, repasswordError, isChange: true })
			return false
		}
		return true
	}

	const submitHandler = (e) => {
		e.preventDefault()
		if(isValid()) {
			console.log(values)
			setState(errInitState)
			resetData()
			// gActions.createUser(values)
		}
	}

	return (
		<React.Fragment>
			<div className="drawer-body">
				<form onSubmit={submitHandler}>

					{/* <FormFields 
						label="First Name"
						name='firstname'
						value={values.firstname}
						onChange={handleChange}
						rules={
							[
								{required: true, message: "First Name is required!"}
							]
						}
					/> */}

					<div className="form-row">
						<div className="form-group col">
							<label htmlFor="label">Firstname</label>
							<input 
								type="text"
								name='firstname' 
								className={`form-control ${values.firstname !== '' ? 'is-valid' : 'is-invalid'}`}
								value= { values.firstname }
								onChange= { handleChange }
								/>
							<div className="invalid-feedback">
								{ state.firstnameError }
							</div>	
						</div>
						<div className="col form-group">
							<label htmlFor="lastname">Lastname</label>
							<input 
								type="text" 
								name="lastname" 
								className={`form-control ${ state.validated ?  ( values.lastname !== '' ? 'is-valid' : 'is-invalid') : ''}`}
								value={ values.lastname }
								onChange={ handleChange }
								/>
							<div className="invalid-feedback">
								{ state.lastnameError }
							</div>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="email">Email Address</label>
						<input 
							type="text" 
							name='email'
							className={`form-control ${ state.validated ? ( values.email !== '' ? 'is-valid' : 'is-invalid') : ''}`}
							value={ values.email }
							onChange={ handleChange }
							/>
						<div className="invalid-feedback">
							{ state.emailError }
							{/* { gState.validationError.message } */}
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="mobile">Mobile Number</label>
						<input 
							type="text" 
							name='mobile'
							className={`form-control ${ state.validated ? ( values.mobile !== '' ? 'is-valid' : 'is-invalid') : ''}`}
							value={ values.mobile }
							onChange={ handleChange }
							/>
						<div className="invalid-feedback">
							{ state.mobileError }
							{/* { gState.validationError.message } */}
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input 
							type="password" 
							name='password'
							className={`form-control ${ state.validated ? ( values.password !== '' ? 'is-valid' : 'is-invalid') : ''}`}
							value={ values.password }
							onChange={ handleChange }
							/>
						<div className="invalid-feedback">
							{ state.passwordError }
							{/* { gState.validationError.message } */}
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="repassword">Confirm Password</label>
						<input 
							type="password" 
							name='repassword'
							className={`form-control ${ state.validated ? ( values.repassword !== '' ? 'is-valid' : 'is-invalid') : ''}`}
							value={ values.repassword }
							onChange={ handleChange }
							/>
						<div className="invalid-feedback">
							{ state.repasswordError }
							{/* { gState.validationError.message } */}
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="role">Role</label>
						<div className="input-group mb-3">
							<select className='custom-select form-control' name='role' onChange={handleChange} id='roles'>
								<option value="owner">Owner</option>
								<option value="employee">Employee</option>
								<option value="manager">Manager</option>
							</select>
						</div>
					</div>

					<div className="form-group">
						<button className='btn btn-primary btn-sm' type='submit' >Add User</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	)
}

export default CreateUser
