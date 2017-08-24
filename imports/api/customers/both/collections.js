// Definition of the customers collection

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Customers = new Mongo.Collection('customers');

console.log("imports/api/customers/both/collections.js file collection");

/*let Schemas.Customers = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    createdAt: {
        type: Date
    }
});

Customers.attachSchema(Schemas.Customers);*/
