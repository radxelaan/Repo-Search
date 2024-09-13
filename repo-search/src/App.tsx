import './App.css';
import React, { useState, useEffect } from 'react';
import { fetchUserRepos } from './services/GitHubAPI';
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';
import Filter from './components/Filter';
import loadingGif from './assets/loading.gif'; 
import search from './assets/search.png'; 

/**
 * Interface for repository data.
 */
interface Repo {
  id: number;
  name: string;
  language: string | null;
  html_url: string;
  description: string;
}

/**
 * Main App component for GitHub repository search and filtering.
 * 
 * Features:
 * - Fetch repositories for a GitHub user
 * - Filter repositories by name and programming language
 * - Display repositories and loading state
 * 
 * @returns {React.FC} GitHub repository search app component.
 */
const App: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [repos, setRepos] = useState<Repo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
  const [filterName, setFilterName] = useState<string>('');
  const [filterLanguage, setFilterLanguage] = useState<string>('All Languages');
  const [uniqueLanguages, setUniqueLanguages] = useState<string[]>(['']);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (username === '') {
      // Clear repos if the username is empty
      setRepos([]);
      setFilteredRepos([]);
      setUniqueLanguages([]);
      setLoading(false);
      return;
    }
    if (username) {
      const fetchRepos = async () => {
        setLoading(true); // Start loading when fetching begins
        try {
          const data = await fetchUserRepos(username); // Fetch using the service
          if (Array.isArray(data)) {
            setRepos(data); // Set fetched repos
            setFilteredRepos(data); // Initially all repos are shown
  
            // Get unique languages for filtering
            const uniqueLanguages = Array.from(new Set(data.map((repo: any) => repo.language).filter(Boolean)));
            setUniqueLanguages(uniqueLanguages);
            setFilterLanguage('All Languages');
          }
        } catch (error) {
          console.error('Error fetching repositories:', error);
        } finally {
          setLoading(false); // Stop loading when fetching is complete
        }
      };
  
      fetchRepos();
    }
  }, [username]);

    /**
   * Effect to filter repositories based on name and language when either of the filters or repos change.
   */
  useEffect(() => {
    const filtered = repos.filter((repo) =>
      (filterName === '' || repo.name.toLowerCase().includes(filterName.toLowerCase())) &&
      (filterLanguage === 'All Languages' || repo.language === filterLanguage)
    );
    setFilteredRepos(filtered);
  }, [filterName, filterLanguage, repos]);

  return (
    <div className='App-header'>
      <h1> <img src={search} className='logo-icon' alt='search logo' /> GitHub Repository Search</h1>
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
      {loading ? (
        <div className="loading-container">
          <img src={loadingGif} alt="Loading..." className="loading-gif" />
        </div>
        ) : username ? (
          filteredRepos.length > 0 ? (
            <RepoList repos={filteredRepos} searchQuery={filterName} />
          ) : (
            <p className='repo-empty-message'>No repositories found.</p>
          )
        ) : null}
    </div>
  );
};

export default App;
