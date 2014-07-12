"use strict";

var wordsHistogram = function(str){
  str = str.toLowerCase(str);
  str = str.replace(/[\.,!;:\-]/g,"");
  var strArr = str.split(" ");

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

exports.wordsHistogram = wordsHistogram;
