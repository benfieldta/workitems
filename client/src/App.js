import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './App.css';
import Routes from './routes';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1 className="header-title">Marketplace</h1>
        </header>
        <main className="app-content">
          <Routes />
        </main>
      </div>
    );
  };
};