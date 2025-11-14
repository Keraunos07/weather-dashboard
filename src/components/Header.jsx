import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🌤 WeatherPro</div>
      <nav>
        <Link to="/">Пошук</Link>
        <Link to="/favorites">Обране</Link>
      </nav>
    </header>
  );
};

export default Header;