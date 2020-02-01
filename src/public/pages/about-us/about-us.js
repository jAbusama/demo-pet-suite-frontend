import React from 'react'
import VideoSection from '../../components/videoSection'
import PublicLayout from '../../../layouts/public'
import bg_image_1 from '../../../images/big_image_1.jpg'
import f_img_1 from '../../../images/f_img_1.png'
import person_1 from '../../../images/person_1.jpg'
import person_2 from '../../../images/person_2.jpg'
import person_3 from '../../../images/person_3.jpg'

function AboutUs() {
  return(
    <PublicLayout>

      <div className='container-fluid home-bg-img'>
        <img className='img-fluid home-img' src={ bg_image_1 } alt="hotel"/>
        <div className="carousel-caption">
          <h1> About Luxury Suites</h1>
          <h4> Discover the worlds #1 luxury suites for your pets</h4>
        </div>
      </div>


      <section className='padding' id='public-about-section1'>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-4">
                <div className="section-title text-muted">
                  STAY WITH OUR LUXURY ROOMS &amp; SERVICES
                </div>
                <h2 className='heading'>
                  Stay and Enjoy
                </h2>
                <div className="section1-content-text pt-4">
                    <p className='text-left'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Minus illo similique natus, a recusandae? Dolorum, 
                    unde a quibusdam est? Corporis deleniti obcaecati quibusdam 
                    inventore fuga eveniet! Qui delectus tempore amet!
                    </p>
                    <p className='text-left'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Minus illo similique natus, a recusandae? Dolorum, 
                    unde a quibusdam est? Corporis deleniti obcaecati quibusdam 
                    inventore fuga eveniet! Qui delectus tempore amet!
                    </p>
                    <p className='text-left float-left'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Minus illo similique natus, a recusandae? Dolorum, 
                    unde a quibusdam est? Corporis deleniti obcaecati quibusdam 
                    inventore fuga eveniet! Qui delectus tempore amet!
                    </p>
                </div>
              </div>


              <div className="col-md-12 col-lg-8 d-flex align-items-center">
                <img className='img-fluid' src={f_img_1} alt="like-family"/>
              </div>

            </div>
          </div>
        </section>


        <section className='padding' id='public-about-section2'>
          <div className="container">
            <div className="row ">
              <div className="col-12 section2-title mb-5">
                <h4 className='sub-heading'>
                  OUR KIND STAFF
                </h4>
                <h2 className='heading'>
                  OUR STAFF
                </h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="staff-entry">
                  <img src={ person_1 } alt="" className="card-img-top"/>
                  <div className="staff-body">
                    <div className="staff-position text-muted">
                      STAFF
                    </div>
                    <h3 className="staff-name mb-3">
                      Michelle Aguilar
                    </h3>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Ipsum deserunt illo quis similique dolore voluptatem culpa 
                      voluptas rerum, dolor totam.
                    </p>
                    <button className='btn btn-outline-primary btn-sm'>READ BIO</button>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="staff-entry">
                  <img src={ person_2 } alt="" className="card-img-top"/>
                  <div className="staff-body">
                    <div className="staff-position text-muted">
                      STAFF
                    </div>
                    <h3 className="staff-name mb-3">
                      Michelle Aguilar
                    </h3>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Ipsum deserunt illo quis similique dolore voluptatem culpa 
                      voluptas rerum, dolor totam.
                    </p>
                    <button className='btn btn-outline-primary btn-sm'>READ BIO</button>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="staff-entry">
                  <img src={ person_3 } alt="" className="card-img-top"/>
                  <div className="staff-body">
                    <div className="staff-position text-muted">
                      STAFF
                    </div>
                    <h3 className="staff-name mb-3">
                      Michelle Aguilar
                    </h3>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Ipsum deserunt illo quis similique dolore voluptatem culpa 
                      voluptas rerum, dolor totam.
                    </p>
                    <button className='btn btn-outline-primary btn-sm'>READ BIO</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        <VideoSection />




    </PublicLayout>
  )
}

export default AboutUs