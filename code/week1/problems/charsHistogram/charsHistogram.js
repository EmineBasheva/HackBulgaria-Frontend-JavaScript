"use strict";

var charsHistogram = function(str){
  str = str.toLowerCase(str);
  str = str.replace(/[\.,!\ ;:\-]/g,"");
  var strArr = str.split("");
  var result = {};

  strArr.forEach(function(elem){
    if(!result[elem]){
      result[elem] = 1;
    }
    else{
      result[elem] += 1;
    }
  });
  return result;
};

var str = "Count the characters in this very profound sentence";
console.log(charsHistogram(str));
//charsHistogram(str);

exports.charsHistogram = charsHistogram;
