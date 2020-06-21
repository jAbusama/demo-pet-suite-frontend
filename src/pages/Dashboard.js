import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SmallCard from '../components/common/dashboardCard/SmallCard';
import MediumCard from '../components/common/dashboardCard/MediumCard';
import LargeCard from '../components/common/dashboardCard/LargeCard';
import LargeCard2 from '../components/common/dashboardCard/LargeCard2';
import ExtraSmallCard from '../components/common/dashboardCard/ExtraSmallCard';

function Dashboard({ history }) {
  const subData = {
    hasData: true,
    data: 50,
  };

  const smallCardData = [
    { name: 'Primary', value: '#4e73df', bgColor: 'bg-primary' },
    { name: 'Success', value: '#1cc88af', bgColor: 'bg-success' },
    { name: 'Info', value: '#36b9cc', bgColor: 'bg-info' },
    { name: 'Warning', value: '#f6c23e', bgColor: 'bg-warning' },
    { name: 'Danger', value: '#e74a3b', bgColor: 'bg-danger' },
    { name: 'Secondary', value: '#858796', bgColor: 'bg-secondary' },
  ];

  const projectData = [
    { name: 'Server Migration', value: 20, label: '20%', bgColor: 'bg-danger' },
    { name: 'Sales Tracking', value: 40, label: '40%', bgColor: 'bg-warning' },
    {
      name: 'Customer Database',
      value: 60,
      label: '60%',
      bgColor: 'bg-primary',
    },
    { name: 'Payout Setup', value: 80, label: '80%', bgColor: 'bg-info' },
    {
      name: 'Account Setup',
      value: 100,
      label: 'Complete',
      bgColor: 'bg-success	',
    },
  ];

  const largeCard2Data = [
    {
      id: 0,
      img: 'undraw_posting_photo.svg',
      paragraph: [
        'Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!',
      ],
      link: 'Browse Illustrations on unDraw →',
    },
    {
      id: 1,
      img: '',
      paragraph: [
        'SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.',
        'Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.',
      ],
    },
  ];

  return (
    <MainLayout history={history}>
      <div className='container-fluid p-3'>
        <div className='d-sm-flex align-items-center justify-content-between mb-3'>
          <h1 className='h3 mb-0 text-gray-400'>Dashboard</h1>
          <button className='d-none d-sm inline-block btn btn-sm btn-primary shadow-sm'>
            <i className='fas fa-download fa-sm text-white-50'></i>
            &nbsp;Generate Report
          </button>
        </div>

        <div className='row mb-4'>
          <div className='col-xs-12 col-lg-6 col-xl-3 mb-3 mb-xl-0'>
            <SmallCard
              borderColor='border-left-primary'
              title='Earnings (Monthly)'
              subTitle='$40,000'
              icon='fas fa-calendar'
              textColor='text-primary'
            />
          </div>
          <div className='col-xs-12 col-lg-6 col-xl-3 mb-3 mb-xl-0'>
            <SmallCard
              borderColor='border-left-success'
              title='Earnings (Annual)'
              subTitle='$215,000'
              icon='fas fa-dollar-sign'
              textColor='text-success'
            />
          </div>
          <div className='col-xs-12 col-lg-6 col-xl-3'>
            <SmallCard
              borderColor='border-left-info'
              title='Occupied Rooms'
              subTitle={subData.data}
              icon='fas fa-clipboard-list'
              subData={subData}
              textColor='text-info'
            />
          </div>
          <div className='col-xs-12 col-lg-6 col-xl-3'>
            <SmallCard
              borderColor='border-left-warning'
              title='Pending Request'
              subTitle='18'
              icon='fas fa-comments'
              textColor='text-warning'
            />
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-md-7 col-lg-8'>
            <MediumCard />
          </div>
          <div className='col-xs-12 col-md-5 col-lg-4'>
            <LargeCard data={projectData} />
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-md-6 p-0 mb-4'>
            <div className='px-3'>
              <LargeCard data={projectData} />
            </div>
            <div className='row'>
              {smallCardData.map((data) => (
                <div className='col-xs-12 col-md-6 mb-3' key={data.name}>
                  <ExtraSmallCard
                    name={data.name}
                    value={data.value}
                    bgColor={data.bgColor}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='col-xs-12 col-md-6 mb-4'>
            {largeCard2Data.map((data) => (
              <LargeCard2
                key={data.id}
                img={data.img}
                paragraph={data.paragraph}
                link={data.link}
              />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="row">
							<div className="col p-0 mb-2">
								<MediumCard />
							</div>
						</div>

						<div className="row">
							<div className="col p-0 mb-2">
								<LargeCard />
							</div>
						</div>

						<div className="row">
							<div className="col p-0 mb-2">
								<SmallCard />
							</div>
							<div className="col pl-2 pr-0 mb-2">
								<SmallCard />
							</div>
						</div>
					</div>

					<div className="col-xm-12 col-sm-12 col-md-6 pr-0 pl-1">
						<div className="row">
							<div className="col p-0 mb-2">
								<SmallCard />
							</div>
							<div className="col pl-2 pr-0 mb-2">
								<SmallCard />
							</div>
						</div>

						<div className="row">
							<div className="col p-0 mb-2">
								<MediumCard />
							</div>
						</div>

						<div className="row">
							<div className="col p-0 mb-2">
								<LargeCard />
							</div>
						</div>

						<div className="row">
							<div className="col p-0 mb-2">
								<SmallCard />
							</div>
							<div className="col pl-2 pr-0 mb-2">
								<SmallCard />
							</div>
						</div>
					</div> */}
      {/* </div> */}

      {/* </div> */}
    </MainLayout>
  );
}

export default Dashboard;
