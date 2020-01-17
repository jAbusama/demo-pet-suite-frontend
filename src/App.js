import React, { useEffect } from 'react'
import storage from 'store'
import { BrowserRouter as Router, Route, Switch, Links } from 'react-router-dom'
// import Nav from './components/Nav'
// import Login from './pages/auth/Login'
import Auth from './pages/auth/index'
import { adminRoutes, employeeRoutes, ownerRoutes } from './Routes'
import useGlobal from './services/useGlobal'
// import Login from './Components/Login'
// import Home from './Components/Pages/Home/Home'
// import Register from './Components/Register'
import './App.css'
// import PropTypes from 'prop-types'

function App() {
  // login = async (username, password) => {
  //   console.log('username: ', username, ' password: ', password)
  //   let res = await fetch('http://localhost:3333/api/user/login', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json, text/plain',
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify({ username: username, password: password })
  //   })
  //   let data = await res.json()
  //   console.log(data)
  //   if (data.status) {
  //   }
  // }

  // return (
  // 	<Router>
  // 		<div className='App'>
  // 			<Route exact path='/' component={Home} />
  // 			<Route
  // 				exact
  // 				path='/login'
  // 				render={(props) => (
  // 					<React.Fragment>
  // 						<Login login={this.login} />
  // 					</React.Fragment>
  // 				)}
  // 			/>
  // 			<Route exact path='/register' component={Register} />
  // 		</div>
  // 	</Router>
  // )

  // <Router>
  // 	<Switch>{routeLinks.map(route => <Route {...route} path={route.path} />)}</Switch>
  // </Router>
  useEffect(() => {
    // storage.clearAll()
  })

  const [gState, gActions] = useGlobal()
  
 
  return (
    <React.Fragment>
      { gState.isLogin ? 
        <Router>
          <Switch>{adminRoutes.map(route => <Route {...route} path={route.path} />)}</Switch> 
        </Router> : <Auth/>
      } 
    </React.Fragment>
  )
}

export default App
