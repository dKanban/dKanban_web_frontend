import Ember from 'ember';
var { get } = Ember;

export default Ember.Controller.extend({
  
  todo: Ember.computed('model.[].status',function(){
    return this.get("model").filterBy("status", "0").sortBy("priority")
  }),

  development: function(){

    return this.get("model").filterBy("status", "1").sortBy("priority")
  }.property('model.[].status'),

  testing: function(){
    return this.get("model").filterBy("status", "2").sortBy("priority")
  }.property('model.[].status'),

  homologation: function(){
    return this.get("model").filterBy("status", "3").sortBy("priority")
  }.property('model.[].status'),

});
