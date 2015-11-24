import Ember from 'ember';
import ParseUtilMixin from '../../../mixins/parse-util';
import { module, test } from 'qunit';

module('Unit | Mixin | parse util');

// Replace this with your real tests.
test('it works', function(assert) {
  var ParseUtilObject = Ember.Object.extend(ParseUtilMixin);
  var subject = ParseUtilObject.create();
  assert.ok(subject);
});
