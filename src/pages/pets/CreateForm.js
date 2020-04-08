import React, { useState, useEffect, useRef } from 'react'
import Notification from '../../components/Notification'
import InputFields from '../../wigets/Forms/InputFields'
import useGlobal from '../../services/useGlobal'
function CreateUser() {

	const inputData ={
		name: {
			element: 'input',
			value: '',
			label: true,
			labelText: 'Pet Name:',
			config: {
				name: 'name',
				type: 'text',
			},
			rules: [
				{required: true, message: 'Pet Name is required!'},
			],
			valid: true,
			touched: false,
		},
		breed: {
			element: 'input',
			value: '',
			label: true,
			labelText: 'Breed:',
			config: {
				name: 'breed',
				type: 'text',
			},
			rules: [
				{required: true, message: 'Breed is required!'},
			],
			valid: true,
			touched: false,
		},
		type: {
			element: 'input',
			value: '',
			label: true,
			labelText: 'Pet Type:',
			config: {
				name: 'type',
				type: 'text',
			},
			rules: [
				{required: true, message: 'Email Address is required'},
			],
			valid: true,
			touched: false,
		},
		size: {
			element: 'input',
			value: '',
			label: true,
			labelText: 'Size:',
			config: {
				name: 'mobile',
				type: 'text',
			},
			rules: [
				{required: true, message: 'Pet size is required'},
			],
			valid: true,
			touched: false,
		},
		owner: {
			element: 'select',
			value: '',
			label: true,
			labelText: 'Owner:',
			config: {
				name: 'role',
				label: 'Choose Owner...',
				options: []
			},
			valid: true,
			touched: false,
		}
	}
	
	const inputRef = useRef();
	const [notf, setNotf] = useState(false);
	const [state, setState] = useState(inputData);
	const [gStates, gActions] = useGlobal();

	useEffect(() => {
		if(!gStates.usersLoaded){
			gActions.getUsers()
		}
	})

	const optionsList = () => {
		const owners = gStates.users.filter(onwer => onwer.role === 'owner')
		const newOwners = owners.map(owner => {
				return { val: owner._id, text: `${owner.firstname} ${owner.lastname}` }
			}
		)
		return newOwners;
	}

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
			const res = await gActions.createPet(dataToSubmit);
			if(res) {
				setState(inputData);
				setNotf(true);
			}
			else {
				setNotf(true);
			}
		}
	}

	const notfStatus = () => {
			setNotf(false);
	}

	return (
		<React.Fragment>
			<div className="drawer-body">
				{notf && <Notification state={gStates.notificationMessage} isDone={notfStatus} />}
				<form onSubmit={formSubmit}>
					<InputFields 
						inputData= {state.name}
						id= {'name'}
						change= {(element,id) => updateInput(element,id)}
						ref={inputRef}
					/>
					<InputFields 
						inputData= {state.breed}
						id= {'breed'}
						change= {(element,id) => updateInput(element,id)}
						ref={inputRef}
					/>

					<InputFields 
						inputData= {state.type}
						id= {'type'}
						change= {(element,id) => updateInput(element,id)}
						ref={inputRef}
					/>

					<InputFields 
						inputData= {state.size}
						id= {'size'}
						change= {(element,id) => updateInput(element,id)}
						ref={inputRef}
					/>

					<InputFields 
						inputData= {state.owner}
						id= {'owner'}
						change= {(element,id) => updateInput(element,id)}
						ref={inputRef}
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
