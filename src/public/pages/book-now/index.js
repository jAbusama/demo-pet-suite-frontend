import React from 'react'
import PublicLayout from '../../../layouts/public'
import bg_image_1 from '../../../images/big_image_1.jpg'
import img_1 from '../../../images/img_1.jpg'

function BookNow() {
  return(
    <PublicLayout>
      <div className='container-fluid home-bg-img'>
        <img className='img-fluid home-img' src={ bg_image_1 } alt="hotel"/>
        <div className="carousel-caption">
          <h1> Reservation </h1>
          <h4> Discover the worlds #1 luxury suites for your pets</h4>
        </div>
      </div>

      <section className='padding' id='booking-section'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mb-5">
                Reservation Form
              </h2>
              <form action="" method='post'>
                
                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="">
                      Arrive Date
                    </label>
                    <div className="input-group date" id="datetimepickerStart" data-target-input="nearest">
                      <input type="text" className="form-control datetimepicker-input" placeholder='dd/mm/yyyy' data-target="#datetimepickerStart"/>
                      <div className="input-group-append" data-target="#datetimepickerStart" data-toggle="datetimepicker">
                          <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                      </div>
                    </div>  
                  </div>

                  <div className="form-group col">
                    <label htmlFor="">
                      Daparture Date
                    </label>
                    <div className="input-group date" id="datetimepickerStart" data-target-input="nearest">
                      <input type="text" className="form-control datetimepicker-input" placeholder='dd/mm/yyyy' data-target="#datetimepickerStart"/>
                      <div className="input-group-append" data-target="#datetimepickerStart" data-toggle="datetimepicker">
                          <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                      </div>
                    </div>  
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="">
                      Room
                    </label>
                    <select className="custom-select" id="inputGroupSelect01">
                      <option selected>Guest...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="5">4</option>
                      <option value="5+">5+</option>
                    </select>   
                  </div>

                  <div className="form-group col">
                    <label htmlFor="">
                      Daparture Date
                    </label>
                    <select className="custom-select" id="inputGroupSelect01">
                      <option selected>Guest...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="5">4</option>
                      <option value="5+">5+</option>
                    </select>
                    
                  </div>
                </div>

                <div className="form-row">
                  <label htmlFor="">Email</label>
                  <input type="text" name='email' className='form-control'/>
                </div>

                <div className="form-row">
                  <label htmlFor="">Write Note</label>
                  <textarea type="text" name='email' className='form-control' rows='5'></textarea>
                </div>

                <input type="submit" className='btn btn-success form-control'value='Reserve Now'/>
              
              </form>
            </div>

            <div className="col-md-1"></div>


            <div className="col-md-5">
              <h2 className="mb-5">
                Featured Room
              </h2>
              <div className="feature-rooms">
                <div className="image">
                <figure>
                  <img src={ img_1 } alt="" className="img-fluid"/>
                 
                  <div className="overlap-text">
                    <span>FEATURED ROOM </span>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  </figure>
                 
                </div>
                
                <div className="entry-body">
                  <h2 className="mt-0">
                    Presidential Room
                  </h2>
                  <ul className='room-specs'>
                    <li>
                      <i className="fas fa-users"></i>
                      &nbsp; 2 Guest
                    </li>
                    <li>
                      <i className="fas fa-paw"></i>
                      &nbsp; For Cats
                    </li>
                  </ul>
                  <p>
                    Nulla vel metus scelerisque ante sollicitudin. 
                    Fusce condimentum nunc ac nisi vulputate fringilla.
                  </p>
                  <button className='btn btn-success'>Book Now From $20</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </PublicLayout>
  )
}

export default BookNow