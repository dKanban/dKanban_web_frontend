import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin,{

  session: service('session'),

  model: function(){
    return this.get('store').findAll('demand');
  },

  todo: function(){
    console.log('eaee');
    return this.get('model').filterBy('status',0);
  }.property(),

 actions: {
   logout() {
     this.get('session').invalidate();
   }
 }
});
