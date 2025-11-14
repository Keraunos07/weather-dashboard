import axios from 'axios';

const API_KEY = 'Ваш_апі_ключ_з_сайту'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', 
        lang: 'ua'       
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};