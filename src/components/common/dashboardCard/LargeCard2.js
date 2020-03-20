import React from 'react';
import { Link } from 'react-router-dom'
function LargeCard({ img, paragraph, link }) {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
      </div>
      <div className="card-body">

        {
          img !== '' ? 
            <div className="text-center">
              <img src={`/${ img }`} alt="" className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "24rem"}}/>
            </div>
            :
            ""
        }
          { paragraph.map( p => (
            <p key={p}>{ p }</p>
          )) }
        {
          link ? 
            <Link to="/facebook" >
              { link }
            </Link>
            :
            ""
        }

      </div>
    </div>
  )
}
export default LargeCard;