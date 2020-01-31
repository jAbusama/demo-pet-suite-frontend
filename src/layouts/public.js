import React from 'react'
import Navbar from '../public/components/navbar'

function PublicLayout({ children }) {
  return(
    <div className="container-fluid">
      <header id='public-header'>
        <Navbar />
      </header>

      <div>
        { children }
        </div>
    </div>
  )
}

export default PublicLayout