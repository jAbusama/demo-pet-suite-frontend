import React from 'react'
import PublicLayout from '../../../layouts/public'
import bg_image_1 from '../../../images/big_image_1.jpg'
import RoomCard from '../../components/roomCard'
import { roomList } from '../../variables/roomList'
import VideoSection from '../../components/videoSection'
import Banner from '../../components/banner'

function Rooms() {
  const heading = 'Our Rooms'
  const introText = 'Discover the worlds #1 luxury suites for your pets'

  return(
    <PublicLayout>

      <Banner bg_media={ bg_image_1 } heading={ heading } introText={ introText }/>
      
      <section className='padding' id='public-room-section'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="heading">
                Rooms
              </h2>
            </div>

            {
              roomList.map(room => (
                <div key={ room.key }  className="col-md-4 mb-4">
                  <RoomCard 
                    
                    category={ room.category } 
                    media={room.media} 
                    roomName={room.roomName} 
                    shortText={room.shortText} 
                  />
                </div>
            ))}
            
          </div>
        </div>
      </section>

      <VideoSection />

    </PublicLayout>
  )
}

export default Rooms