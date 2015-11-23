import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'row',

  priority: function(){
    var currentPriority = this.get('card.priority')
    if(currentPriority === "0"){
      return "Urgente";
    }else if(currentPriority === "1"){
      return "Alta";
    }
    else if(currentPriority === "2"){
      return "Média";
    }
    else if(currentPriority === "3"){
      return "Baixa";
    }
  }.property(),

  click: function() {
    this.sendAction('action', this.get('card'));
  },


});
