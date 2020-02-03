import React from 'react'
import Navbar from '../public/components/navbar'
import PublicFooter from '../public/components/footer'

function PublicLayout({ children }) {
  return(
    <div className="container-fluid">
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