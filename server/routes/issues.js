const api = require('../api/index');

const issues = (router) => {
  // Fetches issues of specified repository
  router.get('/:username/:repo', (req, res, next) => {
    let username = req.params.username,
      repo = req.params.repo;
    api.getIssuesForRepo(username, repo).then(function(issues) {
      console.log(`request received, returning issues for repo ${repo}...`);
      res.json(issues);
      next();
    }).catch(function(error) {
      console.log(error);
      next(error);
    });
  });
}
module.exports = issues;