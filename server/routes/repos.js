const api = require('../api/index');

const repos = (router) => {
  // Fetches all repositories, WITH ISSUES, of a specified user.
  router.get('/:username', (req, res, next) => {
    let username = req.params.username;
    api.getReposForUser(username).then(function(repos) {
      console.log('request received...');
      res.json(repos);
      next()
    }).catch(function(error) {
      console.log(error);
      next(error);
    });
  });
}
module.exports = repos;