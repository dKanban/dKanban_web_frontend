import Ember from 'ember';
var { get } = Ember;

export default Ember.Component.extend({
  classNames: 'col s3',

  didInsertElement: function(){
    this.sendAction('refresh');
  },

  actions: {
    sendToRouteAction:function(params){
      this.sendAction('action', params);
    },
    changeCard(cardId) {
      this.sendAction('changeCard', cardId);
  }
}
});
