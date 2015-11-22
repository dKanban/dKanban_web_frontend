import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://dkanban.herokuapp.com/api/v1',
  // beforeSend: function(xhr){
  //    xhr.setRequestHeader('Authorization','mskkisLAKB6Sq-TvbXT-');
  // }
  headers: Ember.computed('session.authToken', function() {
    return {
      "Authorization": 'mskkisLAKB6Sq-TvbXT-',
      "ANOTHER_HEADER": "Some header value"
    };
  })
});
