var test = require('tape');
var file = require('../arrays-strings/palindromePermutation_t.js');

test('check if string is a permutation of a palindrome', function(t) { 
  t.plan(1);
  t.equal(true, file.isPermutationsOfPalindrome('Tact Coa'));
});
