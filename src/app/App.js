import React, { Component } from 'react';

import BucketList from '../components/BucketList/BucketList';
import CameraNav from '../components/CameraNav/CameraNav';
import Homepage from '../components/Homepage/Homepage';
import Landscapes from '../components/Landscapes/Landscapes';
import Login from '../components/Login/Login';
import MakeATrip from '../components/MakeATrip/MakeATrip';
import NavBar from '../components/NavBar/NavBar';
import Regions from '../components/Regions/Regions';
import Register from '../components/Register/Register';
import Seasons from '../components/Seasons/Seasons';
import Spot from '../components/Spot/Spot';
import Spots from '../components/Spots/Spots';
import SpotsCard from '../components/SpotsCard/SpotsCard';
import TimeOfDay from '../components/TimeOfDay/TimeOfDay';
import TripCard from '../components/TripCard/TripCard';
import TripForm from '../components/TripForm/TripForm';
import UpcomingTrips from '../components/UpcomingTrips/UpcomingTrips';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App text-center">
        <BucketList />
        <CameraNav />
        <Homepage />
        <Landscapes />
        <Login />
        <MakeATrip />
        <NavBar />
        <Regions />
        <Register />
        <Seasons />
        <Spot />
        <Spots />
        <SpotsCard />
        <TimeOfDay />
        <TripCard />
        <TripForm />
        <UpcomingTrips />
      </div>
    );
  }
}

export default App;
