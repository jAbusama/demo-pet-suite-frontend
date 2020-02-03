import React from 'react'
import PublicLayout from '../../../layouts/public'
import Banner from '../../components/banner'
import VideoSection from '../../components/videoSection'
import bg_image_1 from '../../../images/big_image_1.jpg'
import img_1 from '../../../images/img_1.jpg'


function ContactUs() {
  const heading = 'Contact Us'
  const introText = "Discover our world's #1 Luxury Room For VIP."

  return (
    <PublicLayout>

      <Banner bg_media={ bg_image_1 } heading={ heading } introText={ introText }/>

      <section className='padding' id='booking-section'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mb-5">
                Contact Form
              </h2>
              <form action="" method='post'>
                
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" name='name' className="form-control"/>
                </div>

                <div className="form-group ">
                  <label htmlFor="mobile">Phone</label>
                  <input type="text" name='mobile' className="form-control"/> 
                </div>

                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input type="text" name='email' className='form-control'/>
                </div>

                <div className="form-group">
                  <label htmlFor="">Write Note</label>
                  <textarea type="text" name='email' className='form-control' rows='5'></textarea>
                </div>

                <input type="submit" className='btn btn-primary'value='Send Message'/>
              
              </form>
            </div>

            <div className="col-md-1"></div>


            <div className="col-md-5">
              <h2 className="mb-5">
                Paragraph
              </h2>
              <p className="mb-5">
                <img src={ img_1 } alt="" className="img-fluid"/>
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae labore 
                aspernatur cumque inventore voluptatibus odit doloribus! Ducimus, animi 
                perferendis repellat. Ducimus harum alias quas, quibusdam provident ea sed,sapiente quo.
              </p>

              <p>
              Ullam cumque eveniet, fugiat quas maiores, non modi eos deleniti minima, 
              nesciunt assumenda sequi vitae culpa labore nulla! Cumque vero, magnam ab
               optio quidem debitis dignissimos nihil nesciunt vitae impedit!
              </p>

            </div>
          </div>
        </div>
      </section>

      <VideoSection />

    </PublicLayout>
  )
}

export default ContactUs