import axios, { AxiosInstance } from 'axios';

const createAxiosInstance = (authToken: string | null): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
  });

  axiosInstance.interceptors.request.use((config) => {
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  });

  return axiosInstance;
};

export default createAxiosInstance;
