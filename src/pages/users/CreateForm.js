import React, { useState, useRef } from 'react'
import InputFields from '../../wigets/Forms/InputFields'
// import {useForm} from '../useForm'
// import useGlobal from '../../services/useGlobal'
// import FormFields from '../../wigets/forms/FormFields'
function CreateUser() {

	const initState ={
		firstname: {
			element: 'input',
			value: '',
			label: true,
			labelText: 'First Name:',
			formCol: true,
			config: {
				name: 'fistname',
				type: 'text',
			},
			rules: [
				{required: true, message: 'First Name is required!'},
				{max: 5, message: 'Must be not greater 5 character'}
			],
			valid: true,
			touched: false,
		},
		lastname: {
			element: 'input',
			value: '',
			label: true,
			labelText: 'Last Name:',
			formCol: true,
			config: {
				name: 'lastname',
				type: 'text',
			},
			rules: [
				{required: true, message: 'Last Name is required!'},
				{min: 5, message: 'Must be atleast 5 character'}
			],
			valid: true,
			touched: false,
		},
		email: {
			element: 'input',
			value: '',
			label: true,
			labelText: 'Email Address:',
			config: {
				name: 'email',
				type: 'email',
			},
			rules: [
				{required: true, message: 'Email Address is required'},
				{email: true, message: 'Email Address must be valid'}
				// {max: 5, message: 'Must be not greater 5 character'}
			],
			valid: true,
			touched: false,
		},
		mobile: {
			element: 'input',
			value: '',
			label: true,
			labelText: 'Mobile Number:',
			config: {
				name: 'mobile',
				type: 'text',
			},
			rules: [
				{required: true, message: 'Mobile Number is required'},
				// {max: 5, message: 'Must be not greater 5 character'}
			],
			valid: true,
			touched: false,
		},
		password: {
			element: 'input',
			value: '',
			label: true,
			labelText: 'Password:',
			config: {
				name: 'password',
				type: 'password',
			},
			rules: [
				{required: true, message: 'Password is required'},
				// {max: 5, message: 'Must be not greater 5 character'}
			],
			valid: true,
			touched: false,
		},
		repassword: {
			element: 'input',
			value: '',
			label: true,
			labelText: 'Confirm Password:',
			config: {
				name: 'repassword',
				type: 'text',
			},
			rules: [
				{required: true, message: 'Comfirm Password is required'},
				// {max: 5, message: 'Must be not greater 5 character'}
			],
			valid: true,
			touched: false,
		},
		role: {
			element: 'select',
			value: '',
			label: true,
			labelText: 'Role:',
			config: {
				name: 'role',
				options: [
					{val: 'owner', text: 'Owner'},
					{val: 'employee', text: 'Employee'},
					{val: 'manage', text: 'Manager'},
				]
			},
			valid: true,
			touched: false,
		},
	}

	const inputRef = useRef();

	const [state, setState] = useState(initState);

	const updateInput = (element, id) => {
		setState({...state, [id]: element})
	}

	const formSubmit = (event) => {
		event.preventDefault();
		let dataToSubmit = {}
		let formIsValid = true;
		for(let key in state) {
			dataToSubmit[key] = state[key].value;
		}

		for(let key in state) {
			const newInput = state[key];
			let resValidation = inputRef.current.validate(newInput);
			newInput.valid = resValidation[0];
			newInput.touched = true;
			formIsValid =	newInput.valid && formIsValid;
			updateInput(newInput, key);
		}
		
		if(formIsValid) {
			console.log(dataToSubmit);
		}

	}

	return (
		<React.Fragment>
			<div className="drawer-body">
				<form onSubmit={formSubmit}>
					<div className="form-row">
						<InputFields 
							inputData= {state.firstname}
							id= {'firstname'}
							change= {element => updateInput(element)}
							ref={inputRef}
						/>
						<InputFields 
							inputData= {state.lastname}
							id= {'lastname'}
							change= {element => updateInput(element)}
							ref={inputRef}
						/>
					</div>

					<InputFields 
						inputData= {state.email}
						id= {'email'}
						change= {element => updateInput(element)}
						ref={inputRef}
					/>

					<InputFields 
						inputData= {state.mobile}
						id= {'mobile'}
						change= {element => updateInput(element)}
						ref={inputRef}
					/>

					<InputFields 
						inputData= {state.password}
						id= {'password'}
						change= {element => updateInput(element)}
						ref={inputRef}
					/>

					<InputFields 
						inputData= {state.repassword}
						id= {'repassword'}
						change= {element => updateInput(element)}
						ref={inputRef}
					/>

					<InputFields 
						inputData= {state.role}
						id= {'role'}
						change= {element => updateInput(element)}
						ref={inputRef}
					/>

					<div className="form-group">
						<button className='btn btn-primary btn-sm' type='submit' >Add User</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	)
}

export default CreateUser
