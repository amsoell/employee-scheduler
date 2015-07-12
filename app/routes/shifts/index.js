import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    sortBy: {
      refreshModel: true
    },
    sortAscending: {
      refreshModel: true
    }
  },
  model: function(params) {
    return this.store.find('shift', params);
  },
  actions: {
    create: function() {
      this.transitionTo('shifts.new');
    }
  }
});