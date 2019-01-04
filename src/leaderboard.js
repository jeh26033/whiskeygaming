import React, { Component } from 'react';
import './leaderboard.scss';
import LeaderboardItem from './leaderboard-item';

const api_key = "f4903c56-7589-4d13-9a36-6a8fac44f2d1";
const openDotaURL = "https://api.opendota.com/api/matches/4311550282?api_key=" + api_key;

export default class Leaderboard extends Component {

      constructor() {
            super();

            fetch(openDotaURL, {
                  method: "GET", // *GET, POST, PUT, DELETE, etc.
                  mode: "cors", // no-cors, cors, *same-origin
                  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                  headers: {
                      "Content-Type": "application/json; charset=utf-8",
                      // "Content-Type": "application/x-www-form-urlencoded",
                  },
                  redirect: "follow", // manual, *follow, error
                  referrer: "no-referrer" // no-referrer, *client
            });
      };


      render() {
            return (
                  <div className = "leaderboard-container">
                        < LeaderboardItem />
                        < LeaderboardItem />
                        < LeaderboardItem />
                        < LeaderboardItem />
                  </div>
            )
      }
}	