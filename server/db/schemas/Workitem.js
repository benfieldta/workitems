//////////////////////////////////////////////////////////////////////////
////////////////////        Workitems Schema        /////////////////////
////////////////////////////////////////////////////////////////////////
const mongoose = require("mongoose")
const uuidv1 =  require('uuid/v1')
const Schema = mongoose.Schema

const workitemObject = {
  itemId: {
    type: String,
    trim: true,
    required: true
  },
  repo: String,
  description: String,
  price: Number,
  currency: String,
  stage: {
    type: String,
    validate: [
      function(i) {
        let validStages = ['pending', 'open', 'active', 'closed']
        let validated = validStages.find((v) => {return v == i})
        return validated != undefined
      },
      "Must be a valid stage"
    ]
  },
  dueDate: Date,
  blockchain: {
    id: String,
    date: { type: Date, default: Date.now },
  },
  PostDate: { type: Date, default: Date.now },
  id: { type: String, default: uuidv1() }
}

const workitemSchema = new Schema(workitemObject, {collection: 'WorkItem'})

let Workitem = mongoose.model('Workitem', workitemSchema)

module.exports = { Workitem, workitemSchema }
