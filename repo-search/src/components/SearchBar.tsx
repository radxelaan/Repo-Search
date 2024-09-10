import React, { useState } from 'react';
import './SearchBar.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
interface SearchBarInput {
  onSearch: (username: string) => void;
}

const SearchBar: React.FC<SearchBarInput> = ({ onSearch }) => {
  const [username, setUsername] = useState<string>('');

  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(username);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(username); 
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyDown}  // Listen for Enter key
        className="search-input"
      />
      <button onClick={handleSearchClick} className="search-button">
        <FontAwesomeIcon icon={faSearch} /> {/* Magnifying glass icon */}
      </button>
    </div>
  );
};

export default SearchBar;
