import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    cancel: function(){
      const shift = this.get('currentModel');

      this.transitionTo('shifts.shift', shift.id);
    },
    submit: function(){
      const shift = this.get('currentModel');
      shift.save();
      this.transitionTo('shifts.shift', shift.id);
    }
  },
});