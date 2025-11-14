import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './WeatherCard.css';

const WeatherCard = ({ data, isFavoritePage = false }) => {
  const { addToFavorites, removeFromFavorites, favorites } = useContext(WeatherContext);
  
  const isFavorite = favorites.some(city => city.id === data.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(data.id);
    } else {
      addToFavorites(data);
    }
  };

  return (
    <div className="weather-card">
      <h3>{data.name}, {data.sys.country}</h3>
      <div className="temp">{Math.round(data.main.temp)}°C</div>
      <p className="desc">{data.weather[0].description}</p>
      <img 
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
        alt="weather icon" 
      />
      
      <button 
        onClick={handleFavoriteClick} 
        className={`fav-btn ${isFavorite ? 'active' : ''}`}
      >
        {isFavorite ? <FaHeart /> : <FaRegHeart />} 
        {isFavorite ? ' В обраному' : ' Додати в обране'}
      </button>
    </div>
  );
};

export default WeatherCard;