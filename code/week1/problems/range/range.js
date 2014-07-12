"use strict";

var range = function(from, to){
  var arr = [];

  if(from > to){
    return arr;
  }
  else{
    arr.push(from);
  }
    return arr.concat(range(from + 1, to));
};

exports.range = range;
