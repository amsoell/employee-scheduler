import DS from 'ember-data';

export default DS.Model.extend({
  start_time:  DS.attr('string'),
  end_time:    DS.attr('string'),
  employee_id: DS.attr('number'),
  manager_id:  DS.attr('number'),
  break:       DS.attr('number')
});