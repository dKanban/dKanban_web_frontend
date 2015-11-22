import Ember from 'ember';

export default Ember.Controller.extend({
  todo: function(){
    return this.get("model").filterBy("status", "0").sortBy("priority")
  }.property('model'),

  development: function(){
    return this.get("model").filterBy("status", "1").sortBy("priority")
  }.property('model'),

  testing: function(){
    return this.get("model").filterBy("status", "2").sortBy("priority")
  }.property('model'),

  homologation: function(){
    return this.get("model").filterBy("status", "3").sortBy("priority")
  }.property('model'),
});
