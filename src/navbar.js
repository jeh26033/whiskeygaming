import React, { Component } from 'react';
import './navbar.scss';
import { BrowserRouter as Route, Link } from 'react-router-dom';

export default class Navbar extends Component {


	render() {
    	return (
      	<div className = "nav-container">
                  <Link to='/' className = "nav-link">LATEST</Link>
                  <Link to='/leaderboard' className = "nav-link">LEADERBOARD</Link>
                  <Link to={'/create'} className = "nav-link">JOIN</Link>
                  <img src = "/wskg_notext.png" className = "wskb-logo"/>
      	</div>
	)
  }
}	