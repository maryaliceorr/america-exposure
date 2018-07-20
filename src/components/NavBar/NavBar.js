import React from 'react';
import {Link} from 'react-router-dom';
import fbAuthRequests from '../../firebaseCalls/auth';

import './NavBar.css';

class NavBar extends React.Component {
  render () {
    const {authed, adios} = this.props;
    const logoutOfAppEvent = () => {
      fbAuthRequests.logoutVisitor();
      adios();
    }

    return (
      <div className="NavBar">
            <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">American Exposure</Link>
            </div>
            <div className="collapse navbar-collapse">
              {
                authed ? (
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to="/" className="navbar-brand">Home</Link>
                    </li>
                    <li>
                      <Link to="/make-a-trip" className="navbar-brand">Make a Trip</Link>
                    </li>
                    <li>
                      <Link to="/upcoming-trips" className="navbar-brand">Upcoming Trips</Link>
                    </li>
                    <li>
                      <Link to="/upcoming-trips" className="navbar-brand">Bucket List</Link>
                    </li>
                    <li className="navbar-form">
                      <button
                        className="btn btn-danger"
                        onClick = {logoutOfAppEvent}
                        >
                        Logout
                      </button>
                    </li>
                  </ul>
                ) : (
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to="/login" className="navbar-brand">Login</Link>
                    </li>
                  </ul>
                )
              }

            </div>
          </div>
        </nav>
      </div>
    );
  }
}


export default NavBar;
