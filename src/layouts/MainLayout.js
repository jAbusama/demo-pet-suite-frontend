import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import useGlobal from '../services/useGlobal';
import '../styles/admin.css';

function MainLayout({ history, children }) {
  const [gStates] = useGlobal();

  const isToggle = gStates.isToggle;

  return (
    <div className='container-fluid'>
      <div className='row main-content' id='admin'>
        <div
          className={`col ${isToggle ? 'active' : 'not-active'}`}
          id='sidebar-wrapper'
        >
          <Sidebar />
        </div>
        <div className='col' id='content-wrapper'>
          <Nav history={history} />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
