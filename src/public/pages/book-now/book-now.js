import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import PublicLayout from '../../../layouts/public'
import bg_image_1 from '../../../images/big_image_1.jpg'
import img_1 from '../../../images/img_1.jpg'
import RoomCard from '../../components/roomCard'
import VideoSection from '../../components/videoSection'
import Banner from '../../components/banner'

function BookNow() {

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())


  const heading = 'Reservation'
  const introText = 'Discover the worlds #1 luxury suites for your pets'

  return(
    <PublicLayout>

      <Banner bg_media={ bg_image_1 } heading= { heading } introText= { introText }/>

      <section className='padding' id='booking-section'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 mb-4">
              <h2 className="mb-5">
                Reservation Form
              </h2>
              <form action="" method='post'>
                
                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="arrive-date">
                      Arrive Date
                    </label>
                    <DatePicker
                      name='startDate'
                      showPopperArrow={false}
                      selected={startDate}
                      onChange={date => setStartDate(date)}
                      className='form-control'
                    /> 
                  </div>

                  <div className="form-group col">
                    <label htmlFor="daparture-date">
                      Daparture Date
                    </label>
                    <DatePicker
                      name='endDate'
                      showPopperArrow={false}
                      selected={endDate}
                      onChange={date => setEndDate(date)}
                      className='form-control'
                    /> 
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="room">Room</label>
                    <select name='room' className="custom-select" id="inputGroupSelect01">
                      <option value='0'>Room...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="5">4</option>
                      <option value="5+">5+</option>
                    </select>   
                  </div>

                  <div className="form-group col">
                    <label htmlFor="pets">Pets</label>
                    <select className="custom-select" id="guest">
                      <option value='0' >Guest...</option>
                      <option value="1">Pet 1</option>
                      <option value="2">Pet 2</option>
                      <option value="3">Pet 3</option>
                      <option value="5">Pet 4</option>
                    </select>
                    
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="note">Write Note</label>
                  <textarea type="text" name='note' className='form-control' rows='5'></textarea>
                </div>

                <div className="form-group d-flex justify-content-center">
                  <input type="submit" className='btn btn-primary'value='Reserve Now'/>
                </div>
              
              </form>
            </div>

            {/* <div className="col-sm-0 col-lg-1"></div> */}

            <div className="col-sm-12 col-md-6 col-lg-6">
              <h2 className="mb-5">
                Featured Room
              </h2>
              <RoomCard 
                roomName='Presidential Room'
                category='featured' 
                media={ img_1 }   
                shortText='Nulla vel metus scelerisque ante sollicitudin. Fusce condimentum nunc ac nisi vulputate fringilla.' 
              />
            </div>

          </div>
        </div>
      </section>

      <VideoSection />

    </PublicLayout>
  )
}

export default BookNow