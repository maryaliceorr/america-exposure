import React, { Component } from 'react';
import {Route, BrowserRouter, Redirect, Switch}  from 'react-router-dom';
import firebase from 'firebase';

import './App.css';

import BucketListPage from '../pages/BucketListPage/BucketListPage';
import CategoryPage from '../pages/CategoryPage/CategoryPage';
import Homepage from '../pages/Homepage/Homepage';
import LoginPage from '../pages/LoginPage/LoginPage';
import MakeATripPage from '../pages/MakeATripPage/MakeATripPage';
import NavBar from '../components/NavBar/NavBar';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import SplashPage from '../pages/SplashPage/SplashPage';
import SpotPage from '../pages/SpotPage/SpotPage';
import SpotsPage from '../pages/SpotsPage/SpotsPage';
import SubCategoryPage from '../pages/SubCategoryPage/SubCategoryPage';
import UpcomingTripsPage from '../pages/UpcomingTripsPage/UpcomingTripsPage';
import TripCard from '../components/TripCard/TripCard';
import NewTrip from '../components/NewTrip/NewTrip';
import EditTrip from '../components/EditTrip/EditTrip';
import fbConnection from '../firebaseCalls/connection';
fbConnection();

const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{pathname: '/', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

const PublicRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{pathname: '/home', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

class App extends React.Component {
  state={
    authed: false,
  }

  componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged((visitor) => {
      if (visitor) {
        this.setState({authed: true});
      } else {
        this.setState({authed: false});
      }
    });
  }

  componentWillUnmount () {
   this.removeListener();
  }

  adios = () => {
    this.setState({authed: false});
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar
              authed={this.state.authed}
              adios={this.adios}
            />
            <div className="container">
              <Switch>
                <Route path="/" exact component={SplashPage}/>
                <PublicRoute
                path="/register"
                authed={this.state.authed}
                component={RegisterPage}
                />
                <PublicRoute
                  path="/login"
                  authed={this.state.authed}
                  component={LoginPage}
                />
                <PrivateRoute
                  path="/home"
                  authed={this.state.authed}
                  component={Homepage}
                />
                <PrivateRoute
                  path="/bucket-list"
                  authed={this.state.authed}
                  component={BucketListPage}
                />
                <PrivateRoute
                  path="/spots/:filterType/:id"
                  authed={this.state.authed}
                  component={SubCategoryPage}
                />
                <PrivateRoute
                  path="/upcoming-trips"
                  authed={this.state.authed}
                  component={UpcomingTripsPage}
                />
                <PrivateRoute
                  path="/spot/:id"
                  authed={this.state.authed}
                  component={SpotPage}
                />
                <PrivateRoute
                  path="/make-a-trip"
                  authed={this.state.authed}
                  component={MakeATripPage}
                />
                <PrivateRoute
                  path="/spots/:filterType"
                  authed={this.state.authed}
                  component={CategoryPage}
                />
                <PrivateRoute
                  path="/trip/:tripId"
                  authed={this.state.authed}
                  component={TripCard}
                />
                <PrivateRoute
                  path="/new/trip"
                  authed={this.state.authed}
                  component={NewTrip}
                />
                <PrivateRoute
                  path="/edit/trip/:tripId"
                  authed={this.state.authed}
                  component={EditTrip}
                />

              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
