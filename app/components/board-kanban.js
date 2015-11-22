import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'col s3',

  actions: {
    sendToRouteAction:function(params){
      this.sendAction('action', params);
    }
  }
});
