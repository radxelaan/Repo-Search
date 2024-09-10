import React, {useState} from 'react';

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
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={toggleDropdown} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Filter Options
      </button>

      {isDropdownOpen && (
        <div style={{
          marginTop: '10px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          display: 'inline-block',
          backgroundColor: '#f9f9f9',
          position: 'absolute',
          zIndex: 1
        }}>
          <div style={{ marginBottom: '10px' }}>
            <input 
              type="text" 
              placeholder="Filter by repository name..." 
              value={filterName} 
              onChange={(e) => setFilterName(e.target.value)} 
              style={{ padding: '5px', marginRight: '10px' }}
            />
          </div>

          <div>
            <input 
              type="text" 
              placeholder="Filter by language..." 
              value={filterLanguage} 
              onChange={(e) => setFilterLanguage(e.target.value)} 
              style={{ padding: '5px' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
