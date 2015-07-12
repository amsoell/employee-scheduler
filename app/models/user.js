import DS from 'ember-data';

export default DS.Model.extend({
  name:     DS.attr('string'),
  email:    DS.attr('string'),
  phone:    DS.attr('string'),
  role:     DS.attr('string'),
  password: DS.attr('string'),
  employee_shifts:   DS.hasMany('shift', { inverse: 'employee_id', async: true}),
  manager_shifts:    DS.hasMany('shift', { inverse: 'manager_id', async: true }),
  shifts: Ember.computed('employee_shifts', 'manager_shifts', function() {
    var employee_shifts = this.get('employee_shifts') || [];
    var manager_shifts = this.get('manager_shifts') || [];
    var all_shifts = Ember.A();

    all_shifts.pushObjects(employee_shifts.toArray());
    all_shifts.pushObjects(manager_shifts.toArray());

    return all_shifts;
  })
});