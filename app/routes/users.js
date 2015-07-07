import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('http://amsoell.com/api/public/v1.1/users');
  }
});