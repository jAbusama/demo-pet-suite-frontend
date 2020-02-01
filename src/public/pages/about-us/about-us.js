import React from 'react'
import PublicLayout from '../../../layouts/public'
import bg_image_1 from '../../../images/big_image_1.jpg'

function AboutUs() {
  return(
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

    </PublicLayout>
  )
}

export default AboutUs