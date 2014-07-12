"use strict";

var isDecreasing = function(seq){
  var i = 0;
  while(i < seq.length - 1){
    if(seq[i] <= seq[i + 1]){
      return false;
    }
    i++;
  }
  return true;
};

exports.isDecreasing = isDecreasing;
