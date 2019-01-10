import React, { Component } from 'react';
import './joinmenu.scss';
import playerIDList from './playerIDList.json';

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
            playerIDList.push(parseInt(content));
            console.log(playerIDList);
      }

      render() {

            return (
                  <div className = "join-menu-container">
                        <div className = "join-input-container">
                                    <input className = "join-ID-field"></input>
                                    <button className = "ID-submit-button" onClick = {this.handleSubmit} >Submit</button>
                              
                        </div>
                  </div>
            )
      }
} 