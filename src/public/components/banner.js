import React from 'react'

function Banner({bg_media, heading, introText }) {
  return(
   
    <div className='banner-bg-img'>
      <img className='img-fluidx' src={ bg_media } alt="hotel"/>
      <div className="carousel-caption">
        <h1> { heading } </h1>
        <h4>{ introText }</h4>
      </div>
    </div>
  )
} 

export default Banner