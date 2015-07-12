import DS from 'ember-data';

export default DS.Model.extend({
  start_time:  DS.attr('string'),
  end_time:    DS.attr('string'),
  employee_id: DS.belongsTo('user', { async: true }),
  manager_id:  DS.belongsTo('user', { async: true }),
  break:       DS.attr('number')
});