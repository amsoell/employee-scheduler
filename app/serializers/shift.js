import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  extractArray: function(store, typeClass, payload) {
    return payload.shifts;
  },
  extractDeleteRecord: function(store, typeClass, payload) {
    return null;
  }
});
