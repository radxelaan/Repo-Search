import React from 'react';
import './RepoList.css';  

interface Repo {
  id: number;
  name: string;
  language: string | null;
  html_url: string;
}

interface RepoListProps {
  repos: Repo[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  if (repos.length === 0) {
    return <div className="repo-empty-message">No repositories found</div>;
  }

  return (
    <div className="repo-list-container">
      {repos.map((repo) => (
        <div key={repo.id} className="repo-item">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-name">
            {repo.name}
          </a>
          <span className="repo-language">{repo.language || 'Unknown language'}</span>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
