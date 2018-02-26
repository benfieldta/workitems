import React from 'react';
import { Link } from 'react-router-dom';

const Issue = ({issue}) => (
  <li id={issue.id} number={issue.number} className="issue">
    <div className='card text-center issue-card'> 
      <div className='card-body'>
        <h5 className='card-title issue-title'>{issue.title}</h5>
        <h6 className='card-subtitle mb-2 issue-price'>{`$${issue.price}`}</h6>
        <p className='card-text issue-assignee'>
          {issue.stage === 'active' ? <p>Assigned to: {issue.assignee}</p> : ''}
        </p>
        <span className='card-text text-muted issue-due-date'> 
          Due on: {issue.due_date}
        </span>
      </div>
      <div className='card-footer text-center issue-card-footer'>
        <Link to={issue.html_url} target="_blank">
          <span className="">View on GitHub</span>
        </Link>
      </div>
    </div>
  </li>
);

export default Issue;