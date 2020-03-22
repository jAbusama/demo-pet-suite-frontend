import React,{forwardRef, useImperativeHandle} from 'react';

const FormFields = forwardRef((props, ref) => {

  useImperativeHandle(ref, () => ({
    validate(element){
      let error = [true, ''];
  
      if(element.validation.minLen) {
        const valid = element.value.length <= element.validation.minLen;
        const message = `${ !valid ? 'Must be not grether than !' + element.validation.minLen  : ''}`;
        error = !valid ? [valid, message] : error;
      }
  
      if(element.validation.required) {
        const valid = element.value.trim() !== '';
        const message = `${ !valid ? 'This field is required!' : ''}`;
        error = !valid ? [valid, message] : error;
      }
      
      return error;
    }
  }))

  const renderFields = () => {
    const formArray = [];

    for(let elementName in props.formData) {
      formArray.push({
        id: elementName,
        settings: props.formData[elementName]
      })
    }
    return formArray.map((item, i) => {
      return (
        <div key={i} className="form-group">
          {renderTemplates(item)}
        </div>
      )
    })
  }

  const showLabel = (show, label) => {
    return show ?
      <label htmlFor="">{ label }</label>
    :
      null
  }

  const changeHandler = (event, id, blur) => {
    const newState = props.formData;
    newState[id].value = event.target.value;

    let valiData = ref.current.validate(newState[id]);
    newState[id].valid = valiData[0];
    newState[id].validationMessage = valiData[1];
    newState[id].touched = blur;

    props.change(newState);
  }

  const showValidation = (data) => {
    let errorMessage = null;
    if(data.validation && !data.valid) {
      errorMessage = (
        <div className="invalid-feedback">
          {data.validationMessage}
        </div>
      )
    }
    return errorMessage;
  }

  const renderTemplates = (data) => {
    let formTemplate = '';
    let values = data.settings;

    switch(values.element) {
      case('input'):
        formTemplate = (
          <div>
            { showLabel(values.label, values.labelText) }
            <input
              {...values.config}
              className={`form-control ${values.touched ? values.valid ? 'is-valid' : 'is-invalid' : ''}`}
              value={values.value}
              onBlur={
                (event) => changeHandler(event, data.id, true)
              }
              onChange= {
                (event) => changeHandler(event, data.id, false)
              }
            />
            {showValidation(values)}
          </div>
        );
        break;
      case('textarea'):
        formTemplate = (
          <div>
            { showLabel(values.label, values.labelText) }
            <textarea
              {...values.config}
              className="form-control"
              value={values.value}
              onChange= {
                (event) => changeHandler(event, data.id)
              }
            ></textarea>
          </div>
        );
        break;
      case('select'):
        formTemplate = (
          <div>
            { showLabel(values.label, values.labelText) }
            <select
              className="custom-select"
              value={values.value}
              name={values.config.name}
              onChange= {
                (event) => changeHandler(event, data.id)
              }
            >
              <option>Choose Age...</option>
              {values.config.options.map((item, i)=> (
                <option key={i} value={item.val}>{item.text}</option>
              ))}
            </select>
          </div>
        );
        break;
      default:
        formTemplate = null;
    }
    return formTemplate;
  }


  return (
    <div>
      {renderFields()}
    </div>
  )

});

export default FormFields;