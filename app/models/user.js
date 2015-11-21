import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('email'),
  full_name: DS.attr('string'),
  profile_type: DS.attr('integer')
});
