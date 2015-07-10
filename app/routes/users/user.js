import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    cancel: function(){
      this.transitionTo('users');
    },
    delete: function(){
      // I'm probably not supposed to put model code in the route, but...
      if (confirm('Are you sure?')) {
        const user = this.get('currentModel');
        user.destroyRecord();
        this.transitionTo('users');
      }
    }
  },
});