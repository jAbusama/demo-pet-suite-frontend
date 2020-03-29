import React, { useState, useRef } from 'react'
import Notification from '../../components/Notification'
import InputFields from '../../wigets/Forms/InputFields'
import useGlobal from '../../services/useGlobal'
function CreateUser() {

	const inputData ={
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
				label: 'Select Role...'
			},
			valid: true,
			touched: false,
		}
	}

	const optionsList = () => {
		const list = [
			{val: 'owner', text: 'Owner'},
			{val: 'employee', text: 'Employee'},
			{val: 'manager', text: 'Manager'},
		]
		return list;
	}
	
	const inputRef = useRef();
	const [notf, setNotf] = useState(false);
	const [gStates, gActions] = useGlobal();
	const [state, setState] = useState(inputData);

	const updateInput = (element, id) => {
		setState({...state, [id]: element})
	}

	const formSubmit = async(event) => {
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
			updateInput(newInput, key);
			formIsValid =	newInput.valid && formIsValid;
		}

		if(formIsValid) {
			const res = await gActions.createUser(dataToSubmit);
			if(res) {
				setState(inputData);
				setNotf(true);
			}
			else {
				setNotf(true);
			}
		}
	}

	const notificationState = () => {
		let id = 'error';
		let message = '';
		if(gStates.success.trim() !== '') {
			id = 'success'
			message = gStates.success;
		}
		else if(gStates.error.trim() !== '') {
			id= 'error'
			message = gStates.error;
		}
		else {
			id = 'warning'
			message = gStates.warning;
		}
		return [id, message]
	}

	const [notfId, notfMessage] = notificationState()
	const notfStatus = () => {
			setNotf(false);
	}

	return (
		<React.Fragment>
			<div className="drawer-body">
				{notf && <Notification id={notfId} message={notfMessage} isDone={notfStatus} />}
				<form onSubmit={formSubmit}>
					<div className="form-row">
						<InputFields 
							inputData= {state.firstname}
							id= {'firstname'}
							change= {(element,id) => updateInput(element,id)}
							ref={inputRef}
						/>
						<InputFields 
							inputData= {state.lastname}
							id= {'lastname'}
							change= {(element,id) => updateInput(element,id)}
							ref={inputRef}
						/>
					</div>

					<InputFields 
						inputData= {state.email}
						id= {'email'}
						change= {(element,id) => updateInput(element,id)}
						ref={inputRef}
					/>

					<InputFields 
						inputData= {state.mobile}
						id= {'mobile'}
						change= {(element,id) => updateInput(element,id)}
						ref={inputRef}
					/>

					<InputFields 
						inputData= {state.password}
						id= {'password'}
						change= {(element,id) => updateInput(element,id)}
						ref= {inputRef}
					/> 

					<InputFields 
						inputData= {state.role}
						id= {'role'}
						change= {(element,id) => updateInput(element,id)}
						ref= {inputRef}
						options= {optionsList}
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
