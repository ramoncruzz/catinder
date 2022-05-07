import axios from 'axios';
import Config from "react-native-config";

const TheCat = axios.create({
  baseURL: Config.BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': Config.THE_CAT_API
  },
});

export default TheCat;
