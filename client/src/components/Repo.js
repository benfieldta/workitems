import React from 'react';
import { Link } from 'react-router-dom';

const Repo = ({repo}) => (
  <li id={repo.id} className="repo">
    <div className="card text-center repo-card">
      <div className="card-body">
        <Link to={repo.html_url} target="_blank" className='repo-title'>
          <h5 className="card-title">{repo.name}</h5>
        </Link>
        <h6 className="card-subtitle mb-2 text-muted">Work Items: {repo.open_issues_count}</h6>
        <p className="card-text">{repo.description}</p>
      </div>
    </div>
    <div className="card-footer text-center repo-card-footer">
        <Link to={`/${repo.owner.login}/${repo.name}/issues`}
          className="card-link repo-view-issues"
        >
          View Work Items
        </Link>
    </div>
  </li>
);

 // truncate: {
  //   fontSize: '12px',
  //   width: '100%',
  //   whiteSpace: 'nowrap',
  //   overflow: 'hidden',
  //   textOverflow: 'ellipsis'
  // }

export default Repo;