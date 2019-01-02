import React, { Component } from 'react';
import './navbar.css';

export default class Navbar extends Component {


	render() {
    	return (
        	<div className = "nav-container">
        		<div className = "nav-link" id = "home-link">HOME</div>
        		<div className = "nav-link" id = "leaderboard-link">LEADERBOARD</div>
        		<div className = "nav-link" id = "profile-link">PROFILE</div>
	        	<div className = "button" id = "hamburger-icon">&#9776;</div>
        		<div className = "button" id = "steam-login-button">LOGIN WITH STEAM</div>
    		</div>
		)
  }
}	