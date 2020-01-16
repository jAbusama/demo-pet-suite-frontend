import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Links } from 'react-router-dom'
import Nav from './components/Nav'
import Login from './pages/auth/Login'
import routeLinks from './Routes'
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

	return (
		<div>
			<Login />
		</div>
	)
}

export default App
