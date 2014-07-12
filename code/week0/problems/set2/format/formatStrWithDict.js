"use strict";

var countSubstrings = function(haystack, needle){
  var substring =haystack.split(needle);
  return substring.length - 1 !== 0;
};

var format = function(str, dict){
  for(var key in dict){
    while(countSubstrings(str, key)){
      str = str.replace("{"+key+"}", dict[key]);
    }
  }
  return str;
};

exports.formatting = format;
