import axios from 'axios';

const clientFn = () => {
  const request = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
  });

  return request;
};

export const client = clientFn();
