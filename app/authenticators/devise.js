import Devise from 'ember-simple-auth/authenticators/devise';

export default Devise.extend({
  serverTokenEndpoint: 'http://localhost:3000/api/v1/sessions',
  tokenAttributeName: 'auth_token',
  tokenPropertyName: 'auth_token',
  passwordField: 'password',
  identificationAttributeName: 'email',
});
