import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortBy', 'sortAscending'],
  sortAscending: true,
  sortBy: 'name',
  actions: {
    setSortBy: function(fieldName) {
      this.set('sortBy', fieldName);
      this.toggleProperty('sortAscending');
      return false;
    }
  }
});