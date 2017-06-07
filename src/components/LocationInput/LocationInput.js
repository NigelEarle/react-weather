import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LocationInput.css';

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
        receiveLocation('zipcode', location)
      } else {
        receiveLocation('city', location);
      }
    }
  }

  render() {
    return (
      <div className="inputContainer">
        <input
          onChange={({ target }) => {
            return this.setState({location: target.value});
          }}
          onKeyPress={this.getLocation}
          type="text"
          placeholder="Location"
        />
      </div>
    );
  }
}

export default LocationInput;