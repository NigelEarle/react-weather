import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LocationInput.css';
import weatherReq from '../../utils/weather-request';

const ZIPCODE = new RegExp(/\d{5}(?:[-\s]\d{4})?$/);

class LocationInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    }
  }

  getLocation = (event) => {
    const { receiveLocation } = this.props;
    const { location } = this.state;

    if(event.charCode === 13) {
      if(location.match(ZIPCODE)) {
        receiveLocation(location)
      }
    }
  }

  render() {
    return (
      <div>
        <input
          onChange={({ target }) => this.setState({location: target.value})}
          onKeyPress={this.getLocation}
          type="text"
          placeholder="Location"
        />
      </div>
    );
  }
}

export default LocationInput;