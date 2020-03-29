import React, { useState, useEffect } from 'react'
import {useForm} from '../useForm'
import useGlobal from '../../services/useGlobal'

function Users() {

	const initValues = {
		name: '',
		breed: '',
		type: '',
		size: '',
		owner: ''
	}
	const [values, handleChange] = useForm(initValues)
	const [gState, gActions] = useGlobal()

	useEffect(() => {
		console.log('render')
		if(!gState.usersLoaded){
			gActions.getUsers()
		}
	})

	const owners = () => {
		return gState.users.filter(onwer => onwer.role === 'owner')
	}

	return (
		<React.Fragment>
			<div className="drawer-body">
				<form >
					<div className="form-group">
						<label htmlFor="name">Pet Name</label>
						<input 
							type="text"
							name='name' 
							className="form-control"
							value= { values.name }
							onChange= { handleChange }
							/>	
					</div>

					<div className="form-group">
						<label htmlFor="breed">Pet Breed</label>
						<input 
							type="text" 
							name='breed'
							className="form-control"
							value={ values.breed }
							onChange={ handleChange }
							/>
						<div className="invalid-feedback">
							{ gState.validationError.message }
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="type">Pet Type</label>
						<input 
							type="text" 
							name='type'
							className="form-control"
							value={ values.type }
							onChange={ handleChange }
							/>
						<div className="invalid-feedback">
							{ gState.validationError.message }
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="size">Pet Size</label>
						<input 
							type="text" 
							name='size'
							className="form-control"
							value={ values.size }
							onChange={ handleChange }
							/>
						<div className="invalid-feedback">
							{ gState.validationError.message }
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="owner">Pet Owner</label>
						<div className="input-group mb-3">
							<select className='custom-select form-control' name='owner' id='owner'>
								<option>Select Owner...</option>
								{owners().map(owner => (
								<option key={owner._id} value={owner._id}>{ owner.firstname } { owner.lastname }</option>
								))}
							</select>
						</div>
					</div>

					<div className="form-group">
						<button className='btn btn-primary btn-sm '>Add Pet</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	)
}

export default Users
