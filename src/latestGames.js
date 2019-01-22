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
                        <div className = "latest-games-header">
                              <div className = "latest-games-header-item" id = "first-header-item">Role</div>
                              <div className = "latest-games-header-item">Level</div>
                              <div className = "latest-games-header-item">KDA</div>
                              <div className = "latest-games-header-item">Lh/Dn</div>
                              <div className = "latest-games-header-item" id = "gpm-xpm">GPM/XPM</div>
                              <div className = "latest-games-header-item" id = "net-worth">Net<br/>Worth</div>
                        </div>
                        {this.state.latestGamesHTML}
                  </div>
            )
      }
}	