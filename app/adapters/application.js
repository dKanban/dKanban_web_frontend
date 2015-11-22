import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:3000/api/v1',
  // beforeSend: function(xhr){
  //    xhr.setRequestHeader('Authorization','mskkisLAKB6Sq-TvbXT-');
  // }
  headers: Ember.computed('session.authToken', function() {
    return {
      "Authorization": 'nHGwrerymCx4zPpeVC4q',
      "ANOTHER_HEADER": "Some header value"
    };
  })
});
