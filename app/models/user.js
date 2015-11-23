import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  full_name: DS.attr('string'),
  profile_type: DS.attr('string'),
  password: DS.attr('string')
});
