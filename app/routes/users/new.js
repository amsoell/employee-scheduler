import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('user');
  },
  cleanUp: Ember.on('deactivate', function(){
    const user = this.get('currentModel');
    if(!user.get('isSaving') && user.get('isNew')){
      user.destroyRecord();
    }
  }),
  actions: {
    cancel: function(){
      this.transitionTo('users');
    },
    submit: function(){
      const user = this.get('currentModel');
      user.save();
      this.transitionTo('users');
    },
  },
});