import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function CardBar() {

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  // const ExampleCustomInput = ({ value, onClick }) => {
  //   // <button type='button' className="example-custom-input" onClick={onClick}>
  //   //   {value}
  //   // </button>
  //   return(
  //   <div className="input-group">
  //     {/* <input type="text" className='form-control' value={ value } onClick={onClick}/>
  //      */}
  //     <button type='button' className="example-custom-input" onClick={onClick}>
  //       {value}
  //     </button>
  //     <div className="input-group-append">
  //       <div className="input-group-text"><i className="fa fa-calendar"></i></div>
  //     </div>
  //   </div> 
  //   ) 
  // }
  
  return (
    <div className="container" id='book-bar'>
      <div className="card shadow">
        <div className="card-body">
          <form action="">
            <div className="form-row">
              <div className="form-group col-2">
                <DatePicker
                  name='startDate'
                  showPopperArrow={false}
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  className='form-control'
                />
              </div>

              <div className="form-group col-2">
                <DatePicker
                  name='endDateDate'
                  showPopperArrow={false}
                  selected={endDate}
                  onChange={date => setEndDate(date)}
                  className='form-control'
                />
              </div>

                <div className="form-group col-2">
                  <select name='room' className="custom-select"id="inputGroupSelect01">
                      <option value='0'>Room...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="5">4</option>
                      <option value="5+">5+</option>
                    </select>   
                </div>

                <div className="form-group col-3">
                  <input 
                    type="text" 
                    className='form-control' 
                    id='date-start' 
                    placeholder='Have a promo code? Enter here!'
                  />
                </div>
                <div className="form-group col-3">
                  <input type="button" className='form-control btn btn-primary' value='Check Availability' />
                </div>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CardBar