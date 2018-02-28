const GitHubAPI = require('github');
const github = new GitHubAPI();
const getIssues = require('./getIssuesForRepo');
const cleanUp = require('./cleanUpObj');
const traverse = require('./traverse');
require('dotenv').load();
// const { token } = require('../../config').init();

github.authenticate({
    type: 'oauth',
    token: process.env.TOKEN
});

async function getReposForUser(username, per_page = 100) {
    // Make initial call; get (up to) 100 repos for this user
    // If there's an error, log it. If there's more than 100,
    // initial call WILL NOT get all repos
    let result = await github.repos.getForUser({
        username: username,
        per_page: per_page,
        direction: 'asc'
    }).catch(err => { throw err });
    // Declare global variable to store repos data
    let repos;
    if(!result.meta.link) {
      // if there's NO link header, it means
      // that there are NO pages to traverse.
      // that is: we've retrieved all repositories.
      repos = result.data;
    } else {
       // if there IS a link header, we need to
      // capture the number of the last page; this
      // will allow us to determine how many pages
      // we need to traverse in order to capture 
      // all available repositories
      repos = await traverse({
        type: 'repos',
        user: username,
        per_page: per_page,
        data: result.data,
        link: result.meta // last page info passed here
      });
    }

     // Only keep repositories that have issues
     repos = repos.filter(repo => repo.open_issues_count !== 0);
     console.log(`${repos.length} repos left after filtering out ones without issues`);
     // Remove excess data from repo objects
     repos = repos.map(repo => cleanUp(repo));
     return repos;

};

module.exports = getReposForUser;

// 02/08/18: v1 of this code would retrieve all repositories for the user
// AND all issues for each repository. That works well when running
// it on the console, but it isn't practical when initially retrieving
// repositories from the react client (because it must make the call to
// get every single issue of every single repo, and that consumes a lot
// of processing time). Instead, I'm chaging it so that this method ONLY
// retrieves repositories. That way, when the user clicks on the cards
// for a repo (on the user interface), we can retrieve the 
// issues for that repo upon request. In essence, we're not going to give
// more information than is originally asked.

// 02/13/18: v2.something (current one) successfully retrieves ALL repos