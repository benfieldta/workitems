var GitHubAPI = require('github');
var github = new GitHubAPI();
var getNextPage = require('./getNextPage');
require('dotenv').load();

github.authenticate({
  type: 'oauth',
  token: process.env.TOKEN
});

module.exports = async function (specs) {
  data = specs.data;
  // we always start at the first page so,
  // initially, nextPage will ALWAYS be 2
  var nextPage = 2;
  var num_of_pages = parseInt(github.hasLastPage(specs.link).match(/&page=(\d{1,})/)[1]);
  console.log(`We have retrieved ${data.length} ${specs.type} thus far...
      At a rate of ${specs.per_page} ${specs.type} per_page, there are ${num_of_pages-1} more pages to traverse
  `);
  var more;
  // This while loop traverses through however
  // many pages there are available. The number of
  // pages available is determined by the total amount
  // of issues and the number of items we retrieve
  // per_page. *** To reduce the amount of potential calls
  // to the github API, per_page is set to 100 by default. ***
  console.log(`--- initiating necessary calls to github API to get remaining ${specs.type}... --- `);
  while(nextPage <= num_of_pages) {
    more = await Promise.resolve(getNextPage(specs, nextPage));
    data = data.concat(more);
    console.log(`call ${nextPage-1}. ${specs.type}_count: ${data.length}`);
    nextPage++;
  }
  console.log(`all ${specs.type} have been fetched...`);
  console.log('total of ' + data.length);
  return data;
}