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
      card = JSON.parse(card);
      if (this.verifyChangeCard(parseInt(card.newStatus),parseInt(card.cardStatus))) {
        this.store.find('demand', card.cardId).then(function(demand){
          demand.set('status', card.newStatus);
          demand.save().then(self.refresh());
        });
      }else{
        alert('Esta mudança não pode ser executada!')
      }
    }
  },

  verifyChangeCard: function(newStatus, oldStatus){
    console.log(newStatus, oldStatus);
    switch(oldStatus) {
      case 0:
        return newStatus === 1
        break;
      case 1:
        return newStatus === 2
        break;
      case 2:
        return newStatus === 3 || newStatus === 1
        break;
      case 3:
        return newStatus === 1
        break;
      default:
        return false
    }
  }


});
