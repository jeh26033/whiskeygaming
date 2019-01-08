import React, { Component } from 'react';
import './leaderboard.scss';
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


export default class Leaderboard extends Component {

      constructor() {
            super();

            this.state = {
                  latestGames: [],
            }
      }

      componentDidMount() {

      }


      render() {

            return (
                  <div className = "leaderboard-container">
                  </div>

            )
      }
}	