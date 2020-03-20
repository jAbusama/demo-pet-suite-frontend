import React from 'react';

function SmallCard({ borderColor, title, subTitle, icon, textColor, subData }) {
  return (
    <div className={`card shadow h-100 py-2 ${ borderColor }`} style={{height: '100px'}}>
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className={`text-xs front-weight-bold text-uppercase mb-1 ${ textColor }`}>
              { title }
            </div>

              { subData ?
                (
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                        {subTitle}%
                      </div>
                    </div>
                    <div className="col">
                      <div className="progress progress-sm mr-2">
                        <div 
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: `${subData.data}%` }}
                          aria-valuenow={`${subData.data}`}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {subTitle}
                  </div>
                )}

          </div>
          <div className="col-auto">
            <i className={`${icon} fa-2x text-gray-300`}></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmallCard;