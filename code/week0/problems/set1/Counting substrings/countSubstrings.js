"use strict";

var countSubstrings = function(haystack, needle){
  var substring =haystack.split(needle);
  return substring.length - 1;
};

exports.countSubstrings = countSubstrings;
