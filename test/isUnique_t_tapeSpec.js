var test = require('tape');
var file = require('../arrays-strings/isUnique_t.js');

test('1.1 determine if a string has all unique characters', function(t) { 
  t.plan(2);
  t.equal(true, file.isUnique('nick'));
  t.equal(false, file.isUnique('balestra'));
});
