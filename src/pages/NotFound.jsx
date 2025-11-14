import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>404 - Сторінку не знайдено</h2>
      <p>Здається, ви заблукали.</p>
      <Link to="/" style={{ color: '#3498db', textDecoration: 'underline' }}>
        Повернутися на головну
      </Link>
    </div>
  );
};

export default NotFound;