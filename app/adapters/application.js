import DS from 'ember-data';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default DS.RESTAdapter.extend(AuthenticatedRouteMixin,{
  host: 'http://localhost:3000/api/v1',
  headers: Ember.computed('session.data.authenticated.auth_token', function() {
    var authentication = this.get('session.data.authenticated');
    return{
      "Authorization": authentication.auth_token
    };
  })
});
