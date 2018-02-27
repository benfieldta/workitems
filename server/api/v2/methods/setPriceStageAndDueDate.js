const moment = require('moment');
const { Workitem } = require('../../../db/schemas/Workitem');

module.exports = async function(issues, repo) {
  var data = await Workitem.find({repo: repo}).lean();
  issues = issues.map(issue => {
    let issue_number = issue.number.toString();
    let workitem = data.find(wi => wi.itemId === issue_number);
    issue.price = workitem.price;
    issue.stage = workitem.stage;
    issue.assignee = workitem.assignee;
    issue.due_date = moment(workitem.dueDate).format("MMMM Do, YYYY");
    return issue;
  });
  return issues;
}

// let issue_number = issue.number.toString();
//   var data = await Promise.resolve(Workitem.findOne({$and: [{itemId: issue_number},{repo: repo}]}).lean());
//   issue.price = data.price;
//   issue.stage = data.stage;
//   issue.assignee = data.assignee;
//   issue.due_date = moment(data.dueDate).format("MMMM Do, YYYY");
//   return issue;