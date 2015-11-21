import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  status: DS.attr('string'),
  priority: DS.attr('string'),
  comments: DS.hasMany('comment'),
  client_owner_id: DS.attr('string'),
  developer_owner_id: DS.attr('string'),
  activities: DS.hasMany('activity'),
});
