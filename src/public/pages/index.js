import React from 'react'
import { Link } from 'react-router-dom'
import PublicLayout from '../../layouts/public'
import VideoSection from '../components/videoSection'
import Banner from '../components/banner'
import BlogCard from '../components/blogCard'
import RoomCard from '../components/roomCard'
import { eventsList } from '../variables/blogList'
import { roomList } from '../variables/roomList'
import CardBar from '../components/cardBar'
import '../../styles/public.css'

import bg_image_1 from '../../images/big_image_1.jpg'
import f_img_1 from '../../images/f_img_1.png'


function Home() { 
  const heading = 'Welcome to Our luxury Pet Suites'
  const introText = 'Discover the worlds #1 luxury suites for your pets'

  let i = 0
  const events = eventsList.filter(event => {
    if(i < 3) {
      i++
      return event
    }
  })
  let x=0
  const rooms = roomList.filter(room => {
    if(x < 3) {
      x++
      return room
    }
  })

  console.log(rooms)

  return (
    <PublicLayout>
      <section>
        <div className="container-fluid" id='home-banner'>
          <Banner bg_media={ bg_image_1 } heading={ heading } introText={ introText }/>
        </div>
      </section>

    
      <section id='card-bar'>
      <CardBar />
      </section>

      <section className='padding' id='public-home-section1'>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-4 text-center">
              <h4 className="section-title">
                STAY WITH OUR LUXURY ROOMS
              </h4>
              <h2 className='heading'>
                Stay and Enjoy
              </h2>
              <div className="section1-content-text mb-5">
                  <p className='text-center'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Minus illo similique natus, a recusandae? Dolorum, 
                  unde a quibusdam est? Corporis deleniti obcaecati quibusdam 
                  inventore fuga eveniet! Qui delectus tempore amet!
                  </p>
              </div>

              <div className="section1-btn text-center">
                <button className="btn btn-primary">More About Us</button>
              </div> 
            </div>

            <div className="col-lg-1"></div>

            <div className="col-lg-7">
              <img className='img-fluid' src={f_img_1} alt="like-family"/>
            </div>
          </div>
        </div>
      </section>

      <section className='padding bg-light' id='public-home-section2'>
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h4 className="section-title">
                Our Luxury Rooms
              </h4>
              <h2 className="heading">
                Featured Rooms
              </h2>
            </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <RoomCard 
                media={ rooms[0].media } 
                category={ rooms[0].category } 
               
                roomName={rooms[0].roomName} 
                shortText={rooms[0].shortText} 
                />     

              </div>

              <div className="col-md-1"></div>

            <div className="col-5">
              <div className="rooms-entry">
                <Link to='#'>
                  
                  <figure>
                    <img src={ rooms[1].media } alt="" className="img-fluid"/>
                    <div className="overlap-text">
                      <span>{ rooms[1].category }&nbsp; </span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </figure> 

                </Link>
                <Link to='#'>
                  <figure>
                    <img src={ rooms[2].media } alt="" className="img-fluid"/>
                    <div className="overlap-text">
                      <span>{ rooms[2].category }&nbsp; </span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </figure> 
                </Link>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      <VideoSection />

      <section className='padding bg-light' id='public-home-section4'>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h5 className='text-muted section-title'>OUR BLOG</h5>
              <h2 className='heading'>Our Recent Blog</h2>
            </div>

            {events.map(event => (
              <div key={event.key} className="col-md-4">
                <BlogCard 
                  title={event.title}
                  media={event.media}
                  category={event.category}
                  text={event.text}
                />
              </div>
            ))}

          </div>          

        </div>
      </section>
      
    </PublicLayout>
  )
}

export default Home