import test from 'tape';
import api from '../api/index';
import dataset from './test-dataset.json';
import mongoose from 'mongoose';
const db = mongoose.connection;
process.env.TESTING = true;

test('Verifying getReposForUser([username]) returns expected # of repos', (t) => {
  const isArray = true;
  const expectedNumOfRepos = 12;
  api.getReposForUser('jsdev17')
  .then(res => {
    t.equal(Array.isArray(res), isArray,
      'returns an array');

    t.equal(res.length >= 1, true,
      'has at least one repository with workitems');
    
    t.equal(res.length, expectedNumOfRepos,
      `this user should have ${expectedNumOfRepos} repositories. it has ${res.length}`);
  })
  t.end();
});

// For the following series of tests, we need access to the database.
if(process.env.TESTING) {
  mongoose.connect(process.env.DB_URI)
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function() {
      console.log('In Test Mode: MongoDB Connected');
  });

  // Run tests
  dataset.repos.forEach(function(repo) {
    test(`Verifying expected # of workitems for repo '${repo.name}'`, (t) => {
      api.getIssuesForRepo(dataset.username, repo.name)
      .then(issues => {
        t.equal(issues.length.toString(), repo.issues_count,
          `there should be ${repo.issues_count} workitems... there are ${issues.length} workitems`);
      });
      t.end()
    });
  });

  // When tests are over, close db connection.
  db.close();
  process.env.TESTING = false;
}