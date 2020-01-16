import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      mobile: '',
      username: '',
      password: ''
    }
  }

  register = async e => {
    e.preventDefault()
    const res = await fetch(`http://localhost:3333/api/users`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        mobile: this.state.mobile,
        username: this.state.username,
        password: this.state.password
      })
    })
    let data = await res.json()
    console.log(data)
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <div className='container' style={containerStyle}>
          <div className='d-flex justify-content-center h-100'>
            <div className='card' style={cardStyle}>
              <div className='card-header'>
                <h3>Register</h3>
                <div className='d-flex justify-content-end social_icon'>
                  <span>
                    <i className='fab fa-facebook-square'></i>
                  </span>
                  <span>
                    <i className='fab fa-google-plus-square'></i>
                  </span>
                  <span>
                    <i className='fab fa-twitter-square'></i>
                  </span>
                </div>
              </div>
              <div className='card-body'>
                <form onSubmit={this.register}>
                  <div className='form-group'>
                    <div className='input-group form-group'>
                      <div className='input-group-prepend'>
                        <span className='input-group-text'>
                          <i className='fas fa-user'></i>
                        </span>
                      </div>
                      <input
                        type='text'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='input-group form-group'>
                      <div className='input-group-prepend'>
                        <span className='input-group-text'>
                          <i className='fas fa-user'></i>
                        </span>
                      </div>
                      <input
                        type='text'
                        name='mobile'
                        className='form-control'
                        placeholder='Mobile #.'
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='input-group form-group'>
                      <div className='input-group-prepend'>
                        <span className='input-group-text'>
                          <i className='fas fa-user'></i>
                        </span>
                      </div>
                      <input
                        type='text'
                        name='username'
                        className='form-control'
                        placeholder='Username'
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className='input-group form-group'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>
                        <i className='fas fa-key'></i>
                      </span>
                    </div>
                    <input
                      type='password'
                      name='password'
                      className='form-control'
                      placeholder='password'
                      onChange={this.onChange}
                    />
                  </div>
                  <div className='btn-group d-flex'>
                    <input
                      type='submit'
                      value='Register'
                      className='btn float-right justify-content-center btn_style'
                    />
                  </div>
                </form>
              </div>
              <div className='card-footer'>
                <div className='d-flex justify-content-center links'>
                  Have an account already?<a href='/login'>Login</a>
                </div>
                <div className='d-flex justify-content-center'>
                  <a href='#'>Forgot your password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const cardStyle = {
  height: '450px',
  marginTop: '100px',
  marginBottom: 'auto',
  width: '400px',
  backgroundColor: 'rgba(0, 0, 0, 0.5) !important'
}
const containerStyle = {
  height: '100%',
  alignContent: 'center'
}

Register.propTypes = {}

export default Register
