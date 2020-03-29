import React, { useState, useRef } from 'react'
import Notification from '../../components/Notification'
import InputFields from '../../wigets/Forms/InputFields'
import useGlobal from '../../services/useGlobal'
function CreateUser() {

	const inputData ={
		type: {
			element: 'select',
			value: '',
			label: true,
			labelText: 'Room Type:',
			config: {
				name: 'type',
				label: 'Select Type...',
				options: []
			},
			rules: [
				{required: true, message: 'Room type is required!'},
			],
			valid: true,
			touched: false,
		},
		images: {
			element: 'input',
			value: '',
			label: true,
			labelText: 'Images:',
			config: {
				name: 'images',
				type: 'text',
			},
			// rules: [
			// 	{required: true, message: 'Images is required!'},
			// ],
			valid: true,
			touched: false,
		},
		total: {
			element: 'input',
			value: '',
			label: true,
			labelText: 'Total Rooms:',
			config: {
				name: 'total',
				type: 'text',
			},
			rules: [
				{required: true, message: 'Total rooms is required'},
			],
			valid: true,
			touched: false,
		}
		
	}

	const optionsList = () => {
		const list = [
			{val: 'Class A', text: 'Class A'},
			{val: 'Class B', text: 'Class B'},
			{val: 'Class C', text: 'Class C'},
			{val: 'Class D', text: 'Class D'},
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
			const res = await gActions.createRoom(dataToSubmit);
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
					<InputFields 
						inputData= {state.type}
						id= {'firstname'}
						change= {(element,id) => updateInput(element,id)}
						ref={inputRef}
						options={optionsList}
					/>
					<InputFields 
						inputData= {state.images}
						id= {'images'}
						change= {(element,id) => updateInput(element,id)}
						ref={inputRef}
					/>

					<InputFields 
						inputData= {state.total}
						id= {'total'}
						change= {(element,id) => updateInput(element,id)}
						ref={inputRef}
					/>

					<div className="form-group">
						<button className='btn btn-primary btn-sm' type='submit' >Add Rooms</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	)
}

export default CreateUser
