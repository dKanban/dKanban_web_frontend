import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  actions: {
    createDemand: function(){
      self = this;
      
      var priority = this.getPriority(this.controller.get('selectedPriority'))
      var demand = this.store.createRecord('demand', {
        title: this.controller.get('title'),
        description: this.controller.get('description'),
        priority: parseInt(priority),
        status: "0"
      });
      demand.save().then(function(){
        self.transitionTo('dashboard');
      }).catch(function(error){
        console.log(error);
      });
    }
  },

  getPriority: function(text){
    if(text === "Urgente"){
      return 0;
    }else if(text === "Alta"){
      return 1;
    }
    else if(text === "Média"){
      return 2;
    }
    else if(text === "Baixa"){
      return 3;
    }
  }
});
