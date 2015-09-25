var test = require('tape');
var file = require('../arrays-strings/checkPermutation_t.js');

test('1.2a determine if a string is a permutation of the other', function(t) { 
  t.plan(3);
  t.equal(true, file.checkPermutation('nick', 'ickn'));
  t.equal(false, file.checkPermutation('nice', 'nici'));
  t.equal(false, file.checkPermutation('nice', 'nic'));
});

test('1.2b determine if a string is a permutation of the other in O(n)', function(t) { 
  t.plan(3);
  t.equal(true, file.checkPermutation2('nick', 'ickn'));
  t.equal(false, file.checkPermutation2('nice', 'nici'));
  t.equal(false, file.checkPermutation2('nice', 'nic'));
});
