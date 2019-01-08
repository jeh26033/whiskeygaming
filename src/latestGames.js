import React, { Component } from 'react';
import './latestGames.scss';
import LatestGameComp from './latest-game-item';
const playerArray = [
      22319665,
      80456250,
      108839928,
      40322344,
      35019058,
      240507106,
      8626597,
      73590735
      ];

export default class LatestGames extends Component {

      constructor() {
            super();

            this.state = {
                  latestGames: [],
            }
      }

      componentDidMount() {
            for (var i = 0; i < playerArray.length; i++) {
                  this.state.latestGames.push(< LatestGameComp playerID = { playerArray[i] } />)
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