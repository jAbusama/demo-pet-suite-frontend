import React from 'react'

function RoomCard({media, roomName, category, roomsSpecs, review, roomsSpecsIcon, shortText  }) {
  return(
        <div className="rooms-entry">
          <figure>
            <img src={ media } alt="" className="img-fluid"/>
            
            <div className="overlap-text">
              <span>{ category }</span>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </figure> 
          
          <div className="entry-body">
            <h3 className="room-name mt-0">
              { roomName }
            </h3>
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
              { shortText }
            </p>
            <button className='btn btn-success btn-sm'>Book Now From $20</button>
          </div>
        </div>
  )
}

export default RoomCard