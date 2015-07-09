import DS from 'ember-data';

export default DS.Model.extend({
  start_time:  DS.attr(),
  end_time:    DS.attr(),
  employee_id: DS.attr(),
  manager_id:  DS.attr(),
  break:       DS.attr()
});