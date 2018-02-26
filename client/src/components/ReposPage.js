// This is the Home Page
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Repo from './Repo';

export default class ReposPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      loaded: false,
      user: 'jsdev17'
    }
  };

  componentDidMount() {
    let url = `http://localhost:3005/api/github/${this.state.user}/repos`;
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
    // First check if data has been loaded into state.
    // After it's been loaded, check if there are repos
    // (the API will only return repos with issues).
    // If state.repos[] is empty, display a message. 
    // Otherwise, render repos.
    if(this.state.loaded) {
      if(this.state.repos.length > 0) {
        let repos = this.state.repos.map(repo => <Repo key={repo.id} repo={repo}/>);
        return repos;
      } else {
        return (
          <p> Did not find repositories with issues for user <strong>{this.state.user}</strong>...</p>
        )
      }
    }
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

        <ul id="repos-content">
          {this.renderPage()}
        </ul>
      </div>
    );
  }
};