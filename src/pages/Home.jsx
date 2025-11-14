import { useState } from 'react';
import { fetchWeather } from '../api/weatherService';
import WeatherCard from '../components/WeatherCard';
import SearchBar from '../components/SearchBar'; 
import './Home.css';

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (cityQuery) => {
    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const data = await fetchWeather(cityQuery);
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError('Місто не знайдено. Перевірте назву.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      <h1>Прогноз погоди</h1>
      
      <SearchBar onSearch={handleSearch} isLoading={loading} />

      {loading && <div className="loader">Завантаження даних...</div>}
      {error && <p className="error-msg">{error}</p>}
      {weather && !loading && <WeatherCard data={weather} />}
    </div>
  );
};

export default Home;