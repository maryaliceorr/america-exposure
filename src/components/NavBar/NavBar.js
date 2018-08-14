import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem}  from 'react-bootstrap';
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
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand >
            <Link to="/home" className="navbar-brand logo-nav">AMERICA EXPOSURE</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {
            authed ? (
              <Nav pullRight>
                <NavItem className="menu-hover" eventKey={1}>
                  <Link className="menu-linker" to="/home">HOME</Link>
                </NavItem>
                <NavItem className="menu-hover" eventKey={2}>
                  <Link className="menu-linker"  to="/make-a-trip">MAKE A TRIP</Link>
                </NavItem>
                <NavItem className="menu-hover" eventKey={3}>
                  <Link className="menu-linker"  to="/upcoming-trips">UPCOMING TRIPS</Link>
                </NavItem>
                <NavItem className="menu-hover" eventKey={4}>
                  <Link className="menu-linker"  to="/bucket-list">BUCKET LIST</Link>
                </NavItem>
                <NavItem eventKey={5}>
                  <button
                    className="btn btn-danger logout-button"
                    onClick = {logoutOfAppEvent}
                    >
                    LOGOUT
                  </button>
                </NavItem>
              </Nav>
            ) : (
              <Nav pullRight>
                <NavItem className="login-hover" eventKey={1}>
                  <Link className="login-linker" to="/register">LOGIN</Link>
                </NavItem>
              </Nav>
            )
          }
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


export default NavBar;
