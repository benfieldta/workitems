// This is the Home Page
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Repo from './Repo';
import SearchBar from './SearchBar';

export default class ReposPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      loaded: false,
      user: 'jsdev17',
      search: ''
    }
    // bind constructor's 'this' object to handleChange method
    // so that it can access and alter state.
    this.updateSearch = this.updateSearch.bind(this);
  };

  componentDidMount() {
    let user = this.state.user;
    let url = `http://localhost:3005/api/github/${user}/repos`;
    // Fetch repositories for given user
    axios.get(url)
      .then(res => {
        // Save data to state
        this.setState({
          repos: res.data,
          loaded: true
        });
      });
  };

  showReposCount() {
    // Determines proper grammar based on number of repos available
    return this.state.repos.length > 1 ?
      `${this.state.repos.length} repositories available for user ${this.state.user}`
      :
      `${this.state.repos.length} repository available for user ${this.state.user}`
  }

  renderPage() {
    // Check if data has been loaded into state
    // * Server ONLY returns repos with issues. *
    if(this.state.loaded) {
      // If there's repos, render them.
      if(this.state.repos.length > 0) {
        // Filter repos based on *search criteria*
        let filteredRepos = this.state.repos.filter(repo => (
          repo.name.toLowerCase().includes(this.state.search)
        ));
        let repos = filteredRepos.map(repo => <Repo key={repo.id} repo={repo}/>);
        return repos;
      } else {
        // If there aren't repo to display, don't even bother
        // with more operations and just display a message
        return (
          <p>
            Did not find repositories with issues for user <strong>{this.state.user}</strong>...
          </p>
        )
      }
    }
  }

  updateSearch(event) {
    // When state changes, render will be triggered.
    // results will be displayed according to search value
    this.setState({search: event.target.value});
  }

  render() {
    return (
      <div>
        {/* Repos count message will display after data has been fetched
        and ONLY if there's data to render */}
        <span id="repos-count" className="d-flex justify-content-center">
          {
            this.state.loaded && this.state.repos.length > 0 ?
              this.showReposCount() : null
          }
        </span>

        <SearchBar value={this.state.search}
          updateSearch={this.updateSearch}
        />

        <ul id="repos-content">
          {this.renderPage()}
        </ul>
      </div>
    );
  }
};