import React, { useState } from 'react';
import './Filter.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

interface FilterProps {
  filterName: string;
  setFilterName: (name: string) => void;
  uniqueLanguages: string[];
  selectedLanguage: string;
  setFilterLanguage: (selectedLanguage: string) => void;
}

const Filter: React.FC<FilterProps> = ({ filterName, setFilterName, uniqueLanguages, selectedLanguage, setFilterLanguage }) => {
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
            <select value={selectedLanguage} 
                    onChange={(e) => setFilterLanguage(e.target.value)}>
              <option value="All Languages">All Languages</option>
              {uniqueLanguages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};


export default Filter;
