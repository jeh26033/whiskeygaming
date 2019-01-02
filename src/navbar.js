import React, { Component } from 'react';
import './navbar.css';

export default class Navbar extends Component {


	render() {
    	return (
        	<div className = "nav-container">
        		<div className = "nav-link" id = "home-link">
                    <Link to={'/'}>HOME</Link>
                </div>
        		<div className = "nav-link" id = "leaderboard-link">
                    <Link to={'/'}>LEADERBOARD</Link>
                </div>
	        	<div className = "button" id = "hamburger-icon">&#9776;</div>
        		<div className = "nav-link" id = "join-link">
                    <Link to={'/'}>JOIN</Link>
                </div>
    		</div>
		)
  }
}	