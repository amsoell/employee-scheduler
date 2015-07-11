import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('shift');
  },
  actions: {
    create: function() {
      this.transitionTo('shifts.new');
    }
  }
});