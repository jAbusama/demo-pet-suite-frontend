import React, { useState, useRef } from 'react'
import FormFields from '../../wigets/Forms/FormFields'

function CreateUser() {

	const initValues = {
		name: {
			element: 'input',
			value: '',
			label: true,
			labelText: 'Name',
			config: {
				name: 'name_input',
				type: 'text',
				placeholder: 'Enter Your Name'
			},
			validation: {
				required: true,
				minLen: 5
			},
			valid: false,
			touched: false,
			validationMessage: ''
		},
		lastname: {
			element: 'input',
			value: '',
			label: true,
			labelText: 'Last Name',
			config: {
				name: 'lastname_input',
				type: 'text',
				placeholder: 'Enter Your Last Name'
			},
			validation: {
				required: true,
			},
			valid: false,
			touched: false,
			validationMessage: ''
		},
		message: {
			element: 'textarea',
			value: '',
			label: true,
			labelText: 'Message',
			config: {
				name: 'message_input',
				rows: 3,
				// cols:36
			},
			validation: {
				required: false,
			},
			valid: true,
		},
		age: {
			element: 'select',
			value: '',
			label: true,
			labelText: 'Age',
			config: {
				name: 'age_input',
				options: [
					{val: '1', text: '10-20'},
					{val: '2', text: '21-30'},
					{val: '3', text: '30+'},
				]
			},
			validation: {
				required: false,
			},
			valid: true,
		}
	}

	const [formData, setFormData] = useState(initValues)

	const updateForm = (newFormData) => {
		setFormData({...formData, ...newFormData})
	}

	const submitForm = (event) => {
		event.preventDefault();
		let dataToSubmit = {};

		for(let key in formData) {
			dataToSubmit[key] = formData[key].value;
			console.log(key);
		}
		let formIsValid =  true;

		for(let key in formData) {
			const newState = formData;
			formIsValid = formData[key].valid && formIsValid;
			let validForm = childRef.current.validate(formData[key]);
			newState[key].valid = validForm[0];
    	newState[key].validationMessage = validForm[1];
			newState[key].touched = true
			
			updateForm(newState);
		}
		
		if(formIsValid){
			console.log(dataToSubmit);
		}
	}

	const childRef = useRef();
	
	return (
		<React.Fragment>
			<div className="drawer-body">
				<form onSubmit={submitForm}>

					<FormFields 
						formData = { formData }
						change = {(newFormData) => updateForm(newFormData)}
						onBlur = {(newFormData) => updateForm(newFormData)}
						ref={childRef}
					/>

					<div className="form-group">
						<button  type="submit" className='btn btn-primary btn-sm '>Add Blog</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	)
}

export default CreateUser
