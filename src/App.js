import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routeLinks from './Routes'
import Auth from './pages/auth/index'
import storage  from 'store'
import useGlobal from './services/useGlobal'

import './App.css'
// import PropTypes from 'prop-types'

function App() {
  // <Router>
  // 	<Switch>{routeLinks.map(route => <Route {...route} path={route.path} />)}</Switch>
  // </Router>
  
  const [gState, gActions] = useGlobal()
  let isLogin = storage.get('isLogin')
  useEffect(() => {
    if(!gState.loginLoaded) {
      gActions.getLogin()
    }
  })

  return (
    <React.Fragment>
      <Router>
        {
          isLogin ? 
            <Switch>
              { routeLinks().map(route => <Route {...route} path={route.path} />) }
            </Switch>
            : 
            <Switch>
              <Route path='/' component={Auth} />
            </Switch>
        } 
      </Router>
    </React.Fragment>
  )
}

export default App
