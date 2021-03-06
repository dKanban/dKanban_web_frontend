import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('dashboard');
  this.route('demands');
  this.route('detail',{ path: '/demand/:demand_id' });
  this.route('signup');
});

export default Router;
