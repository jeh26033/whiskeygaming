import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Navbar extends Component {


      render() {
            return (
                  <div className = "leaderboard-item">
                  	<div className = "player-info">
                  		<img src = "/img/rubick_test.png" className = "hero-icon" />
                              <div className = "name-block">
                                    <div className = "player-name">
                                          <a href="https://www.dotabuff.com">Dark Arbiter</a>
                                    </div>
                                    <div className = "hero-name">Rubick</div>
                              </div>
                  	</div>
                        <div className = "hero-role">SUPPORT</div>
                  	<div className = "hero-statline">
                              <div className = "hero-level">19</div>
                  		<div className = "hero-kda"><span className = "hero-kills">3</span> / <span className = "hero-deaths">2</span> / <span className = "hero-assists">14</span></div>
                              <div className = "hero-cs"><span className = "hero-lh">104</span>/<span className = "hero-denies">10</span></div>
                  		<div className = "hero-gpm">322 gpm</div>
                  		<div className = "hero-xpm">450 xpm</div>
                              <div className = "hero-networth">25.4k</div>
                  	</div>
                  	<div className = "hero-items-list">
                  		<img src = "test-item.png" className = "statline-item" />
                  		<img src = "test-item.png" className = "statline-item" />
                  		<img src = "test-item.png" className = "statline-item" />
                  		<img src = "test-item.png" className = "statline-item" />
                  		<img src = "test-item.png" className = "statline-item" />
                  		<img src = "test-item.png" className = "statline-item" />
                  	</div>
                  </div>
            )
      }
}	