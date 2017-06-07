import React, { Component } from 'react';
import weatherReq from '../../utils/weather-request';
import kelvinToFarenheit from '../../utils/convert-temp';
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
      this.convertTemp(data);
    } catch (err) {
      this.setState({ err })
    }
  }

  receiveLocation = async (type, value) => {
    const payload = {};
    try {
      if (type === 'zipcode') {
        payload.zipcode = value;
      } else {
        payload.city = value
      }

      const { data } = await weatherReq(payload);
      this.convertTemp(data);

    } catch (err) {
      this.setState({ err })
    }
  }

  error = (err) => {
    this.setState({ err });
  }

  convertTemp = (data) => {
    const updatedList = data.list.map((day) =>  {
      const tempCopy = Object.assign({}, day.temp);
      for(let key in tempCopy) {
        tempCopy[key] = kelvinToFarenheit(tempCopy[key])
      }
      return {
        ...day,
        temp: tempCopy,
      }
    });

    this.setState({
      data: {
        ...data,
        list: updatedList,
      }
    });
  }

  render() {
    const { data } = this.state;
    console.log('DATA', data);
    return (
      <div>
        {Object.keys(data).length > 0 ?
          <div className="appContainer">
            <h1>{data.city.name}</h1>
            <LocationInput
              receiveLocation={this.receiveLocation}
            />
            <ul className="weekList">
              {data.list.map(current => <WeekList key={current.dt} {...current}/>)}
            </ul>
          </div>
          : 
          <div>
            <h1>No Geo</h1>
          </div>
        }
      </div>

      
    );
  }
}

export default AppComponent;
