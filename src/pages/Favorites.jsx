import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import WeatherCard from '../components/WeatherCard';
import './Favorites.css';

const Favorites = () => {
  const { favorites } = useContext(WeatherContext);

  return (
    <div className="favorites-container">
      <h2>Ваші збережені міста</h2>
      {favorites.length === 0 ? (
        <p>Список порожній. Додайте міста на головній сторінці.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((city) => (
            <WeatherCard key={city.id} data={city} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;