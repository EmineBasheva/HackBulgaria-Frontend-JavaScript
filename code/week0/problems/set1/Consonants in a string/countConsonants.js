"use strict";

var countConsonants = function(str){
  str = str.toLowerCase();
  var consonant = "bcdfghjklmnpqrstvwxz".split(""),
      countConsonant = 0,
      count = 0;

  consonant.forEach(function(consonant){
    var substr = str.split(consonant);
    count = substr.length - 1;
    countConsonant += count;
  });

  return countConsonant;
};

exports.countConsonants = countConsonants;
