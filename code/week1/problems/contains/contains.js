"use strict";

var contains = function(element, arr) {
  var index = arr.indexOf(element);
  if(index > -1){
    return true;
  }
  return false;
};

exports.containArr = contains;
