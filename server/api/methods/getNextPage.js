const GitHubAPI = require('github');
const github = new GitHubAPI();
require('dotenv').load();
// const { token } = require('../../config').init();

github.authenticate({
  type: 'oauth',
  token: process.env.TOKEN
});

module.exports = async function (specs, next) {
  let nextPage;
  // Determine whether to fetch next page of repos or issues
  console.log(`fetching ${specs.type}...`);
  if(specs.type === 'repos') {
    nextPage = await github.repos.getForUser({
      username: specs.user,
      per_page: specs.per_page,
      page: next,
      direction: 'asc'
    });
  } else {
      nextPage = await github.issues.getForRepo({
        owner: specs.user,
        repo: specs.repo,
        state: 'open',
        per_page: specs.per_page,
        page: next,
        direction: 'asc'
      });
  }
  return nextPage.data;
}