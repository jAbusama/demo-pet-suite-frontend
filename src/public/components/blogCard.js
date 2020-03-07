import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({ media, category, title, text, id}) {

  return (
    <div className="blog-card shadow mb-4">
      <div className="blog-entry-media">
        <img src={ media } alt="" className="img-fluid"/>
      </div>
      <div className="blog-entry-body">
        
        <div className="blog-category">
          {category}
        </div>
        <h3 className="blog-title mb-3">
          {title}
        </h3>
        <p className="blog-text mb-4">
          { text }
        </p>

        <div className="text-center">
          <Link to='#' className='btn btn-outline-primary btn-sm btn-blog'>Read More...</Link>
        </div>
        
      </div>
    </div>
  )
}

export default BlogCard