"use strict";

var map = function(f, arr){

  var n = arr.length,
      i = 0;
  var result = [];
  for(i = 0; i < n; i++){
    result.push(f(arr[i]));
  }
  return result;
};

exports.map = map;
