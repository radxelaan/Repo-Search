import React, { useState } from 'react';
import './Filter.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

interface FilterProps {
  filterName: string;
  setFilterName: (name: string) => void;
  filterLanguage: string;
  setFilterLanguage: (language: string) => void;
}

const Filter: React.FC<FilterProps> = ({ filterName, setFilterName, filterLanguage, setFilterLanguage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="filter-container">
      <button onClick={toggleDropdown} className="filter-button">
        <FontAwesomeIcon icon={faFilter} />
      </button>

      {isDropdownOpen && (
        <div className="filter-dropdown">
          <div>
            <input 
              type="text" 
              placeholder="Filter by repository name..." 
              value={filterName} 
              onChange={(e) => setFilterName(e.target.value)} 
              className="filter-input"
            />
          </div>

          <div>
            <input 
              type="text" 
              placeholder="Filter by language..." 
              value={filterLanguage} 
              onChange={(e) => setFilterLanguage(e.target.value)} 
              className="filter-input"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
