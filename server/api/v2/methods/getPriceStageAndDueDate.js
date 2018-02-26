var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;
var WorkItem = mongoose.model('WorkItem', new Schema({}));

module.exports = async function (issue_number, repo) {
  var workItem = await Promise.resolve(WorkItem.findOne({$and: [{itemId: issue_number},{repo: repo}]}).lean());
  return {
    price: workItem.price,
    stage: workItem.stage,
    assignee: workItem.assignee,
    due_date: moment(workItem.dueDate).format("MMMM Do, YYYY")
  };
}
