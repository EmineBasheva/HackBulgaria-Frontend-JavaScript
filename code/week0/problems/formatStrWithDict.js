"use strict";

var format = function(str, dict){
  var words = str.split(" "),
      n = words.length;
     // newStr;

  for(var i = 0; i < n; i++) {
    for(var key in dict){
      if("{" + key + "}" === words[i][words[i].length - 1]){
        //str = str.replace(words[i], dict[key]);
        words[i] = dict[key];
      }
    }

  }
  str = words.join(" ");
  return str;
};

exports.formatting = format;
