import React, { useState } from 'react';
import './SearchBar.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

/**
 * Props interface for the SearchBar component.
 */
interface SearchBarInput {
  onSearch: (username: string) => void;
}

/**
 * SearchBar component for entering a GitHub username and triggering a search.
 * 
 * @param {function} onSearch - Function to handle the search operation with the input username.
 * 
 * @returns {React.FC} A component that renders an input field and a search button.
 */
const SearchBar: React.FC<SearchBarInput> = ({ onSearch }) => {
  const [username, setUsername] = useState<string>('');

  /**
   * Handles search button click.
   * 
   * @param {React.FormEvent} e - Form event triggered by the search button.
   */
  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(username);
  };

   /**
   * Handles Enter key press in the search input field.
   * 
   * @param {React.KeyboardEvent<HTMLInputElement>} event - Keyboard event triggered by key presses.
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(username); 
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyDown}  // Listen for Enter key
        className='search-input'
      />
      <button onClick={handleSearchClick} className="search-button">
        <FontAwesomeIcon icon={faSearch}/> 
      </button>
    </div>
  );
};

export default SearchBar;
