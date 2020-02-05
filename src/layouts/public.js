import React, { useEffect } from 'react'
import Navbar from '../public/components/navbar'
import PublicFooter from '../public/components/footer'

function PublicLayout({ children }) {

  const onScroll = (e) => {
    // console.log("x: ", e.pageX , "y: ", e.pageY)
    console.log(e)
  }

  return(
    <div className="container-fluid" id='public'>
      <header id='public-header'>
        <Navbar />
      </header>

      <div className='content'>
        { children }
      </div>

      <div className="footer">
        <PublicFooter />
      </div>
    </div>
  )
}

export default PublicLayout