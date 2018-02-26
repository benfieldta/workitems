// Displays all issues of a given repository
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Issue from './Issue';
import Navigation from './Navigation';
import FilterBy from './IssuesFilterBy';

export default class IssuesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.match.params.user,
      repo: this.props.match.params.repo,
      loaded: false,
      criteria: 'open',
      issues: []
    }
    // Bind `this` to these methods so they can access state
    this.renderPage = this.renderPage.bind(this);
    this.handleCriteriaChange = this.handleCriteriaChange.bind(this);
  }

  componentDidMount() {
    let url =
        `http://localhost:3005/api/github/${this.state.username}/${this.state.repo}/issues`;
    // Fetch issues for repo and save them into state
    axios.get(url)
    .then(res => {
      this.setState({
        issues: res.data,
        loaded: true
      })
    });
  }

  renderPage() {
    var issues;
    // Render issues based on current filtering criteria.
    // If there are no issues under such criteria, display
    // a message stating that no issues were found.
    if (this.state.criteria === 'open') {
        issues = this.state.issues.filter(issue => issue.stage === 'open');
        return issues.length > 0 ? (
          issues = issues.map(issue => <Issue key={issue.number} issue={issue} />)
        ) : (
          <p>No {this.state.criteria} issues found</p>
        )
    } else if (this.state.criteria === 'active') {
        issues = this.state.issues.filter(issue => issue.stage === 'active');
        return issues.length > 0 ? (
          issues = issues.map(issue => <Issue key={issue.number} issue={issue} />)
        ) : (
          <p>No {this.state.criteria} issues found</p>
        )
    } else if (this.state.criteria === 'closed') {
        issues = this.state.issues.filter(issue => issue.stage === 'closed');
        return issues.length > 0 ? (
          issues = issues.map(issue => <Issue key={issue.number} issue={issue} />)
        ) : (
          <p>No {this.state.criteria} issues found</p>
        )
    }
  };

  handleCriteriaChange(criteria) {
    this.setState({criteria: criteria});
  }

  render() {
    return (
      <div>
        <Navigation
          currentLocation={this.state.repo}
        />
        <FilterBy
          criteria={this.state.criteria}
          handleCriteriaChange={this.handleCriteriaChange}
        />
        <ul id="issue-list" className="">
          {this.state.loaded ? this.renderPage() : null}
        </ul>
      </div>
    );
  }
};