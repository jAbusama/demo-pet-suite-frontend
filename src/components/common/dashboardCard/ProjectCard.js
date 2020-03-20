import React from 'react';

function ProjectCard({ borderColor, title, subTitle, icon, textColor, subData }) {
  return (
    <div className="card shadow h-100 py-2" style={{height: '100px'}}>
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Project</h6>
      </div>
      <div className="card-body">
        <h4 className="small font-weight-bold">
          Server Migration
          <span className="float-right">20%</span>
        </h4>
        <div className="progress mb-4">
          <div 
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: "20%" }}
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
            ></div>
        </div>
      </div>
    </div>
  )
}
export default ProjectCard;