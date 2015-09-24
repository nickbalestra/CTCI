/*
 * Is Unique: Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

function isUnique(str){
  var charHash = {},
      uniqueness = true;

  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    if (charHash[char] === undefined) {
      charHash[char] = char;
    } else {
      uniqueness = false;
      break;
    }
  }
  return uniqueness;
};

