import React, { useState } from 'react'
import {useForm} from '../useForm'
import useGlobal from '../../services/useGlobal'

function CreateUser() {

	const initValues = {
		firstname: '',
		lastname: '',
		email: '',
		mobile: '',
		password: '',
		repassword: '',
		role: 'owner'
	}
	const [values, handleChange] = useForm(initValues)
	const [gState, gActions] = useGlobal()

	const submitHandler = (e) => {
		e.preventDefault()
		// console.log('test')
		gActions.createUser(values)
		// form.resetField()
	}

	return (
		<React.Fragment>
		
			<div className="drawer-body">
				<form onSubmit={submitHandler}>
					<div className="form-row">
						<div className="form-group col">
							<label htmlFor="label">Firstname</label>
							<input 
								type="text"
								name='firstname' 
								className="form-control"
								value= { values.firstname }
								onChange= { handleChange }
								/>
							<div className="invalid-feedback">
								{ gState.notificationError.message }
							</div>	
						</div>
						<div className="col form-group">
							<label htmlFor="lastname">Lastname</label>
							<input 
								type="text" 
								name="lastname" 
								className="form-control"
								value={ values.lastname }
								onChange={ handleChange }
								/>
							<div className="invalid-feedback">
								{ gState.validationError.message }
							</div>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="email">Email Address</label>
						<input 
							type="text" 
							name='email'
							className="form-control"
							value={ values.email }
							onChange={ handleChange }
							/>
						<div className="invalid-feedback">
							{ gState.validationError.message }
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="mobile">Mobile Number</label>
						<input 
							type="text" 
							name='mobile'
							className="form-control"
							value={ values.mobile }
							onChange={ handleChange }
							/>
						<div className="invalid-feedback">
							{ gState.validationError.message }
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input 
							type="password" 
							name='password'
							className="form-control"
							value={ values.password }
							onChange={ handleChange }
							/>
						<div className="invalid-feedback">
							{ gState.validationError.message }
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="repassword">Confirm Password</label>
						<input 
							type="password" 
							name='repassword'
							className="form-control"
							value={ values.repassword }
							onChange={ handleChange }
							/>
						<div className="invalid-feedback">
							{ gState.validationError.message }
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
