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
  const [error, setError] = useState<string | null>(null); // State for error message

   /**
   * Validates the GitHub username based on the following criteria:
   * - Must contain only alphanumeric characters or single hyphens.
   * - Cannot begin or end with a hyphen.
   * 
   * @param {string} name - The username to validate.
   * @returns {boolean} - Returns true if the username is valid, false otherwise.
   */
  const isValidUsername = (name: string) => {
    const usernameRegex = /^(?!-)[a-zA-Z0-9-]+(?<!-)$/;
    return usernameRegex.test(name);
  };

  /**
   * Handles the search button click event. 
   * If the username is valid, triggers the onSearch function.
   * Otherwise, it displays an error message.
   * 
   * @param {React.FormEvent} e - The form event object.
   */
  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === '') {
      setError(null); // No error for blank search
      onSearch(''); // Clear the list
    } else if (isValidUsername(username)) {
      setError(null); // Clear error if valid
      onSearch(username); // Proceed with search
    } else {
      setError('Invalid username: Only alphanumeric characters or single hyphens are allowed. Username cannot begin or end with a hyphen.');
    }
  };

  /**
   * Handles the "Enter" key press event on the input field.
   * If the username is valid, triggers the onSearch function.
   * Otherwise, it displays an error message.
   * 
   * @param {React.KeyboardEvent<HTMLInputElement>} event - The keyboard event object.
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (isValidUsername(username)) {
        setError(null); // Clear error if valid
        onSearch(username);
      } else {
        setError('Invalid username: Only alphanumeric characters or single hyphens are allowed. Username cannot begin or end with a hyphen.');
      }
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

      {/* Display error message if username is invalid */}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SearchBar;
