import Ember from 'ember';
var { get } = Ember;

export default Ember.Component.extend({
  classNames: ['row'],
  //
  dragStart(event) {

    var result = {
      'cardStatus' : get(this, 'card.status'),
      'cardId' : get(this,'card.id'),
      'developer' : get(this, 'developer_owner_id')
    }
    var card = JSON.stringify(result)
    return event.dataTransfer.setData('text/data', card );
    },

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

  background: function(){
    var currentPriority = this.get('card.priority')
    if(currentPriority === "0"){
      return " red accent-3";
    }else if(currentPriority === "1"){
      return " red lighten-3";
    }
    else if(currentPriority === "2"){
      return "lime darken-3";
    }
    else if(currentPriority === "3"){
      return "teal darken-2";
    }
  }.property(),

//TODO FIND ACTION INTO A CONTROLLEr
  // developer: function(){
  //   var store = this.get('parentView.targetObject.store')
  //   return store.find('user',this.get('card.developer_owner_id'));
  // }.property('model'),


  click: function() {
    this.sendAction('action', this.get('card'));
  },


});
