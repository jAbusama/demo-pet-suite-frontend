import React from 'react'
import '../../styles/public.css'
import { Link } from 'react-router-dom'
import VideoSection from '../components/videoSection'
import PublicLayout from '../../layouts/public'
import bg_image_1 from '../../images/big_image_1.jpg'
import f_img_1 from '../../images/f_img_1.png'
import img_1 from '../../images/img_1.jpg'
import img_2 from '../../images/img_2.jpg'
import img_3 from '../../images/img_3.jpg'
import img_4 from '../../images/img_4.jpg'
import img_5 from '../../images/img_5.jpg'
import img_6 from '../../images/img_6.jpg'


function Home() { 

  return (
    <div id='home'>
      <PublicLayout>
        
        <div className='container-fluid home-bg-img'>
          <img className='img-fluid home-img' src={ bg_image_1 } alt="hotel"/>
          <div className="carousel-caption">
            <h1> Welcome to Our luxury Pet Suites</h1>
            <h4> Discover the worlds #1 luxury suites for your pets</h4>
            <button className="btn btn-danger">
              Book Now
            </button>
          </div>
        </div>

        
        <section className='padding' id='public-home-section1'>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="section-title text-muted">
                  STAY WITH OUR LUXURY ROOMS &amp; SERVICES
                </div>
                <h2 className='heading'>
                  Stay and Enjoy
                </h2>
                <div className="section1-content-text pt-4">
                    <p className='text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Minus illo similique natus, a recusandae? Dolorum, 
                    unde a quibusdam est? Corporis deleniti obcaecati quibusdam 
                    inventore fuga eveniet! Qui delectus tempore amet!
                    </p>
                </div>

                <div className="section1-btn text-center pt-5">
                  <button className="btn btn-warning">More About Us</button>
                </div> 
              </div>

              <div className="col-lg-1"></div>

              <div className="col-lg-7">
                <img className='img-fluid' src={f_img_1} alt="like-family"/>
              </div>
            </div>
          </div>
        </section>

        <section className='padding' id='public-home-section2'>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center p-5">
                <h4 className="section-title text-muted">
                  Our Luxury Rooms
                </h4>
                <h2 className="heading">
                  Featured Rooms
                </h2>
              </div>
              <div className="col-lg-7">
                <div className="section2-content">
                  <div className="card">
                    <img src={img_1} alt="room1" className="card-img-top"/>
                    <div className="carousel-caption">
                      
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">
                      Presidential Room
                    </h3>
                    <ul className="room-specs">
                      <li className="specs">
                        2 Guest
                      </li>
                      <li className="specs">
                        Free Wifi
                      </li>
                    </ul>
                    <div className="card-text">
                     Nulla vel metus scelerisque ante sollicitudin. 
                     Fusce condimentum nunc ac nisi vulputate fringilla.
                    </div>
                    <div className="section2-btn">
                      <button className='btn btn-primary'>Book From Now!</button>
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

        <section className='padding' id='public-home-section4'>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h5 className='text-muted section-title'>OUR BLOG</h5>
                <h2 className='heading'>Our Recent Blog</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="post-enty">
                  <img src={img_3} alt="" className="img-fluid"/>
                </div>
                <div className="blog-body">
                  <div className="blog-category">
                    Rooms
                  </div>
                  <h3 className="blog-title mb-3">
                    New Rooms
                  </h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Ipsum deserunt illo quis similique dolore voluptatem culpa voluptas rerum, dolor totam.
                  </p>
                  <Link className="btn btn-outline-success btn-sm" to='#'>
                    READ MORE
                  </Link>
                </div>
              </div>

              <div className="col-md-4">
                <div className="post-enty">
                  <img src={img_6} alt="" className="img-fluid"/>
                </div>
                <div className="blog-body">
                  <div className="blog-category">
                    News
                  </div>
                  <h3 className="blog-title mb-3">
                    New Staff Added
                  </h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Ipsum deserunt illo quis similique dolore voluptatem culpa voluptas rerum, dolor totam.
                  </p>
                  <Link className="btn btn-outline-success btn-sm" to='#'>
                    READ MORE
                  </Link>
                </div>
              </div>


              <div className="col-md-4">
                <div className="post-enty">
                  <img src={img_5} alt="" className="img-fluid"/>
                </div>
                <div className="blog-body">
                  <div className="blog-category">
                    New Rooms
                  </div>
                  <h3 className="blog-title mb-3">
                    Big Rooms for All
                  </h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Ipsum deserunt illo quis similique dolore voluptatem culpa voluptas rerum, dolor totam.
                  </p>
                  <Link className="btn btn-outline-success btn-sm" to='#'>
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>
       
      </PublicLayout>
    </div>
  )
}

export default Home