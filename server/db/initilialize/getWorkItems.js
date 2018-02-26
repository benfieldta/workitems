const Workitem  =     require('../schemas/Workitem');
const mongoose =      require('mongoose');
const testWorkitems = require('../data/Workitems');

const limit = 1;

function getWorkitems () {
  Workitem.find({}).limit(limit).exec(function (err, collection){
      if (collection.length === 0) {
        // iterate over the set of agents for initialization and create entries
        testWorkitems.map(function(item) {
            let newWorkitem = new Workitem(item)
            newWorkitem.save(function (err, data) {
              if(err) {
                console.log(err);
                return //res.status(500).json({msg: 'internal server error'});
              }
            })
          })
        console.log('Test Workitems Initialized in MongoDB')
        return
      }
      else {
        console.log('Workitems Exist in MongoDB')
      }
    })
  }

module.exports = {
getWorkitems: getWorkitems
}