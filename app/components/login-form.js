import Ember from 'ember';
const {service} = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),
  authenticator: 'simple-auth-authenticator:devise',

  actions: {
    authenticate: function(){
      let {identification, password} = this.getProperties('identification', 'password');
      let authenticator = 'authenticator:devise';

      return this.get('session').authenticate(authenticator, identification, password).catch((reason) =>{
        this.set('errorMessage', reason);
      });
    }
  }
});
