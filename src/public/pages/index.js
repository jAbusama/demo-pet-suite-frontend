import React from 'react'
import { Link } from 'react-router-dom'
import PublicLayout from '../../layouts/public'
import VideoSection from '../components/videoSection'
import Banner from '../components/banner'
import BlogCard from '../components/blogCard'
import { eventsList } from '../variables/blogList'
import CardBar from '../components/cardBar'
import '../../styles/public.css'

import bg_image_1 from '../../images/big_image_1.jpg'
import f_img_1 from '../../images/f_img_1.png'
import img_1 from '../../images/img_1.jpg'
import img_2 from '../../images/img_2.jpg'
import img_4 from '../../images/img_4.jpg'


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

  return (
    <PublicLayout>
      <section className="">
        <div className="container-fluid" id='home-banner'>
          <Banner bg_media={ bg_image_1 } heading={ heading } introText={ introText }/>
          <CardBar />
        </div>
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
              <div className="col-lg-7">
                <div className="section2-content">
                  <div className="rooms-entry shadow-sm">
                    <figure>
                      <img src={img_1} alt="room1" className="card-img-top"/>
                      <div className="overlap-text">
                        <span>Featured</span>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </figure>

                  <div className="entry-body">
                    <h3 className="room-name">
                      Presidential Room
                    </h3>
                    <ul className="room-specs">
                      <li className="specs">
                        <i className="ion-ios-people-outline"></i>
                        2 Guest
                      </li>
                      <li className="specs">
                        <i className="ion-ios-people-outline"></i>
                        Free Wifi
                      </li>
                    </ul>
                    <p>
                      Nulla vel metus scelerisque ante sollicitudin. 
                      Fusce condimentum nunc ac nisi vulputate fringilla.
                    </p>
                    <p className="section2-btn">
                      <button className='btn btn-primary'>Book From Now!</button>
                    </p>
                  </div>
                  </div>
                  
                </div>
              </div>

            <div className="col-5">
              <Link to='#'>
                <img className='img-fluid' src={img_2} alt=""/>
              </Link>
              <Link to='#'>
                <img className='img-fluid' src={img_4} alt=""/>
              </Link>
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