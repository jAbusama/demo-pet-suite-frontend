import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import useGlobal from '../../services/useGlobal';
import storage from 'store';
import routeLinks from '../../Routes';

function Navbar({ history }) {
  const [scrolled, setScrolled] = useState(false);
  const [gStates, gActions] = useGlobal();
  const isLogin = storage.get('isLogin');

  useEffect(() => {
    window.addEventListener('scroll', attachEvent);
    return () => {
      window.removeEventListener('scroll', attachEvent);
    };
  }, []);

  console.log(scrolled);

  useEffect(() => {
    if (window.pageYOffset > 50) {
      if (!scrolled) {
        setScrolled(true);
      }
    }
  });

  const attachEvent = () => {
    console.log(window.pageYOffset);
    if (window.scrollY > 50) {
      setScrolled(true);
    } else setScrolled(false);
  };

  const logout = async (e) => {
    e.preventDefault();
    await gActions.logout();
    history.push('/login');
  };

  return (
    <React.Fragment>
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top pt-5 ${
          scrolled && 'shrink'
        } `}
      >
        <div className='container'>
          <Link to='/' href='' className='navbar-brand' id='navbar-logo'>
            Logo
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarList'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarList'>
            <ul className='navbar-nav ml-auto'>
              {routeLinks.map((route) =>
                route.accessLabel === 'owner' ? (
                  isLogin ? (
                    route.key === 'user-profile' ? (
                      <li key={route.key} className='nav-item dropdown'>
                        <form onSubmit={logout}>
                          <button className='dropdown-item' type='submit'>
                            Logout
                          </button>
                        </form>
                        {/* <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Welcome back! { user.firstname }
                          </span>
                          <div className="dropdown-menu dropdown-menu-right shadow" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to='/'> <i className="fas fa-chart-line"></i> My Dashboard</Link>
                            <Link className="dropdown-item" to='/'>My Profile</Link>
                            <Link className="dropdown-item" to='/'>My Pets</Link>
                            <Link className="dropdown-item" to='/'>Change Password</Link>
                            <div className="dropdown-divider"></div>
                            <form onSubmit={logout}>
                              <button className="dropdown-item" type='submit' >Logout</button>
                            </form>
                          </div> */}
                      </li>
                    ) : (
                      <li key={route.key} className='nav-item'>
                        <NavLink
                          exact
                          className={`nav-link ${route.class}`}
                          to={route.path}
                        >
                          {route.label}
                        </NavLink>
                      </li>
                    )
                  ) : route.key === 'register' ? (
                    <li key={route.key} className='nav-item'>
                      <NavLink
                        exact
                        className='btn btn-outline-primary'
                        to={route.path}
                      >
                        {route.label}
                      </NavLink>
                    </li>
                  ) : (
                    <li key={route.key} className='nav-item'>
                      <NavLink
                        exact
                        className={`nav-link ${route.class}`}
                        to={route.path}
                      >
                        {route.label}
                      </NavLink>
                    </li>
                  )
                ) : null
              )}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
