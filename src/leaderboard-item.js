import React, { Component } from 'react';

export default class Navbar extends Component {


      render() {
            return (
                  <div className = "leaderboard-item">
                  	<div className = "hero-info">
                  		<img src = "/img/rubick_test.png" className = "hero-icon"></img>
                  		<div className = "hero-name">Rubick</div>
                  	</div>
                  	<div className = "hero-statline">
                  		<div className = "hero-kda">3 / 2 / 14</div>
                  		<div className = "hero-gpm">322 gpm</div>
                  		<div className = "hero-xpm">450 xpm</div>
                  	</div>
                  	<div className = "hero-items-list">
                  		<img src = "test-item.png" className = "statline-item"></img>
                  		<img src = "test-item.png" className = "statline-item"></img>
                  		<img src = "test-item.png" className = "statline-item"></img>
                  		<img src = "test-item.png" className = "statline-item"></img>
                  		<img src = "test-item.png" className = "statline-item"></img>
                  		<img src = "test-item.png" className = "statline-item"></img>
                  	</div>
                  </div>
            )
      }
}	