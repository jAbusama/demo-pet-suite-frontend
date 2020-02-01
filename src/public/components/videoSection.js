import React from 'react'
import { Link } from 'react-router-dom'
import img_5 from '../../images/img_5.jpg'

function VideoSection()  {
  return (
    <section className='' id='public-home-section3'>
      <img src={img_5} alt="" className="img-fluid"/>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-9">
            <div className="carousel-caption">

              <h2 className='heading'>Relax and Enjoy you Holiday</h2>
              <p className="lead mb-5">
                Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Architecto quidem 
                tempore expedita facere facilis, dolores!
              </p>
              <div className="btn-play-wrap">
                <Link to='#' className='btn-play'></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection