// Displays all issues of a given repository
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Issue from './Issue';
import Navigation from './Navigation';
import FilterBy from './IssuesFilterBy';
import SearchBar from './SearchBar'

export default class IssuesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.match.params.user,
      repo: this.props.match.params.repo,
      loaded: false,
      criteria: 'open',
      search: '',
      issues: []
    }
    // Bind `this` to these methods so they can access state
    this.renderPage = this.renderPage.bind(this);
    this.handleCriteriaChange = this.handleCriteriaChange.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    let username = this.state.username;
    let repo = this.state.repo;
    let url = `http://localhost:3005/api/github/issues/${username}/${repo}`;
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
    // Filter issues based on *search criteria*
    var filteredIssues = this.state.issues.filter(issue => (
      issue.title.toLowerCase().includes(this.state.search)
    ));
    // Create issue components based on current *filtering criteria*.
    if (this.state.criteria === 'open') {
        issues = filteredIssues.filter(issue => issue.stage === 'open');
        issues = issues.map(issue => <Issue key={issue.number} issue={issue} />)
    } else if (this.state.criteria === 'active') {
        issues = filteredIssues.filter(issue => issue.stage === 'active');
        issues = issues.map(issue => <Issue key={issue.number} issue={issue} />)
    } else if (this.state.criteria === 'closed') {
        issues = filteredIssues.filter(issue => issue.stage === 'closed');
        issues = issues.map(issue => <Issue key={issue.number} issue={issue} />)
    }
    // If there's issues to display, render them. Otherwise, render message.
    return issues.length > 0 ? issues : <p>No {this.state.criteria} issues found</p>;
  };

  handleCriteriaChange(criteria) {
    this.setState({criteria: criteria});
  }

  updateSearch(event) {
    this.setState({search: event.target.value});
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
        <SearchBar
          value={this.state.search}
          updateSearch={this.updateSearch}
        />
        <ul id="issue-list" className="">
          {this.state.loaded ? this.renderPage() : null}
        </ul>
      </div>
    );
  }
};