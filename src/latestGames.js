import React, { Component } from 'react';
import './latestGames.scss';
import LatestGameComp from './latest-game-item';
import playerIDList from './playerIDList.json';

export default class LatestGames extends Component {

      constructor() {
            super();

            this.state = {
                  latestGames: [],
            }
      }

      componentDidMount() {
            for (var i = 0; i < playerIDList.length; i++) {
                  this.state.latestGames.push(< LatestGameComp playerID = { playerIDList[i] } />)
            };

            let latestGamesHTML = this.state.latestGames;

            this.setState({latestGamesHTML: latestGamesHTML})
      }    


      render() {

            return (
                  <div className = "latest-game-container">
                        {this.state.latestGamesHTML}
                  </div>
            )
      }
}	