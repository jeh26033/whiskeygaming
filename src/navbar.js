import React, { Component } from 'react';
import './navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Navbar extends Component {


	render() {
    	return (
            <Router>
            	<div className = "nav-container">
                  <Link to={'/'} className = "nav-link">LATEST</Link>
                  <Link to={'/leaderboard'} className = "nav-link">LEADERBOARD</Link>
                  <Link to={'/create'} className = "nav-link">JOIN</Link>
                  <img src = "/pixelwhiskey.png" className = "wskb-logo"/>
        		  </div>
            </Router>

      //       <Router>
      //   <div className="nav-container">
      //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //       <Link to={'/'} className="navbar-brand">Whiskey Gaming</Link>
      //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //         <ul className="navbar-nav mr-auto">
      //         <li className="nav-item">
      //             <Link to={'/'} className="nav-link">Home</Link>
      //           </li>
      //           <li className="nav-item">
      //             <Link to={'/create'} className="nav-link">Create</Link>
      //           </li>
      //           <li className="nav-item">
      //             <Link to={'/index'} className="nav-link">Index</Link>
      //           </li>
      //         </ul>
      //       </div>
      //     </nav> <br/>
      //     <h2>Welcome to the Whiskey Gaming site</h2> <br/>
      //     <Switch>
      //         <Route exact path='/create' component={ Create } />
      //         <Route path='/edit/:id' component={ Edit } />
      //         <Route path='/index' component={ Index } />
      //     </Switch>
      //   </div>
      // </Router>
		)
  }
}	