"use strict";

var filter = function(pred, arr){
  var i = 0,
      n = arr.length;

  var result = [];

  for(i; i < n; i++){
    if(pred(arr[i])){
      result.push(arr[i]);
    }
  }

  return result;
};

exports.filter = filter;
