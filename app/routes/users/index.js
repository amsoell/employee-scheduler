import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('user');
  },
  actions: {
    create: function() {
      this.transitionTo('users.new');
    }
  }
});