import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', {}, function() {
    this.route('user', { path: '/:user_id' });
    this.route('new');
    this.route('edit', { path: '/:user_id/edit' });
  });
  this.route('shifts', {}, function() {
    this.route('shift', { path: '/:shift_id' });
    this.route('new');
    this.route('edit', { path: '/:shift_id/edit' });
  });
});

export default Router;
