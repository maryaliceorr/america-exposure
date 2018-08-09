import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar}  from 'react-bootstrap';
import fbAuthRequests from '../../firebaseCalls/auth';

import './NavBar.css';

class NavBar extends React.Component {
  render () {
    const {authed, adios} = this.props;
    const logoutOfAppEvent = () => {
      fbAuthRequests.logoutVisitor();
      adios();
    };

    return (
      <div className="NavBar">
          <nav className="navbar navbar-default">
          <div className="container-fluid">
          <Navbar.Header>
            <div className="navbar-header">

              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/home" className="navbar-brand logo-nav">AMERICA EXPOSURE</Link>
            </div>
            </Navbar.Header>
            <Navbar.Collapse>
            <div className="collapse navbar-collapse">
              {
                authed ? (
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to="/home" className="navbar-brand">HOME</Link>
                    </li>
                    <li>
                      <Link to="/make-a-trip" className="navbar-brand">MAKE A TRIP</Link>
                    </li>
                    <li>
                      <Link to="/upcoming-trips" className="navbar-brand">UPCOMING TRIPS</Link>
                    </li>
                    <li>
                      <Link to="/bucket-list" className="navbar-brand">BUCKET LIST</Link>
                    </li>
                    <li className="navbar-form">
                      <button
                        className="btn btn-danger"
                        onClick = {logoutOfAppEvent}
                        >
                        LOGOUT
                      </button>
                    </li>
                  </ul>
                ) : (
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link className="login-link" to="/register">LOGIN</Link>
                    </li>
                  </ul>
                )
              }

            </div>
            </Navbar.Collapse>
          </div>
        </nav>
      </div>
    );
  }
}


export default NavBar;
