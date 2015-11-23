import Ember from 'ember';
var { get } = Ember;

export default Ember.Component.extend({
  classNames: ['row','draggableItem'],
  attributeBindings : [ 'draggable' ],
  draggable         : 'true',
  //
  dragStart(event) {
      return event.dataTransfer.setData('text/data', get(this, 'card.id'));
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

//TODO FIND ACTION INTO A CONTROLLEr
  // developer: function(){
  //   var store = this.get('parentView.targetObject.store')
  //   return store.find('user',this.get('card.developer_owner_id'));
  // }.property('model'),


  click: function() {
    this.sendAction('action', this.get('card'));
  },


});
