"use strict";

var alL = function(pred, arr){
  var i = 0,
      n = arr.length;

  for(i; i < n; i++){
    if(!pred(arr[i])){
      return false;
    }
  }

  return true;
};

exports.alL = alL;
