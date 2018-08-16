import React from 'react';
import {DropdownButton, MenuItem, Alert, Panel } from 'react-bootstrap';
import subCategoriesRequest from '../../firebaseCalls/subCategories';
import spotRequests from '../../firebaseCalls/spots';
import tripRequests from '../../firebaseCalls/trip';
import authRequests from '../../firebaseCalls/auth';
import tripSpotRequests from '../../firebaseCalls/tripSpot';
import bucketListRequests from '../../firebaseCalls/bucketList';

import './SpotPage.css';


class SpotPage extends React.Component {
  state = {
    spot: {},
    trips: [],
    alert: {
      show: false,
      spotName: "",
      tripName:"",
    },
    bucketAlert: {
      show: false,
      spotName:"",
      bucketList: "",
    }
  }

  closeAlert = () => {
    const emptyAlert = {
      show: false,
      spotName: "",
      tripName:"",
    }
    this.setState({alert: emptyAlert});
  }

  closeBucketAlert = () => {
    const emptyAlert = {
      show: false,
      spotName: "",
      bucketList: "",
    }
    this.setState({bucketAlert: emptyAlert});
  }

  componentDidMount () {
    const spotId = this.props.match.params.id;
    const uid = authRequests.getUID();
    subCategoriesRequest
    .getSubCategories()
    .then((subCategories) => {
      this.setState({subCategories})
    })
    .catch((error) => {
      console.error('error with get subCategories request', error);
    });
    spotRequests
      .getSingleSpot(spotId)
      .then((spot) => {
        this.setState({spot});
        tripRequests
        .getTrips(uid)
        .then((trips) => {
        this.setState({trips})
        })
        .catch((error) => {
          console.error('error with get Trips', error);
        });
      })
      .catch((error) => {
        console.error('error with get request for Spots', error);
      });
  }

  postTripSpot = (e) => {
    const tripSpot = {
      tripId: (e),
      spotId: (this.props.match.params.id)
    }
    const newAlert = {
      show: true,
      spotName: this.state.spot.locationName,
      tripName: this.state.trips.find(x => x.id === tripSpot.tripId).tripName,
    }
    tripSpotRequests
      .postTripSpots(tripSpot)
      .then(() => {
        this.setState({alert: newAlert});
      })
      .catch((error) => {
        console.error('error with postTripSpot request', error);
      });
  }

  postBucketSpot = () => {
    const bucketSpot = {
      uid: authRequests.getUID(),
      bucketSpotId: (this.props.match.params.id)
    }
    const newBucketAlert = {
      show: true,
      spotName: this.state.spot.locationName,
      bucketList: this.props.match.params.id,
    }
    bucketListRequests
      .postBucketSpots(bucketSpot)
      .then(() => {
        this.setState({bucketAlert: newBucketAlert});
      })
      .catch((error) => {
        console.error('error with postBucketSpot request', error);
      });
  }

  render () {
    const {spot} = this.state;
    const imageUrl = spot.image ? require(`../../images/spots/${spot.image}`) : null;

    const dropdownTrips = this.state.trips.map((trip) => {
      return (
      <MenuItem
        onSelect = {this.postTripSpot}
        eventKey={trip.id}>
        {trip.tripName}
      </MenuItem>
      )
    })

    const alertStuff = () => {
      const myAlert = this.state.alert;
      if(myAlert.show){
        return (
          <Alert
            bsStyle="success"
            onDismiss={this.closeAlert}
            className="text-center"
          >You've successfully added <span className="upper-text">{myAlert.spotName}</span> to your <span className="upper-text">{myAlert.tripName} Trip!</span></Alert>
        )
      }
    }

    const bucketAlertStuff = () => {
      const myAlert = this.state.bucketAlert;
      if(myAlert.show){
        return (
          <Alert
            bsStyle="success"
            onDismiss={this.closeBucketAlert}
            className="text-center"
          >You've successfully added <span className="upper-text">{myAlert.spotName}</span> to your <span className="upper-text">Bucket List!</span></Alert>
        )
      }
    }

    return (
      <div className="SpotPage">
      <Panel className="col-md-8 col-md-offset-2">
        <Panel.Heading>
          <Panel.Title>
            <h1 className="text-center">{spot.locationName}</h1>
          </Panel.Title>
          {spot.parkStatus === "true" ? <h3 className="national-park text-center">{spot.parkName}</h3> : <span></span> }
        </Panel.Heading>
        <Panel.Body>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <img className="spot-pic"src={imageUrl} alt={spot.locationName} />
          </div>
          <div className="col-md-6 col-sm-6">
            <h3><strong>Details:</strong></h3>
            <h4><strong>Location: </strong>{spot.city}, {spot.stateAbb}</h4>
            <h4><strong>Region: </strong>{spot.region}</h4>
            <h4><strong>Landscape Category: </strong>{spot.landscapeType}</h4>
            <h4><strong>Best Time of Day to Shoot: </strong>{spot.time}</h4>
            <h4><strong>Best Season to Shoot: </strong>{spot.season}</h4>
            {spot.permit === true ? <h4><strong>Permit: </strong>Required</h4> : <h4>Permit: Not Required</h4> }
            <h3><strong>Coordinates:</strong></h3>
            <h4><strong>Latitude: </strong>{spot.latitude}</h4>
            <h4><strong>Longitude: </strong>{spot.longitude}</h4>
          </div>
        </div>
        {spot.seasonDescription ? <p><span className="description"><strong>Seasonality Details:</strong></span> {spot.seasonDescription}</p> : <span> </span>}
          <p><span className="description"><strong>Description:</strong></span> {spot.description}</p>
        <div className="text-center">
          {alertStuff()}
          {bucketAlertStuff()}
        </div>
        <div className="text-center drop-button-group">
          <DropdownButton
            bsStyle={"default"}
            title="Select A Trip"
            id="dropdown1"
            className="drop-button"
          >
          <MenuItem
            onSelect = {this.postBucketSpot}
            >
            Bucket List
          </MenuItem>
            {dropdownTrips}
          </DropdownButton>
        </div>

        </Panel.Body>
      </Panel>
    <div className="extra-space"></div>
  </div>
    );
  }
}

export default SpotPage;
