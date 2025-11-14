import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 
import './SearchBar.css';

const SearchBar = ({ onSearch, isLoading }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) {
      onSearch(term);
      setTerm(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <div className="input-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Введіть назву міста..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          disabled={isLoading} 
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Пошук...' : 'Знайти'}
      </button>
    </form>
  );
};

export default SearchBar;