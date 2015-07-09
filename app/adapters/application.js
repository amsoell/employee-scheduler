import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://amsoell.com',
  namespace: 'api/public/v1.1'
});
