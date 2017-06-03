import React, { Component } from 'react';
import weatherReq from '../../utils/weather-request';
import {
  LocationInput,
} from '../../components';
import './App.css';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
    }
  }

  componentDidMount() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    navigator
    .geolocation
    .getCurrentPosition(this.success, this.error, options)
  }

  success = ({ coords }) => {
    const { latitude, longitude } = coords;
    this.setState({
      latitude,
      longitude,
    })

    console.log(latitude, longitude);
    // console.log(data);
  }

  error = (error) => {
    console.log('ERROR', error);
  }

  render() {
    const { latitude, longitude } = this.state;
    return (
      <div>
        {latitude && longitude ?
          <div className="appContainer">
            <h1>Search Location for Weather</h1>
            <LocationInput
              latitude={latitude}
              longitude={longitude}
            />
          </div>
          : 
          <div className="noGeo">
            <h1>No Geo</h1>
          </div>
        }
      </div>

      
    );
  }
}

export default AppComponent;
