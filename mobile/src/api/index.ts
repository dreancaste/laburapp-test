import axios from 'axios';
import { Platform } from 'react-native';
import { store } from '../store';

// Android emulator uses a different IP to access localhost
const baseURL = Platform.OS === 'android' ? 'http://10.0.2.2:8080/v1' : 'http://localhost:8080/v1';

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token in requests
apiClient.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
