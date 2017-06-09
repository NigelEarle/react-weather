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
  const day = dateFormat(date, 'dddd');
  return (
    <li className="dayItem">
      {day}
    </li>
  );
}

export default WeekList;