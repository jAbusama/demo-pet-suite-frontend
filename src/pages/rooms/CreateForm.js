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
		},
		images: {
			element: 'file',
			value: null,
			previewUrl: [],
			label: true,
			labelText: 'Pictures',
			config: {
				name: 'images',
				type: 'file'
			},
			valid: true,
			touched: false
		},
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

	const inputRef = useRef();
	const [notf, setNotf] = useState(false);
	const [gStates, gActions] = useGlobal();
	const [state, setState] = useState(inputData);
	const [notfId, notfMessage] = notificationState()


	const updateInput = (element, id) => {
		setState({...state, [id]: element})
	}

	const formSubmit = async(event) => {
		event.preventDefault();
		let dataToSubmit = {}
		let formIsValid = true;
		let fd = new FormData();
		for(let key in state) {
			if(key === "images") {
				fd.append(key, state.images.value);
			}
			else {
				fd.append(key, state[key].value);
				// dataToSubmit[key] = state[key].value;
			}
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
			// for(let image in state.images.value.values()) {
			// 	console.log(image);
			// }
			console.log(fd);
			
			const res = await gActions.createRoom(fd);
			if(res) {
				setState(inputData);
				setNotf(true);
			}
			else {
				setNotf(true);
			}
		}
		// let fd = new FormData();
		// fd.append('images', state.images.value);
		// console.log(fd)
		// const res = await gActions.createRoom(fd);

	}

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
						id= {'type'}
						change= {(element,id) => updateInput(element,id)}
						ref={inputRef}
						options={optionsList}
					/>

					<InputFields 
						inputData= {state.total}
						id= {'total'}
						change= {(element,id) => updateInput(element,id)}
						ref={inputRef}
					/>

					<InputFields 
						inputData= {state.images}
						id= {'images'}
						change= {(element,id) => updateInput(element,id)}
						ref={inputRef}
					/>

					<div className="form-group float-none">
						<button className='btn btn-primary btn-sm' type='submit'>Add Rooms</button>
					</div>
					
				</form>
			</div>
		</React.Fragment>
	)
}

export default CreateUser
