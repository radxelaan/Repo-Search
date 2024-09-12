import './App.css';
import React, { useState, useEffect } from 'react';
import { fetchUserRepos } from './services/GitHubAPI';
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';
import Filter from './components/Filter';

interface Repo {
  id: number;
  name: string;
  language: string | null;
  html_url: string;
  description: string;
}

const App: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [repos, setRepos] = useState<Repo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
  const [filterName, setFilterName] = useState<string>('');
  const [filterLanguage, setFilterLanguage] = useState<string>('All Languages');
  const [uniqueLanguages, setUniqueLanguages] = useState<string[]>(['']);

  useEffect(() => {
    if (username === '') {
      // Clear repos if the username is empty
      setRepos([]);
      setFilteredRepos([]);
      setUniqueLanguages([]);
      return;
    }
    if (username) {
      fetchUserRepos(username)
        .then((data) => {
          setRepos(data);
          setFilteredRepos(data);
          setUniqueLanguages(Array.from(new Set(data.map((repo: any) => repo.language).filter((lang: string | null) => lang))));
        })
        .catch((err) => console.error(err));
    }
  }, [username]);

  useEffect(() => {
    const filtered = repos.filter((repo) =>
      (filterName === '' || repo.name.toLowerCase().includes(filterName.toLowerCase())) &&
      (filterLanguage === 'All Languages' || repo.language === filterLanguage)
    );
    setFilteredRepos(filtered);
  }, [filterName, filterLanguage, repos]);

  return (
    <div className='App-header'>
      <h1>GitHub Repository Search</h1>
        <div className='search-filter-container'>
        <SearchBar onSearch={(value) => setUsername(value)} />
          <Filter 
            filterName={filterName} 
            setFilterName={setFilterName} 
            uniqueLanguages={uniqueLanguages} 
            selectedLanguage={filterLanguage}
            setFilterLanguage={setFilterLanguage}
          />
      </div>
      <RepoList repos={filteredRepos} /> 
      {username ? (
        filteredRepos.length > 0 ? (
          <RepoList repos={filteredRepos} />
        ) : (
          <p className='repo-empty-message'>No repositories found.</p>
        )
      ) : null}
    </div>
  );
};

export default App;
