import React, { Component } from 'react';
import {
  LocationInput,
} from '../../components';
import './App.css';

class AppComponent extends Component {
  render() {
    return (
      <div className="appContainer">
        <h1>React Weather</h1>
        <LocationInput />
      </div>
    );
  }
}

export default AppComponent;
