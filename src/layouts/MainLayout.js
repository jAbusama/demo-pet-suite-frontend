import React from 'react'
import Nav from '../components/Nav'
// import Sidebar from '../components/Sidebar'
 import Sidebar from '../components/Sidebar'
function MainLayout({ children }) {
	return (
		<React.Fragment>
			<div className='row'>
				<div className="col-3 sidebar">
					<Sidebar />
				</div>
				<div className="col-9 content">
					<Nav />
					<div>{children}</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default MainLayout
