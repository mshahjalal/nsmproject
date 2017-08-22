import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
//import '../../ui/pages/home/home.js';
//import '../../ui/pages/customers/customers.js';
//import '../../ui/pages/not-found/not-found.js';

console.log("router page");

// Set up all routes in the app
FlowRouter.route('/home', {
  name: 'App.home',
  action() {
  	 import('../../ui/pages/home/home.js').then(() => {
      BlazeLayout.render('App_body', { main: 'App_home' });
    });
  },
});

FlowRouter.route('/', {
  name: 'App.customers',
  action() {
  	import('../../ui/pages/customers/customers.js').then(() => {
      BlazeLayout.render('App_body', { main: 'App_customers' });
    });    
  },
});

/*
This is best practice for dynamic imports, using as we need
FlowRouter.route('/products/:_id', {
  name: 'App.products',
  async action() {
    await import('../../ui/pages/products/products.js');
    await import('../../ui/layouts/sidebar/sidebar.js');
    BlazeLayout.render('App_body', { main: 'App_customers', sidebar: 'App_sidebar' });
  },
});*/

FlowRouter.notFound = {
  action() {
  	 import('../../ui/pages/not-found/not-found.js').then(() => {
      BlazeLayout.render('App_body', { main: 'App_notFound' });
    });    
  },
};