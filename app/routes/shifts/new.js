import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('shift');
  },
  cleanUp: Ember.on('deactivate', function(){
    const shift = this.get('currentModel');
    if(!shift.get('isSaving') && shift.get('isNew')){
      shift.destroyRecord();
    }
  }),
  actions: {
    cancel: function(){
      this.transitionTo('shifts');
    },
    submit: function(){
      const shift = this.get('currentModel');
      shift.save();
      this.transitionTo('shifts');
    },
  },
});