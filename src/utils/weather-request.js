import axios from 'axios';

export default ({
  // city = '',
  // zipcode = '',
  lat = null,
  lon = null
}) => {
  let url = `api.openweathermap.org/data/2.5/weather?`;

  // if (city) {
  //   url = `${url}q=${city}`;
  // }

  // if(zipcode) {
  //   url = `${url}zip=${zipcode}`;
  // }

  if(lat && lon) {
    console.log(lat, lon);
    url = `${url}lat=${lat}&lon=${lon}`
  }

  return axios.get(url);
}