import React, { Component } from 'react';
import './joinmenu.scss';
import playerIDList from './playerIDList.json';
const fs = require('fs');

export default class JoinMenu extends Component {

      constructor() {
            super();

            this.state = {
                  
            }

            this.handleSubmit = this.handleSubmit.bind(this);
            console.log(playerIDList);
      }

      handleSubmit(event) {
            var input = this;
            var content = document.querySelectorAll('.join-ID-field')[0].value;
            content = parseInt(content)
            if(Number.isInteger(content) && content.toString().length > 6) {
                  playerIDList.push(parseInt(content));
                  console.log(playerIDList);
            } else {
                  alert("That doesn't look like a player ID");
            }
      }

      render() {

            return (
                  <div className = "join-menu-container">
                        <div className = "join-input-container">
                                    <input className = "join-ID-field" placeholder="Paste your Dotabuff or Opendota ID here"></input>
                                    <button className = "ID-submit-button" onClick = {this.handleSubmit} >Submit</button>
                              
                        </div>
                  </div>
            )
      }
} 