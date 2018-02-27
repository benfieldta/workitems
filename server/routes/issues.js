const api = require('../api/v2/index');

const issues = (router) => {
  // Fetches issues of specified repository
  router.get('/:username/:repo', (req, res, next) => {
    let username = req.params.username,
      repo = req.params.repo;
    api.getIssuesForRepo(username, repo).then(function(issues) {
      console.log('request received...');
      res.json(issues);
      next();
    }).catch(function(error) {
      console.log(error);
      next(error);
    });
  });
}
module.exports = issues;