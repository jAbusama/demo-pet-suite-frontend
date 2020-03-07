import React from 'react'
import PropTypes from 'prop-types';
const TextFieldGroup = ({ field, value, label, error, type='text', onChange, addClass}) => {
  return(
    <div className={`form-group ${addClass}`}>
      <label htmlFor="" className="control-label">{label}</label>
      <input
        type= {type}
        value= {value}
        name= {field}
        onChange= {onChange}
        className="form-control"
      />
      { error && <span className="help-block">{error}</span>}
    </div>
  )
}

TextFieldGroup.propTypes = {
  field:    PropTypes.string.isRequired,
  value:    PropTypes.string.isRequired,
  label:    PropTypes.string.isRequired,
  error:    PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type:     PropTypes.string,
  addClass: PropTypes.string
}

export default TextFieldGroup
