import React, { Component } from 'react';
import weatherReq from '../../utils/weather-request';
import {
  LocationInput,
  WeekList,
} from '../../components';
import './App.css';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      err: '',
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

  success = async ({ coords }) => {
    const { latitude, longitude } = coords;
    const latLon = {
      lat: latitude,
      lon: longitude,
    };

    try{
      const { data } = await weatherReq(latLon);
      this.setState({ data });
    } catch (err) {
      this.setState({ err })
    }
  }

  receiveLocation = async (type, value) => {
    try {
      if (type === 'zipcode') {
        const { data } = await weatherReq({ zipcode: value });
        this.setState({ data });
      } else {
        const { data } = await weatherReq({ city: value });
        this.setState({ data });
      }
    } catch (err) {
      this.setState({ err })
    }
  }

  error = (err) => {
    this.setState({ err });
  }

  render() {
    const { data } = this.state; 
    console.log(data);
    return (
      <div>
        {Object.keys(data).length > 0 ?
          <div className="appContainer">
            <h1>React Weather</h1>
            <LocationInput
              receiveLocation={this.receiveLocation}
            />
            <ul className="weekList">
              {data.list.map(current => <WeekList key={current.dt} {...current}/>)}
            </ul>
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
