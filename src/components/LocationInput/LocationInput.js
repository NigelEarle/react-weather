import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LocationInput.css';
import weatherReq from '../../utils/weather-request';

class LocationInput extends Component {
  constructor(props) {
    super(props);
    
  }

  static defaultProps = {
    latitude: 0,
    longitude: 0,
  };

  static propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  };

  componentDidMount() {
    // make request from input / or geo
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Location"
        />
      </div>
    );
  }
}

export default LocationInput;