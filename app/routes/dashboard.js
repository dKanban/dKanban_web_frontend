import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
var { get } = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model: function(id){
    var demand = this.get('store').query('demand', id);
    return demand;
  },
  
  actions: {
    detailCard: function(params){
      this.transitionTo('detail',params);
    },
    refreshModel: function(){
      this.refresh();
    },
    changeCard(card) {
      var self = this;
      var saveSucess = function(demand) {
        self.refresh();
      };
      console.log('o card é ' + card);
      card = JSON.parse(card)
      this.store.find('demand', card.cardId).then(function(demand){
        demand.set('status', card.newStatus);
        demand.save().then(saveSucess);
      });
    }
  }


});
