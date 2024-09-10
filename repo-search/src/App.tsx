import './App.css';
import React, { useState, useEffect } from 'react';
import { fetchUserRepos } from './services/GitHubAPI';
import SearchBar from './components/SearchBar';

interface Repo {
  id: number;
  name: string;
  language: string | null;
  html_url: string;
}

const App: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [repos, setRepos] = useState<Repo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
  const [filterName, setFilterName] = useState<string>('');
  const [filterLanguage, setFilterLanguage] = useState<string>('');


  return (
    <div>
      <h1>GitHub Repository Search</h1>
      <SearchBar onSearch={(value) => setUsername(value)} />
      {/* <Filter 
        filterName={filterName} 
        setFilterName={setFilterName} 
        filterLanguage={filterLanguage} 
        setFilterLanguage={setFilterLanguage} 
      />
      <RepoList repos={filteredRepos} /> */}
    </div>
  );
};

export default App;
