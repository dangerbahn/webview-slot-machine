import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('welcome');

  this.route('machine', function() {
    this.route('slot-default');
  });
});
