import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import useGlobal from '../../services/useGlobal'
import LoginPage from './Login'
import RegisterPage from './Register'
import bg from '../../images/bg.jpg'

export function Login({history}) {


  return (
    <div className='row login-front'>
      { background }
      <div className='col-xs-9 col-sm-8 col-md-4 m-auto p-0'>
        <div className='auth-form'>
        { homeButton }
          <LoginPage history={history}/>
        </div>
      </div>
    </div>
  )
}

export function Register({history}) {
  return (
    <div className='row login-front'>
      { background }
      <div className='col-xs-9 col-sm-8 col-md-4 m-auto m-sx-5'>
          <div className='auth-form'>
          { homeButton }
            <RegisterPage history={history} />
          </div>

      </div>
    </div>
  )
}

const background = (
  <div className="col px-0 bg-img d-flex align-items-center">
    <div className="row justify-content-center">
      <div className="col-lg-5 d-flex align-items-center">
        <div className='py-5 text-center text-lg-left'>
        <span className="badge badge-soft-primary badge-pill">Be stronger</span>
          <h2 className="h1 text-white mb-3">
            Pet Suite Love your Pet
          </h2>
          <p className="lead 1h-180 text-white">
            Build responsive, mobile-first projects on the web with the world's most popular front-end component library.
          </p>
        </div>
      </div>

      <div className="col-lg-6 d-none d-lg-block">
        <div className="card mt-7 mb-0 py-3 px-3 shadow-lg perspective-right hover-scale-110">
        <div className="card-body">
                <h2 className="heading h2">
                  <strong>Experience</strong> the greatest pet care.
                </h2>
                <p className="lead lh-180 mt-4">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                <ul className="list-unstyled mt-4">
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="icon icon-shape icon-primary icon-sm rounded-circle mr-3">
                          <i className="fas fa-store-alt"></i>
                        </div>
                      </div>
                      <div>
                        <span className="h6 mb-0">Perfect for modern startups</span>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="icon icon-shape icon-warning icon-sm rounded-circle mr-3">
                          <i className="fas fa-palette"></i>
                        </div>
                      </div>
                      <div>
                        <span className="h6 mb-0">Built with ease-of-use at its core</span>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="icon icon-shape icon-success icon-sm rounded-circle mr-3">
                          <i className="fas fa-cog"></i>
                        </div>
                      </div>
                      <div>
                        <span className="h6 mb-0">Quality design that is meant to last</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
        </div>
      </div>
    </div>
  </div>
)

const homeButton = (
  <Link to='/'>
    <button className='btn btn-link-danger btn-back'>
      <i className="fas fa-arrow-left"></i> Home
    </button>
  </Link>
)
