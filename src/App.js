import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import routeLinks from './Routes'
import storage  from 'store'
import useGlobal from './services/useGlobal'
import './App.css'

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


  // console.log(props)

  return (
    <React.Fragment>
      <Router>
        {
          isLogin ?
            user.role === 'owner' ? 
              <Switch>
                 {/* <Route exact path='/' component={ index } /> */}
              </Switch> 
              :    
              <Switch>
                {/* <Redirect to='/' /> */}
                { routeLinks().map(route => <Route {...route} path={route.path} />) }
              </Switch>
            : 
            <Switch>
              { routeLinks().map(route => <Route {...route} path={route.path} />) }
            </Switch>
        } 
      </Router>
    </React.Fragment>
  )
}

export default App
