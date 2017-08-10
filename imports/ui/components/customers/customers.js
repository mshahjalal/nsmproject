import { Customers } from '/imports/api/customers/customers.js';
import { Meteor } from 'meteor/meteor';
import './customers.html';

Template.Customers_list.onCreated(function () {
  Meteor.subscribe('customers.all');
});

Template.Customers_list.helpers({
  customers() {
    return Customers.find({});
  },
});

Template.Customers_list.events({
  'submit .info-link-add'(event) {
    event.preventDefault();

    const target = event.target;
    const name = target.name;
    const email = target.email;

    Meteor.call('customers.insert', name.value, [{email: email.value}], (error) => {
      if (error) {
        alert(error.error);
      } else {
        name.value = '';
        email.value = '';
      }
    });
  },
});
