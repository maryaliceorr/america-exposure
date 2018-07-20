import React, { Component } from 'react';
import {Route, BrowserRouter, Redirect, Switch}  from 'react-router-dom';
import firebase from 'firebase';

import './App.css';

// import BucketList from '../components/BucketList/BucketList';
// import CameraNav from '../components/CameraNav/CameraNav';
import Homepage from '../components/Homepage/Homepage';
// import Landscapes from '../components/Landscapes/Landscapes';
import Login from '../components/Login/Login';
// import MakeATrip from '../components/MakeATrip/MakeATrip';
import NavBar from '../components/NavBar/NavBar';
// import Regions from '../components/Regions/Regions';
import Register from '../components/Register/Register';
// import Seasons from '../components/Seasons/Seasons';
import SplashPage from '../components/SplashPage/SplashPage';
// import Spot from '../components/Spot/Spot';
// import Spots from '../components/Spots/Spots';
// import SpotsCard from '../components/SpotsCard/SpotsCard';
// import TimeOfDay from '../components/TimeOfDay/TimeOfDay';
// import TripCard from '../components/TripCard/TripCard';
// import TripForm from '../components/TripForm/TripForm';
// import UpcomingTrips from '../components/UpcomingTrips/UpcomingTrips';
import fbConnection from '../firebaseCalls/connection';
fbConnection();

const PrivateRoute = ({component: Compontent, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{pathname: '/register', state: {from: props.location}}}
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
            to={{pathname: '/', state: {from: props.location}}}
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

  removeListener = firebase.auth().onAuthStateChanged((visitor) => {
    if (visitor) {
      this.setState({authed: true});
    } else {
      this.setState({authed: false});
    }
  });

  componentDidMount () {
    this.removeListener();
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
                <Route path="/america-exposure" exact component={SplashPage}/>
                <PublicRoute
                path="/register"
                authed={this.state.authed}
                component={Register}
                />
                <PublicRoute
                  path="/login"
                  authed={this.state.authed}
                  component={Login}
                />
                <PrivateRoute
                  path="/"
                  authed={this.state.authed}
                  component={Homepage}
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
