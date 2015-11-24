import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'col s3',

  didInsertElement: function(){
    this.sendAction('refresh');
  },

  actions: {
    sendToRouteAction:function(params){
      this.sendAction('action', params);
    },
    changeCard(data) {
      this.sendAction('changeCard', data);
  }
}
});
