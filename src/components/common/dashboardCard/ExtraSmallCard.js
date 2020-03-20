import React from 'react';

function ExtraSmallCard({name, value, bgColor}) {
  return (
    <div className={`card ${ bgColor } text-white shadow`}>
      <div className="card-body">
        { name }
        <div className="text-white-50 small">
          { value }
        </div>
      </div>
    </div>
  )
}

export default ExtraSmallCard