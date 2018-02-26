var express = require('express');
var app = express();
var api = require('./api/v2/index');
require('dotenv').config()

// Start DB
require('./db/mongoose')(process.env.DB_URI);

///// ROUTES //////
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Fetches and returns all repositories
// (with issues only) of a specified user.
app.get('/api/github/:username/repos', (req, res) => {
    let username = req.params.username;
    api.getReposForUser(username)
    .then(function(repos) {
        console.log('request received...');
        res.json(repos);
    })
    .catch(function(error) {
        console.log(error);
    });
});

// Fetches and returns issues of a specified
// repository belonging to a specified user
app.get('/api/github/:username/:repo/issues', (req, res) => {
    let username = req.params.username,
        repo     = req.params.repo;
    api.getIssuesForRepo(username, repo)
    .then(function(issues) {
        console.log('request received...');
        res.json(issues);
    })
    .catch(function(error) {
        console.log(error);
    });
});

// Just a test route
app.get('/', (req, res) => {
    console.log('visit to / route...');
    res.send('hello');
})

//////// Spin up server ////////
app.listen(3005, () => console.log(`Running on port 3005`) );


