import React, {useState, forwardRef, useImperativeHandle} from 'react';
import initState from '../../services/initState';

const InputFields = forwardRef(({inputData, id, change}, ref) => {

  useImperativeHandle(ref, () => ({
    
    validate(element){
      let error = [true, ''];
      const rules = element.rules
      if(rules) {
         rules.map((rule) => {
          let valid = true;
          let message = '';
          
          if(rule.required) {
            valid = element.value.trim() !== '';
            message = `${ !valid ? rule.message : ''}`;
          }
          if(rule.repassword) {
            valid = element.value;
            message = `${ !valid ? rule.message : ''}`;
          }
          if(rule.email) {
            valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(element.value);
            message = `${ !valid ? rule.message : ''}`;
          }
          if(rule.max) {
            valid = element.value.length <= rule.max;
            message = `${ !valid ? rule.message : ''}`;
          }
          if(rule.min) {
            valid = element.value.length >= rule.min;
            message = `${ !valid ? rule.message : ''}`;
          }
          if(rule.required) {
            valid = element.value.trim() !== '';
            message = `${ !valid ? rule.message : ''}`;
          }
          return error = !valid ? [valid, message] : error;
        })
      }
      return error;
    }
  }));

  const initState = {
    valid: true,
    errMessage: ''
  }

  const [state, setState] = useState(initState)

  const onChangeHandler = (event, blur) => {
    const newInput = inputData;
    newInput.value = event.target.value;
    let resVal = ref.current.validate(newInput);
    newInput.valid = resVal[0];
    newInput.touched = blur;
    setState({...state, errMessage: resVal[1], valid: resVal[0]});
    change(newInput, id);
  }

  const showValidation = (data) => {
    let errorMessage = null;
    if(data.rules && !data.valid) {
      errorMessage = (
        <div className="invalid-feedback">
          {state.errMessage.trim() !== '' ? state.errMessage : data.rules[0].message}
        </div>
      )
    }
    return errorMessage;
  }

  const renderTemplate = () => {
    let inputTemplate = null;

    switch(inputData.element) {
      case('input'):
        inputTemplate = (
          <input 
            {...inputData.config}
            value= {inputData.value}
            onBlur= {
              event => onChangeHandler(event, true)
            }
            onChange= {
              event => onChangeHandler(event, false)
            }
            className={`form-control ${inputData.touched ? inputData.valid ? 'is-valid' : 'is-invalid' : ''}`}
          />
        )
        break;
      case('select'):
        inputTemplate = (
          <div className="input-group">
          <select
            className= "custom-select form-control"
            name= {inputData.config.name}
            onChange= {
              event => onChangeHandler(event, false)
            }
          >
            <option>Select Role...</option>
            {inputData.config.options.map((role, i) => (
              <option key={i} value={role.val}>{role.text}</option>
            ))}
          </select>
          </div>
        )
        break;
      default:
        inputTemplate = null;
    }
    return inputTemplate
  }

  return (
    <div className={`form-group ${inputData.formCol ? 'col' : ''}`}>
      <label className={`${inputData.label ? '' : 'd-none'}`} htmlFor="">{inputData.labelText}</label>
      {renderTemplate()}
      {showValidation(inputData)}
    </div>
  )
})

export default InputFields;