import axios from 'axios';
import { SESSION_CODE } from '../settings/constants';

const axiosInstance = axios.create({
    baseURL: `${process.env.API_URL}/api/v1` ,
    headers: {'Content-Type': 'application/json'},
  });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => error.response ? error.response : Promise.reject(error)
  );

export const requestServer = (method, service, endpoint, queryParams = undefined, data = undefined) => {
    const authorization = `Bearer ${localStorage.getItem(SESSION_CODE)}`;
    const options = {
        method,
        url: `${service}/${endpoint}`,
        headers: {authorization, responseType: 'json'}
    }
    if (queryParams) options.params = queryParams;
    if (data) options.data = data;
    return axiosInstance(options)
}