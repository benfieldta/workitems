const moment = require('moment');
const { Workitem } = require('../../../db/schemas/Workitem');

module.exports = async function(issue, repo) {
  let issue_number = issue.number.toString();
  // var data = await getData(issue_number, repo);
  console.log(`grabbing extra data for issue number ${issue_number}`);
  var data = await Promise.resolve(Workitem.findOne({$and: [{itemId: issue_number},{repo: repo}]}).lean());
  // console.log(data);
  issue.price = data.price;
  issue.stage = data.stage;
  issue.assignee = data.assignee;
  issue.due_date = moment(data.dueDate).format("MMMM Do, YYYY");
  return issue;
}