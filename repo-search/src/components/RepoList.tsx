import React, { useEffect, useState } from 'react';
import './RepoList.css';  

/**
 * Interface representing a repository.
 */
interface Repo {
  id: number;
  name: string;
  language: string | null;
  html_url: string;
  description: string;
}

/**
 * Props interface for the RepoList component.
 */
interface RepoListProps {
  repos: Repo[];
  searchQuery: string;
}

/**
 * RepoList component for displaying a list of repositories.
 * 
 * @param {Repo[]} repos - Array of repositories fetched from GitHub.
 * @param {string} searchQuery - The search query used for highlighting matched text in repository names.
 * 
 * @returns {React.FC} A component that renders a list of repositories with highlighting and animations.
 */
const RepoList: React.FC<RepoListProps> = ({ repos, searchQuery }) => {
  const [animationClass, setAnimationClass] = useState('repo-list-container');

  /**
   * Effect to reset the animation class when the list of repositories changes.
   */
  useEffect(() => {
    setAnimationClass(''); // Remove the animation class
    const timeout = setTimeout(() => {
      setAnimationClass('repo-list-container'); // Reapply the animation class after a short delay
    }, 10); // Small delay to reset the animation

    return () => clearTimeout(timeout); // Clean up timeout
  }, [repos]);


    /**
   * Highlights parts of the repository name that match the search query.
   * 
   * @param {string} text - The repository name to be highlighted.
   * @param {string} query - The search query to match within the repository name.
   * 
   * @returns {JSX.Element[]} Array of JSX elements representing the highlighted text.
   */
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text; // Return text as is if query is empty
    const parts = text.split(new RegExp(`(${query})`, 'gi')); // Split text into parts with matched query highlighted
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="highlighted">{part}</span>
      ) : (
        part
      )
    );
  };

  if (repos.length === 0) {
    return <div></div>;
  }

  return (
    <div className={animationClass}>
      {repos.map((repo) => (
        <div key={repo.id} className="repo-item">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-name">
            {highlightText(repo.name, searchQuery)}
          </a>
          <p className="repo-description">{repo.description || 'No description available'}</p>
          <span className="repo-language">{repo.language || 'Unknown language'}</span>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
