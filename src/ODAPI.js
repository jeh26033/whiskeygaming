import React, { Component } from 'react';
import './leaderboard.scss';

const api_key = "f4903c56-7589-4d13-9a36-6a8fac44f2d1";
const lastMatchURL = "https://api.opendota.com/api/players/22319665/matches?limit=10&api_key=" + api_key;

export default class OpenDotaFetch extends Component {

      constructor() {
            super();
            this.state = {
                  latestMatches: [],
            }
      };

      componentDidMount() {
            fetch(lastMatchURL)
            .then(response => response.json())
            .then(data => {
                  this.setState({latestMatches: data});
                  console.log(this.state.latestMatches[0].kills);
                  return this.state.latestMatches;
            });
      };


      render() {
            return (
                  <div />
            )
      }
}	