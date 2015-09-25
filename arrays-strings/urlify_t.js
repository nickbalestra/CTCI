/*
 * 1.3 Write a method to replace all spaces in a string with '%20'. You may assume
 * that the string has sufficient space at the end to hold the additional characters, and that
 * you are given the "true" length of the string.
 */

// test > replace all spaces in a string with %20
// # urlify('Mr John Smith       ', 13) == 'Mr%20John%20Smith'
exports.urlify = function(str, len) {
  return str.slice(0,len).split(' ').join('%20')
}

// test > replace all spaces in a string with %20
// # urlify2('Mr John Smith       ', 13) == 'Mr%20John%20Smith'
exports.urlify2 = function(str, len) {
  var chars = [];
  for(var i = 0; i < len; i++) {
    if (str.charAt(i) === ' ') chars[i] = '%20';
    else chars[i] = str.charAt(i);
  }
  return chars.join('');
}
