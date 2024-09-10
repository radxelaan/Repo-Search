import React, { useState } from 'react';

interface SearchBarInput {
  onSearch: (username: string) => void;
}

const SearchBar: React.FC<SearchBarInput> = ({ onSearch }) => {
  const [input, setInput] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Search for user..." 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
