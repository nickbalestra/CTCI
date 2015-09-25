var test = require('tape');
var file = require('../arrays-strings/stringCompression_t.js');

test('1.6 perform basic string compression with repeated characters counts.', function(t) { 
  t.plan(2);
  t.equal('a2b1c5a3', file.stringCompression('aabcccccaaa'));
  t.equal('nick', file.stringCompression('nick'));
});
