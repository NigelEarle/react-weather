import React from 'react';
import './WeekList.css';

const WeekList = ({
  deg,
  dt,
  humidity,
  pressure,
  speed,
  temp,
  weather
}) => {

  return (
    <li className="dayItem">
      <h3>daily weather</h3>
    </li>
  );
}

export default WeekList;