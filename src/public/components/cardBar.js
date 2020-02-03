import React from 'react'

function CardBar() {
  return (
    <div className="container" id='book-bar'>
      <div className="card shadow">
        <div className="card-body">
          <form action="">

            <div className="form-row">
              <div className="form-group col-2">
                <div className="input-group date" id="datetimepickerArrive" data-target-input="nearest">
                  <input name='arrive-date' type="text" className="form-control datetimepicker-input" placeholder='dd/mm/yyyy' data-target="#datetimepickerArrive"/>
                  <div className="input-group-append" data-target="#datetimepickerArrive" data-toggle="datetimepicker">
                    <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                  </div>
                </div>  
              </div>

              <div className="form-group col-2">
                <div className="input-group date" id="datetimepickerDaparture" data-target-input="nearest">
                  <input name="deaparture-date" type="text" className="form-control datetimepicker-input" placeholder='dd/mm/yyyy' data-target="#datetimepickerDeparture"/>
                  <div className="input-group-append" data-target="#datetimepickerDeparture" data-toggle="datetimepicker">
                    <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                  </div>
                </div>  
              </div>

                <div className="form-group col-2">
                  <select name='room' className="custom-select" id="inputGroupSelect01">
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