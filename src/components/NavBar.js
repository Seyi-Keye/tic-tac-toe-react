import React, { Component } from 'react';
// import { browserHistory, Link } from 'react-router';
import localforage from 'localforage';
import toastr from 'toastr';
// import { Registration } from '../components/Registration';


export class NavBar extends Component {
  constructor() {
    super();
    this.handleLogOut = this.handleLogOut.bind(this);
    // browserHistory.push('/Registration');
  }

  handleLogOut() {
    localforage.clear((() => {
      toastr.info('You have been Logged out', 'Info!!');
    }));
  }

  render() {
    const profile = localforage.getItem(profile);
    console.log(profile);
    return (
      <div>

        <nav className="navbar navbar-inverse topper">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand logo" href="#">Tac~AI Gang</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              { !profile && <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>}
              <li><a href="#"><span className="glyphicon glyphicon-play-circle"></span> Play a game</a></li>
              <li><a href="#"><span className="glyphicon glyphicon-info-sign"></span> How To Play</a></li>
              { profile && <li onClick={this.handleLogOut}><a href="#"><span className="glyphicon glyphicon-log-out"></span>Log-Out</a></li> }
            </ul>
            </div>
            <div>
            </div>
        </nav>

      </div>
    );
  }
}
