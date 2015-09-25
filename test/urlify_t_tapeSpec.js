var test = require('tape');
var file = require('../arrays-strings/urlify_t.js');

test('replace all spaces in a string with %20', function(t) { 
  t.plan(1);
  t.equal('Mr%20John%20Smith', file.urlify('Mr John Smith       ', 13));
});

test('replace all spaces in a string with %20', function(t) { 
  t.plan(1);
  t.equal('Mr%20John%20Smith', file.urlify2('Mr John Smith       ', 13));
});
