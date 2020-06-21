import React from 'react';

function LargeCard({ data }) {
  return (
    <div className='card shadow mb-4'>
      <div className='card-header py-3'>
        <h6 className='m-0 font-weight-bold text-primary'>Project</h6>
      </div>
      <div className='card-body'>
        {data.map((data) => (
          <div key={data.label}>
            <h4 className='small font-weight-bold'>
              {data.name}
              <span className='float-right'>{data.label}</span>
            </h4>
            <div className='progress mb-4'>
              <div
                className={`progress-bar ${data.bgColor}`}
                role='progressbar'
                style={{ width: `${data.value}%` }}
                aria-valuenow={`${data.value}`}
                aria-valuemin='0'
                aria-valuemax='100'
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default LargeCard;
