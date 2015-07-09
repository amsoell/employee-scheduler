import DS from 'ember-data'

export default DS.JSONSerializer.extend({
  extractArray: function(store, typeClass, payload) {
    console.log(payload.users);
    return payload.users;
/*
    if (payload.users) {
      payload = payload.users;
    }

    return this._super(store, type, payload);
*/
  },
  extractDeleteRecord: function(store, typeClass, payload) {
    return null;
  }
});