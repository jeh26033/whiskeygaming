import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const api_key = "f4903c56-7589-4d13-9a36-6a8fac44f2d1";
var lastMatchID = null;
const lastMatchURL = "https://api.opendota.com/api/matches/"
var getHeroURL = "https://api.opendota.com/api/herostats/"
const getPlayerURL = "https://api.opendota.com/api/players/"
var itemConstants = Object.entries(require('./item_constants.json'));

export default class LeaderboardDetailItem extends Component {

      constructor(playerID) {
            super(playerID);
            this.state = {
                  latestMatch: null,
                  latestPlayerData: null,
                  latestHeroID: 0,
                  playerURL: getPlayerURL + this.props.playerID,
            }
      };

      componentDidMount() {
            fetch(this.state.playerURL)
            .then(response => response.json())
            .then(data => {
                  console.log(data);
                  this.setState({latestPlayerData: data})
            })
      };


      render() {
            return (
                  <div className = "leaderboard-detail-item">
                  	{this.props.playerID}
                  </div>
            )
      }
}	