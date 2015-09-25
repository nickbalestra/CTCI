var test = require('tape');
var file = require('../arrays-strings/oneAway_t.js');

test('1.5 check if strings are one edit or 0 away.', function(t) { 
  t.plan(4);
  t.equal(true, file.oneAway('pale', 'ple'));
  t.equal(true, file.oneAway('pales', 'pale'));
  t.equal(true, file.oneAway('pale', 'bale'));
  t.equal(false, file.oneAway('pale', 'bake'));
});
