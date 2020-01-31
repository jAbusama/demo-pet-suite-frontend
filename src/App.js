import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { login, register} from './pages/auth/index'
import index from './public/index'
import routeLinks from './Routes'


import storage  from 'store'
import useGlobal from './services/useGlobal'

import './App.css'
// import PropTypes from 'prop-types'

function App() {

  const [gState, gActions] = useGlobal()
  let isLogin = storage.get('isLogin')
  let user = storage.get('user')
  useEffect(() => {
    // storage.clearAll()
    if(!gState.loginLoaded) {
      gActions.getLogin()
    }
  })

  return (
    <React.Fragment>
      <Router>
        {
          isLogin ?
            user.role === 'owner' ? 
              <Switch>
                 <Route exact path='/' component={ index } />
              </Switch> 
              :    
              <Switch>
                { routeLinks().map(route => <Route {...route} path={route.path} />) }
              </Switch>
            : 
            <Switch>
              <Route exact path='/' component={ index } />
              <Route exact path='/login' component={ login } />
              <Route path='/register' component={ register } />
            </Switch>
        } 
      </Router>
    </React.Fragment>
  )
}

export default App
