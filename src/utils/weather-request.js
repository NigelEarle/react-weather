import axios from 'axios';
import { OwmAPIKey } from '../config/config.json';

export default ({
  city = '',
  zipcode = '',
  lat = null,
  lon = null
}) => {
  let url = `http://api.openweathermap.org/data/2.5/weather?APPID=${OwmAPIKey}&`;

  if (city) {
    url = `${url}q=${city}`;
  }

  if(zipcode) {
    url = `${url}zip=${zipcode}`;
  }

  if(lat && lon) {
    url = `${url}lat=${lat}&lon=${lon}`
  }

  return axios.get(url);
}