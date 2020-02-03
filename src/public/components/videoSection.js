import React from 'react'
import { Link } from 'react-router-dom'

function VideoSection()  {
  return (
    <section className='videoSection' id='public-video-section'>
      <div className="container d-flex align-items-center">
        <div className="row  justify-content-center  text-center">
          <div className="col-md-9 text-center">
            <div className="caption">
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