// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Links } from '../links.js';

//simple example for publications
Meteor.publish('links.all', function () {
  return Links.find();
});
