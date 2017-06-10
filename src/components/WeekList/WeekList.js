import React from 'react';
import dateFormat from 'dateformat';
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

  const date = new Date(dt * 1000);
  const day = dateFormat(date, 'ddd');
  const numericDate = dateFormat(date, 'm/d');

  return (
    <li className="dayItem">
      <div>{day}</div>
      <div>{temp.day}&#176;</div>
      <div>{numericDate}</div>
    </li>
  );
}

export default WeekList;