import { Platform } from 'react-native';

const API_URL = Platform.OS === 'android' ? 'http://10.0.2.2:8080/v1' : 'http://localhost:8080/v1';

export default API_URL;
