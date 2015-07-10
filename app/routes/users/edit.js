import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    cancel: function(){
      const user = this.get('currentModel');

      this.transitionTo('users.user', user.id);
    },
    submit: function(){
      const user = this.get('currentModel');
      user.save();
      this.transitionTo('users');
    }
  },
});