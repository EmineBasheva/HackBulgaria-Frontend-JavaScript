"use strict";

var any = function(pred, arr){
  var i = 0,
      n = arr.length;

  for(i; i < n; i++){
    if(pred(arr[i])){
      return true;
    }
  }

  return false;
};

exports.any = any;
