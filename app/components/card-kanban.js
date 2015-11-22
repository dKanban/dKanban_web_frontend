import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'row',
  store: Ember.inject.service(),

  developer: function(){
    // var user = this.get('store').find('user',1);
    // console.log(user.length);
    return '1000';
  }.property('card'),

  click: function() {
    this.sendAction('action', this.get('card'));
  }

});
