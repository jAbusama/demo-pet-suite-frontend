import React from 'react'
import VideoSection from '../../components/videoSection'
import Banner from '../../components/banner'
import StaffCard from '../../components/staffCard'
import PublicLayout from '../../../layouts/public'
import bg_image_1 from '../../../images/big_image_1.jpg'
import f_img_1 from '../../../images/f_img_1.png'
import { staffList } from '../../variables/staffList'

function AboutUs() {
  const heading = 'About Luxury Pet Suites'
  const introText = 'Discover the worlds #1 luxury suites for your pets'
  return(
    <PublicLayout>

      <Banner bg_media={ bg_image_1 } heading= { heading } introText= { introText }/>

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

              {
                staffList.map(staff => (
                  <div key={ staff.key } className="col-md-4">
                    <StaffCard 
                      profile={ staff.profile }
                      name= { staff.name }
                      position={ staff.position }
                      bio={ staff.bio } 
                    />
                  </div>
                ))
              }
              
            </div>

          </div>
        </section>


        <VideoSection />




    </PublicLayout>
  )
}

export default AboutUs