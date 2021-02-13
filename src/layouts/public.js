import React, { useEffect } from 'react';
import Navbar from '../public/components/navbar';
import PublicFooter from '../public/components/footer';

function PublicLayout({ history, children }) {
  return (
    <div className='container-fluid' id='public'>
      <header id='public-header'>
        <Navbar history={history} />
      </header>

      <div className='content'>{children}</div>

      <div className='footer'>
        <PublicFooter />
      </div>
    </div>
  );
}

export default PublicLayout;
