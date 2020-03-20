import React from 'react';
import { Link } from 'react-router-dom'
import Chartjs from '../../Chartjs'

function MediumCard() {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
        <div className="dropdown no-arrow">
          <span 
            className="dropdown-toggle"
            role="button"
            id="mediumCardDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
          </span>
          <div 
            className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
            aria-labelledby="mediumCardDropdown"
            x-placement="bottom-end"
            >
              <div className="dropdown-header">Dropdown Header</div>
              <Link to="/" className='dropdown-item'>Action</Link>
              <Link  to="/" className='dropdown-item'>Another Action</Link>
              <div className="dropdown-devider"></div>
              <Link  to="/" className='dropdown-item'>Some Action</Link>

          </div>
        </div>
      </div>
     
      <div className="card-body">
        <Chartjs />
      </div>
    </div>
  )
}

export default MediumCard;