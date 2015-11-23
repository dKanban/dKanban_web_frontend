import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
var { get } = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model: function(id){
    var post = this.get('store').query('demand', id);
    return post;
  },


  actions: {
    detailCard: function(params){
      this.transitionTo('detail',params);
    },
    refreshModel: function(){
      this.refresh();
    },
    changeCard(cardId) {
      var self = this;
      var saveSucess = function(demand) {
        self.refresh();
      };
      this.store.find('demand', cardId).then(function(demand){
        demand.set('status', "2");
        demand.save().then(saveSucess);
      });
    }
  }


});
