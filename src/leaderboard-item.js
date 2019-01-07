import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const api_key = "f4903c56-7589-4d13-9a36-6a8fac44f2d1";
const lastMatchURL = "https://api.opendota.com/api/players/22319665/matches?limit=10&api_key=" + api_key;

export default class Navbar extends Component {

      constructor() {
            super();
            this.state = {
                  latestMatches: [],
                  kda: null,
            }
      };

      componentDidMount() {
            fetch(lastMatchURL)
            .then(response => response.json())
            .then(data => {
                  let latestMatches = data.map((match) => {
                        console.log(match.kills);
                        return(
                              <div key={match.response} className = "hero-kda">
                                    <span className="hero-kills">{match.kills}</span> / 
                                    <span className = "hero-deaths">{match.deaths}</span> /
                                    <span className = "hero-assists">{match.assists}</span>
                              </div>
                        )
                  })
                  this.setState({latestMatches: latestMatches});
            });
      };


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
                  		{this.state.latestMatches[0]}
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