
'use strict';

///////////////////////////////////////////////////////////////////////
///////////////////      partner test db          ////////////////////
//////////////////////////////////////////////////////////////////////

const uuidv1 = require('uuid/v1');
let dt1 = new Date('3/1/2018')
let dt2 = new Date('3/2/2018')
let dt3 = new Date('3/3/2018')
let dt4 = new Date('3/4/2018')
const objStore =  [
  {
  itemId: "1",
  repo: "reservations",
  description: "create a reactjs login widget",
  price: 75.00,
  currency: "USD",
  stage: "active",
  assignee: "[DevName]",
  dueDate: dt1 },
  {
  itemId: "2",
  repo: "reservations",
  description: "create an agent to authenticate",
  price: 225.00,
  currency: "USD",
  stage: "active",
  assignee: "[DevName]",
  dueDate: dt2 },
  {
  itemId: "3",
  repo: "reservations",
  description: "create an agent skill to capture credit card data",
  price: 175.00,
  currency: "USD",
  stage: "active",
  assignee: "[DevName]",
  blockchain: {
    id: "12345"
  },
  dueDate: dt3 },
  {
  itemId: "4",
  repo: "reservations",
  description: "build and test an agent skill to post images to cloudinary",
  price: 45.00,
  currency: "USD",
  stage: "active",
  assignee: "[DevName]",
  dueDate: dt4 },
  {
  itemId: "5",
  repo: "reservations",
  description: "create an agent to set up a shared video link",
  price: 338.00,
  currency: "USD",
  stage: "closed",
  assignee: "[DevName]",
  dueDate: dt2 },
  {
  itemId: "6",
  repo: "reservations",
  description: "create an agent skill to return weather report based on location parameter",
  price: 206.00,
  currency: "USD",
  stage: "open",
  assignee: "[DevName]",
  dueDate: dt2 },
  {
    itemId: '1',
    repo: 'issues',
    description: 'a test',
    price: 100.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '2',
    repo: 'issues',
    description: 'another test',
    price: 125.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '3',
    repo: 'issues',
    description: 'a test',
    price: 100.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '4',
    repo: 'issues',
    description: 'a test',
    price: 100.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '5',
    repo: 'issues',
    description: 'a test',
    price: 100.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '6',
    repo: 'issues',
    description: 'a test',
    price: 100.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '7',
    repo: 'issues',
    description: 'a test',
    price: 100.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '8',
    repo: 'issues',
    description: 'a test',
    price: 200.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '9',
    repo: 'issues',
    description: 'a test',
    price: 200.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '10',
    repo: 'issues',
    description: 'a test',
    price: 200.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '11',
    repo: 'issues',
    description: 'a test',
    price: 200.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '12',
    repo: 'issues',
    description: 'a test',
    price: 200.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '13',
    repo: 'issues',
    description: 'a test',
    price: 150.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '14',
    repo: 'issues',
    description: 'a test',
    price: 150.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '15',
    repo: 'issues',
    description: 'a test',
    price: 150.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '16',
    repo: 'issues',
    description: 'a test',
    price: 150.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '17',
    repo: 'issues',
    description: 'a test',
    price: 150.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '18',
    repo: 'issues',
    description: 'a test',
    price: 150.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '19',
    repo: 'issues',
    description: 'a test',
    price: 150.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '20',
    repo: 'issues',
    description: 'a test',
    price: 150.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '1',
    repo: 'retail',
    description: 'create a widget for capturing credit card information',
    price: 175.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '2',
    repo: 'retail',
    description: 'write a function to verify credit card information',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '1',
    repo: 'test-a',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '2',
    repo: 'test-a',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '3',
    repo: 'test-a',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '4',
    repo: 'test-a',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '5',
    repo: 'test-a',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '6',
    repo: 'test-a',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '7',
    repo: 'test-a',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '8',
    repo: 'test-a',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt1
  },
  {
    itemId: '9',
    repo: 'test-a',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt2
  },
  {
    itemId: '10',
    repo: 'test-a',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt2
  },
  {
    itemId: '11',
    repo: 'test-a',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '12',
    repo: 'test-a',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '13',
    repo: 'test-a',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt2
  },
  {
    itemId: '14',
    repo: 'test-a',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '15',
    repo: 'test-a',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '1',
    repo: 'test-b',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt2
  },
  {
    itemId: '2',
    repo: 'test-b',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '3',
    repo: 'test-b',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '4',
    repo: 'test-b',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '5',
    repo: 'test-b',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '6',
    repo: 'test-b',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '7',
    repo: 'test-b',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '8',
    repo: 'test-b',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '9',
    repo: 'test-b',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '10',
    repo: 'test-b',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '11',
    repo: 'test-b',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '12',
    repo: 'test-b',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '13',
    repo: 'test-b',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '14',
    repo: 'test-b',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '15',
    repo: 'test-b',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '1',
    repo: 'test-c',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '2',
    repo: 'test-c',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '3',
    repo: 'test-c',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '4',
    repo: 'test-c',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '5',
    repo: 'test-c',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '6',
    repo: 'test-c',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '7',
    repo: 'test-c',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '8',
    repo: 'test-c',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '9',
    repo: 'test-c',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '10',
    repo: 'test-c',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '11',
    repo: 'test-c',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '12',
    repo: 'test-c',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '13',
    repo: 'test-c',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '14',
    repo: 'test-c',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '15',
    repo: 'test-c',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '1',
    repo: 'test-d',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '2',
    repo: 'test-d',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '3',
    repo: 'test-d',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '4',
    repo: 'test-d',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '5',
    repo: 'test-d',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '6',
    repo: 'test-d',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '7',
    repo: 'test-d',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '8',
    repo: 'test-d',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '9',
    repo: 'test-d',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '10',
    repo: 'test-d',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '11',
    repo: 'test-d',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '12',
    repo: 'test-d',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '13',
    repo: 'test-d',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '14',
    repo: 'test-d',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '15',
    repo: 'test-d',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '1',
    repo: 'test-e',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '2',
    repo: 'test-e',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '3',
    repo: 'test-e',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '4',
    repo: 'test-e',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '5',
    repo: 'test-e',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '6',
    repo: 'test-e',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '7',
    repo: 'test-e',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '8',
    repo: 'test-e',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '9',
    repo: 'test-e',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '10',
    repo: 'test-e',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '11',
    repo: 'test-e',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '12',
    repo: 'test-e',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '13',
    repo: 'test-e',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '14',
    repo: 'test-e',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '15',
    repo: 'test-e',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '1',
    repo: 'test-f',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '2',
    repo: 'test-f',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '3',
    repo: 'test-f',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '4',
    repo: 'test-f',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '5',
    repo: 'test-f',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '6',
    repo: 'test-f',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '7',
    repo: 'test-f',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '8',
    repo: 'test-f',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '9',
    repo: 'test-f',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '10',
    repo: 'test-f',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '11',
    repo: 'test-f',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '12',
    repo: 'test-f',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '13',
    repo: 'test-f',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '14',
    repo: 'test-f',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '15',
    repo: 'test-f',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '1',
    repo: 'test-g',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '2',
    repo: 'test-g',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '3',
    repo: 'test-g',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '4',
    repo: 'test-g',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '5',
    repo: 'test-g',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '6',
    repo: 'test-g',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '7',
    repo: 'test-g',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '8',
    repo: 'test-g',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '9',
    repo: 'test-g',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '10',
    repo: 'test-g',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '11',
    repo: 'test-g',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '12',
    repo: 'test-g',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '13',
    repo: 'test-g',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '14',
    repo: 'test-g',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '15',
    repo: 'test-g',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '1',
    repo: 'wholesale',
    description: 'write a function that performs X task',
    price: 320.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '2',
    repo: 'wholesale',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '3',
    repo: 'wholesale',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '4',
    repo: 'wholesale',
    description: 'write a function that performs X task',
    price: 125.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '5',
    repo: 'wholesale',
    description: 'write a function that performs X task',
    price: 275.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '6',
    repo: 'wholesale',
    description: 'write a function that performs X task',
    price: 350.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '7',
    repo: 'wholesale',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '8',
    repo: 'wholesale',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '9',
    repo: 'wholesale',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '1',
    repo: 'customer-service',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '2',
    repo: 'customer-service',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '3',
    repo: 'customer-service',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '4',
    repo: 'customer-service',
    description: 'write a function that performs X task',
    price: 125.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '5',
    repo: 'customer-service',
    description: 'write a function that performs X task',
    price: 275.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '6',
    repo: 'customer-service',
    description: 'write a function that performs X task',
    price: 350.00,
    currency: 'USD',
    stage: 'closed',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '7',
    repo: 'customer-service',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'open',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '8',
    repo: 'customer-service',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  },
  {
    itemId: '9',
    repo: 'customer-service',
    description: 'write a function that performs X task',
    price: 250.00,
    currency: 'USD',
    stage: 'active',
    assignee: "[DevName]",
    dueDate: dt3
  }
]

module.exports = objStore;
