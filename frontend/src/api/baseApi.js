import axios from 'axios';
import { BASE_URL, API_VERSION } from '../config';

export default axios.create({
  baseURL: `${BASE_URL}/api/${API_VERSION}`,
  withCredentials: true
});
