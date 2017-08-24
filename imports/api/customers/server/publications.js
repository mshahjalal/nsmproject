// All customers-related publications

import { Meteor } from 'meteor/meteor';
import { Customers } from '../both/collections.js';

Meteor.publish('customers.all', function () {
  return Customers.find();
});

console.log("imports/api/customers/server/publications.js file");