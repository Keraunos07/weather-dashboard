import { createContext, useState, useEffect } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (cityData) => {
    if (!favorites.some((city) => city.id === cityData.id)) {
      setFavorites([...favorites, cityData]);
    }
  };

  const removeFromFavorites = (cityId) => {
    setFavorites(favorites.filter((city) => city.id !== cityId));
  };

  return (
    <WeatherContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </WeatherContext.Provider>
  );
};