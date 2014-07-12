"use strict";

var reduce = function(f, arr, startingValue){
  if(startingValue === undefined){
    startingValue = 0;
  }

  var i = 0,
      n = arr.length;

  f(startingValue, arr[0]);
  for(i; i < n; i++){
    f(arr[i], arr[i + 1]);
  }
};

exports.reduce = reduce;
