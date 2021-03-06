import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  extractArray: function(store, typeClass, payload) {
    return payload.users;
  },
  extractDeleteRecord: function(store, typeClass, payload) {
    return null;
  }
});
