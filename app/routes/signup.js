import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    createUser: function(){
      var self = this;
      var newUser = this.store.createRecord('user',{
        email: this.controller.get('email'),
        full_name: this.controller.get('full_name'),
        password: this.controller.get('password'),
        profile_type: "1"
      });
      newUser.save().then(function(){
        self.transitionTo('login');
      });
    }
  }
});
