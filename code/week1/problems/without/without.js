"use strict";

var without = function(exclude, arr) {
  var result = [];

  arr.forEach(function(elem){
    if(exclude.indexOf(elem) === -1){
      result.push(elem);
    }
  });
  return result;
};

without([5,6], [1,2,3,4,5,6]);

exports.without = without;
