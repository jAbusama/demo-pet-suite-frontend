import React from 'react'
import { Link } from 'react-router-dom'

function StaffCard({ profile, position, name, bio, id}) {
  console.log(position)
  return (
    <div className="blog-card shadow mb-4">
      <div className="blog-entry-media">
        <img src={ profile } alt="" className="img-fluid"/>
      </div>
      <div className="blog-entry-body">
        <div className="blog-category">
          {position}
        </div>
        <h3 className="blog-title mb-3">
          {name}
        </h3>
        <p className="blog-text mb-4">
          { bio }
        </p>
        <div className="text-center">
          <Link to='#' className='btn btn-outline-primary btn-sm btn-blog'>Read More...</Link>
        </div>
        
      </div>
    </div>
  )
}

export default StaffCard