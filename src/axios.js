// we have to create an instance for the axios
import axios from 'axios';
import { baseUrl } from './constants/const';
const instance = axios.create({
	// Configuration
	baseURL: baseUrl,
});
export default instance