import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
const FormFields = ({ name, value, label, error, id, type='text', onChange, addClass="", rules=[]}) => {

  const initState = {
    isChange: false,
    isValid: false
  }

  const [ state, setState ] = useState(initState);

  const validation = () => {
      if(value !== '') {
        return true
      }
    return false
  }

  const changeValue = () => {
    if(value !== '') {
      setState({...state, isChange: true})
    }
  }

  return(
    <div className={`form-group ${addClass}`}>
      <label htmlFor="">{label}</label>
      <input
        type= {type}
        name= {name}
        id={id}
        value= {value}
        onChange= {onChange}
        className={`form-control ${ state.isChange ? (validation() ? "is-valid": "is-invalid") : '' }`}
      />
        {rules.map(rule => {
          if(rule.required) {
            if(value === '') {
              return (
                <div className="invalid-feedback">
                  {rule.message}
                </div>
              )
            }
          }
        }
        )}
        
      {/* { error && <span className="help-block">{error}</span>} */}
    </div>
  )
}

FormFields.propTypes = {
  name:    PropTypes.string.isRequired,
  value:    PropTypes.string.isRequired,
  label:    PropTypes.string.isRequired,
  error:    PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type:     PropTypes.string,
  id:       PropTypes.string,
  rules:    PropTypes.array,
  addClass: PropTypes.string
}

export default FormFields
