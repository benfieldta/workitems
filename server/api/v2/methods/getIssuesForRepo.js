var GitHubAPI = require('github');
var github = new GitHubAPI();
var getNextPage = require('./getNextPage');
var traverse = require('./traverse');
var set_price_stage_and_dude_date = require('./setPriceStageAndDueDate');
require('dotenv').load();

github.authenticate({
    type: 'oauth',
    token: process.env.TOKEN
});

// Method retrieves all issues for a repo.
module.exports = async function (username, repo, per_page = 100) {
    // Make initial call; get up to 100 issues for repo.
    // If there's an error, log it. If there's more than
    // 100 issues in this repo, initial call WILL NOT get them all
    var result = await github.issues.getForRepo({
        owner: username,
        repo: repo,
        state: 'open',
        direction: 'asc',
        per_page: per_page
    }).catch(err => { throw err });
    // Declare global variable to store issues data
    var issues;
    if(!result.meta.link) {
      // if there's NO link header, it means
      // that there are NO pages to traverse.
      // that is: we've retrieved all issues.
      issues = result.data;
    } else {
      // if there IS a link header, we need to
      // capture the number of the last page; this
      // will allow us to determine how many pages
      // we need to traverse in order to capture 
      // all available issues
      issues = await traverse({
        type: 'issues',
        user: username,
        repo: repo,
        per_page: per_page,
        data: result.data,
        link: result.meta // last page info passed here
      });
    }
    // Grabs additional info from database and assign it
    issues = await Promise.all(issues.map(issue => set_price_stage_and_dude_date(issue, repo)));
    return issues;
}