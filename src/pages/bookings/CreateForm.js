import React from 'react'
import {useForm} from '../useForm'
import useGlobal from '../../services/useGlobal'

function CreateUser({state, setState}) {

const initValues = {
	name: '',
	breed: '',
	type: '',
	size: '',
	owner: ''
}
const [values, handleChange] = useForm(initValues)
const [gState, gActions] = useGlobal()

	return (
		<React.Fragment>
		<div id='drawer-wrapper' onClick={() => setState({...state, showCreate: false})}>
		</div>
		<div className="drawer">
			<div className="drawer-header">
				<div className="drawer-title">
					Add Pet
				</div>
				<button className="btn btn-link drawer-close" onClick={() => setState({...state, showCreate: false})}>X</button>
			</div>
			<div className="drawer-body">
				<form >
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
							<div className="input-group-prepend">
								<label className='input-group-text' htmlFor="roles">Options</label>
							</div>
							<select className='custom-select form-control' name='role' id='roles'>
								<option value="owner">Owner</option>
								<option value="employee">Employee</option>
								<option value="manager">Manager</option>
							</select>
						</div>
					</div>

					<div className="form-group">
						<button className='btn btn-primary btn-sm '>Add User</button>
					</div>
				</form>
			</div>
		</div>
		</React.Fragment>
	)
}

export default CreateUser
