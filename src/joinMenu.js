import React, { Component } from 'react';
import './joinmenu.scss';
import playerIDList from './playerIDList.json';
import { BrowserRouter as Route, Link } from 'react-router-dom';
const fs = require('fs');
const getPlayerURL = "https://api.opendota.com/api/players/"
const api_key = "f4903c56-7589-4d13-9a36-6a8fac44f2d1";

export default class JoinMenu extends Component {

      constructor() {
            super();

            this.state = {
                  playerURL: null,
                  latestPlayerData: null,
                  playerName: null,
                  playerPic: null,
                  playerPageURL: null,
            }

            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleConfirm = this.handleConfirm.bind(this);
      }

      handleConfirm(event) {
            var input = this;
            var content = document.querySelectorAll('.join-ID-field')[0].value;
            content = parseInt(content)

            if(Number.isInteger(content) && content.toString().length > 6) {

                  fetch((getPlayerURL + content + "?api_key=" + api_key))
                  .then(response => response.json())
                  .then(data => {
                        this.setState({latestPlayerData: data})
                        this.setState({playerName: this.state.latestPlayerData.profile.personaname})
                        this.setState({playerPic: this.state.latestPlayerData.profile.avatarmedium})
                        this.setState({playerPageURL: ("https://wwww.dotabuff.com/players/"+this.state.latestPlayerData.profile.account_id)})
                        document.querySelectorAll('.confirm-input-container')[0].classList.remove("hidden");
                  });
            } else {
                  alert("That doesn't look like a player ID");
            }
      }

      handleSubmit(event) {
            var input = this;
            var content = document.querySelectorAll('.join-ID-field')[0].value;
            content = parseInt(content)
            playerIDList.push(parseInt(content));
            console.log("ID: " + content + " submitted!");
            console.log(playerIDList);
      }

      render() {

            return (
                  <div className = "join-menu-container">
                        <div className = "join-input-container">
                                    <input className = "join-ID-field" placeholder="Paste your Dotabuff or Opendota ID here"></input>
                                    <button className = "ID-submit-button" onClick = {this.handleConfirm} >Submit</button>
                              
                        </div>
                        <div className = "confirm-input-container hidden">
                              <div className = "confirm-details">
                                    <div className = "confirm-avatar"><img src={this.state.playerPic} /></div>
                                    <div className = "confirm-name"><a href = {this.state.playerPageURL} target = "_blank">{this.state.playerName}</a></div>
                              </div>
                              <div className = "confirm-text" onClick = {this.handleSubmit} ><Link to='/'>Yep, that's my account</Link></div>
                        </div>
                  </div>
            )
      }
} 