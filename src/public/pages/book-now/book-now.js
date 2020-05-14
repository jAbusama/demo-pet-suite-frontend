import React, { useEffect } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import storage from 'store'

import useGlobal from '../../../services/useGlobal'
import PublicLayout from '../../../layouts/public'
import bg_image_1 from '../../../images/big_image_1.jpg'
import img_1 from '../../../images/img_1.jpg'
import RoomCard from '../../components/roomCard'
import VideoSection from '../../components/videoSection'
import Banner from '../../components/banner'
import { useForm } from '../../useForm'

function BookNow({history}) {

  const user = storage.get('user')
  const isLogin = storage.get('isLogin')

  const [gState, gActions] = useGlobal()

  const initValues = {
    arriveDate: new Date(),
    departureDate: new Date(),
    room: 0,
    pets: [],
    notes: '',
    owner: isLogin && user.id
  }
  const [values, handler, arriveDate, departureDate] = useForm(initValues)

  useEffect(() => {
    if(isLogin) {
      if(!gState.userPetsLoaded) {
        gActions.getUserPets(user.id)
      }
    }
  },[gState, gActions, isLogin, user])

  const bookingHandler = (e) => {
    if(isLogin) {
      e.preventDefault()
      gActions.booking(values)
    }
  }

  const heading = 'Reservation'
  const introText = 'Discover the worlds #1 luxury suites for your pets'

  const userPets = gState.userPets
  
  return(
    <PublicLayout history={ history }>

      <Banner bg_media={ bg_image_1 } heading= { heading } introText= { introText }/>

      <section className='padding' id='booking-section'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 mb-4">
              <h2 className="mb-5">
                Reservation Form
              </h2>
              <form onSubmit={ bookingHandler } method='post'>
                
                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="arrive-date">
                      Arrive Date
                    </label>
                    <DatePicker
                      name='startDate'
                      showPopperArrow={false}
                      selected={ values.arriveDate }
                      onChange={ arriveDate }
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
                      selected={ values.departureDate }
                      onChange={ departureDate }
                      className='form-control'
                    /> 
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="room">Room</label>
                    <select 
                      name='room' 
                      className="custom-select" 
                      id="inputGroupSelect01"
                      onChange={ handler }
                      value={ values.room }
                      >
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
                    <select className="custom-select" id="guest" name='pets' onChange= { handler } values={ values.pets }>
                      {userPets.map(pet => (
                        <option key={pet._id} value={pet._id}>{pet.name}</option>
                      ))}
                    </select>
                    
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="note">Write Note</label>
                  <textarea 
                    type="text" 
                    name='notes' 
                    className='form-control' 
                    rows='5'
                    value= {values.notes}
                    onChange={ handler }
                    >
                    {/* { values.notes } */}
                  </textarea>
                </div>

                <div className="form-group d-flex justify-content-center">
                  <input type="submit" className='btn btn-primary'value='Reserve Now'/>
                </div>
              
              </form>
            </div>

            <div className="col-lg-1"></div>

            <div className="col-sm-12 col-md-5">
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