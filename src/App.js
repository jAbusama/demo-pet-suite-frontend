import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routeLinks from './Routes'
import storage  from 'store'
import useGlobal from './services/useGlobal'
import './App.css'

function App() {

  // storage.clearAll()
  const [gState, gActions] = useGlobal()
  let isLogin = storage.get('isLogin')
  let user = storage.get('user')
  
  useEffect(() => {
    if(isLogin) {
      gActions.getLogin(user.id)
    }
  },[])
  
  return (
      <Router>
        <div className='App'>
          <Switch>
            { routeLinks.map(route => <Route {...route} />) }
          </Switch>
        </div>
      </Router>
  )
}

export default App
