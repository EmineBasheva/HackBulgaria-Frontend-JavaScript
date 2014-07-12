"use strict";

var countVowels = function(str){
  str = str.toLowerCase();
  var vowels = ["a", "e", "i", "o", "u", "y"],
      countVowel = 0,
      count = 0;

  vowels.forEach(function(vowel){
    var substr = str.split(vowel);
    count = substr.length - 1;
    countVowel += count;
  });

  return countVowel;
};

exports.countVowels = countVowels;
