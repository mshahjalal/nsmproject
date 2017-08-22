// Methods related to customers

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Customers } from './customers.js';

Meteor.methods({
  'customers.insert'(name, emails) {
    check(name, String);

    return Customers.insert({
      name,
      emails,
      createdAt: new Date()
    });
  }
});

console.log("imports/api/customers/methods.js file");
