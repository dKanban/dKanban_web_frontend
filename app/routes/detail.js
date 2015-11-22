import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model: function(params){
    return this.store.find('demand',params.demand_id);
  },
  actions: {
    changeStatus: function(){
      console.log('eaeee');
    }
  }
});
