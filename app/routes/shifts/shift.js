import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    cancel: function(){
      this.transitionTo('shifts');
    },
    delete: function(){
      // I'm probably not supposed to put model code in the route, but...
      if (confirm('Are you sure?')) {
        const shift = this.get('currentModel');
        shift.destroyRecord();
        this.transitionTo('shift');
      }
    }
  },
});