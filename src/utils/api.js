import axios from 'axios';
import { getIdToken } from './AuthService';

const BASE_URL = 'http://localhost:3333';

function getCityData() {
  const url = `${BASE_URL}/api/data`;
  return axios.get(url, { headers: { Authorization: `Bearer ${getIdToken()}` }}).then(response => response.data);
}

export {getCityData};
