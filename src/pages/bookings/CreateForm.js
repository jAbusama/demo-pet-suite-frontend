import React, { useState, useEffect, useRef } from 'react'
import Notification from '../../components/Notification'
import InputFields from '../../wigets/Forms/InputFields'
import useGlobal from '../../services/useGlobal'
function CreateUser() {

	const inputData ={
		pet: {
			element: 'select',
			value: '',
			label: true,
			labelText: 'Pet Name:',
			config: {
				name: 'role',
				label: 'Choose Pets...',
			},
			rules: [
				{required: true, message: 'Pet Name is required!'},
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
			},
			valid: true,
			touched: false,
		},
		checkIn: {
			element: 'datepicker',
			value: new Date(),
			label: true,
			labelText: 'Checkin:',
			formCol: true,
			config: {
				name: 'checkIn',
				type: 'text',
			},
			// rules: [
			// 	{required: true, message: 'Checkic is required'},
			// ],
			valid: true,
			touched: false,
		},
		checkOut: {
			element: 'datepicker',
			value: new Date(),
			label: true,
			labelText: 'Checkout:',
			formCol: true,
			config: {
				name: 'checkOut',
				type: 'text',
			},
			// rules: [
			// 	{required: true, message: 'Checkout is required'},
			// ],
			valid: true,
			touched: false,
		},
		note: {
			element: 'textarea',
			value: '',
			label: true,
			labelText: 'Note:',
			config: {
				name: 'note',
			},
			valid: true,
			touched: false,
		}
	}
	
	const inputRef = useRef();
	const [notf, setNotf] = useState(false);
	const [gStates, gActions] = useGlobal();
	const [state, setState] = useState(inputData);

	

	useEffect(() => {
		if(!gStates.usersLoaded){
			gActions.getUsers()
		}
		if(!gStates.petsLoaded){
			gActions.getPets()
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

	const petOptions = () => {
		const pets = gStates.pets.filter(pet => {
			return pet.owner != null ? pet.owner._id === state.owner.value : null; 
		})
		const newPets = pets.map(pet => {
				return { val: pet._id, text: `${pet.name}` }
			}
		)
		return newPets;
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
			const res = await gActions.bookPet(dataToSubmit);
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
							inputData= {state.owner}
							id= {'owner'}
							change= {(element,id) => updateInput(element,id)}
							ref={inputRef}
							options= {optionsList}
						/>
						<hr/>
						<InputFields 
							inputData= {state.pet}
							id= {'pet'}
							change= {(element,id) => updateInput(element,id)}
							ref={inputRef}
							options= {petOptions}
						/>
						
					<div className="form-row">	
						<InputFields 
							inputData= {state.checkIn}
							id= {'arriveDate'}
							change= {(element,id) => updateInput(element,id)}
							ref={inputRef}
						/>					
						<InputFields 
							inputData= {state.checkOut}
							id= {'departureDate'}
							change= {(element,id) => updateInput(element,id)}
							ref= {inputRef}
						/>
					</div>
						<InputFields 
							inputData= {state.note}
							id= {'note'}
							change= {(element,id) => updateInput(element,id)}
							ref= {inputRef}
						/>

					<div className="form-group">
						<button className='btn btn-primary btn-sm' type='submit' >Book Now</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	)
}

export default CreateUser
