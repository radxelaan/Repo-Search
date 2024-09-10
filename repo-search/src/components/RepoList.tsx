import React from 'react';

interface Repo {
  id: number;
  name: string;
  language: string | null;
  html_url: string;
}

interface Repos {
  repos: Repo[];
}

const RepoList: React.FC<Repos> = ({ repos }) => {
  return (
    <ul>
      {repos.map((repo) => (
        <li key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a> 
          {repo.language && <span> - {repo.language}</span>}
        </li>
      ))}
    </ul>
  );
};

export default RepoList;
