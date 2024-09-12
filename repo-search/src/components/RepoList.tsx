import React, { useEffect, useState } from 'react';
import './RepoList.css';  

interface Repo {
  id: number;
  name: string;
  language: string | null;
  html_url: string;
  description: string;
}

interface RepoListProps {
  repos: Repo[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  const [animationClass, setAnimationClass] = useState('repo-list-container');

  useEffect(() => {
    setAnimationClass(''); // Remove the animation class
    const timeout = setTimeout(() => {
      setAnimationClass('repo-list-container'); // Reapply the animation class after a short delay
    }, 10); // Small delay to reset the animation

    return () => clearTimeout(timeout); // Clean up timeout
  }, [repos]);

  if (repos.length === 0) {
    return <div className="repo-empty-message">No repositories found</div>;
  }

  return (
    <div className={animationClass}>
      {repos.map((repo) => (
        <div key={repo.id} className="repo-item">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-name">
            {repo.name}
          </a>
          <p className="repo-description">{repo.description || 'No description available'}</p>
          <span className="repo-language">{repo.language || 'Unknown language'}</span>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
