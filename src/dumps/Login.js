import React, { Component } from 'react'
import PropTypes from 'prop-types'

const initialState = {
  username: '',
  password: '',
  errorUsername: '',
  erroPassword: ''
}
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      errorUsername: '',
      errorPassword: ''
    }
  }

  validate = () => {
    let errorUsername = ''
    let errorPassword = ''
    if (this.state.username === '') {
      errorUsername = 'This is field is required'
    }
    if (this.state.password === '') {
      errorPassword = 'This field is required'
    }
    if (errorUsername || errorPassword) {
      this.setState({ errorUsername, errorPassword })
      return false
    }
    return true
  }

  onSubmit = e => {
    e.preventDefault()
    if (this.validate()) {
      this.props.login(this.state.username, this.state.password)
      console.log(this.state)
      this.setState({ username: '' })
      this.setState({ password: '' })
      this.setState({ errorUsername: '' })
      this.setState({ errorPassword: '' })
    }
  }
  onChange = e => {
    //console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <div className='d-flex justify-content-center h-100'>
            <div className='card card-login'>
              <div className='card-header'>
                <h3>Sign In</h3>
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
                <form onSubmit={this.onSubmit}>
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
                      value={this.state.username}
                    />
                  </div>
                  <div className='form-group' style={{ color: 'red' }}>
                    {this.state.errorUsername}
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
                      value={this.state.password}
                      onChange={this.onChange}
                      className='form-control'
                      placeholder='Password'
                    />
                  </div>
                  <div className='form-group' style={{ color: 'red' }}>
                    {this.state.errorPassword}
                  </div>
                  <div className='row align-items-center remember'>
                    <input type='checkbox' /> Remember me?
                  </div>
                  <div className='btn-group d-flex '>
                    <input
                      type='submit'
                      className='btn btn_style justify-content-center float-right'
                      value='Login'
                    />
                  </div>
                </form>
              </div>
              <div className='card-footer'>
                <div className='d-flex justify-content-center links'>
                  Don't have an account? &nbsp;<a href='/register'>Sign Up</a>
                </div>
                <div className='d-flex justify-content-center'>
                  <a href=' #'>Forgot your password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Login.propTypes = {}

export default Login
