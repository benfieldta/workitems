import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import components
import ReposPage from './components/ReposPage';
import IssuesPage from './components/IssuesPage';

const routes = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={ReposPage}/>
            <Route path='/:user/:repo/issues' component={IssuesPage}/>
        </Switch>
    </Router>
);

export default routes;