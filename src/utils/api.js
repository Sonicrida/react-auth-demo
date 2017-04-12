import axios from 'axios';

const BASE_URL = 'localhost:3333';

function getCityData() {
  const url = '${BASE_URL}/api/data';
  return axios.get(url).then(response => response.data);
}

export {getCityData};
