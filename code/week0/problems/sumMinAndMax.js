"use strict";

var sum_of_min_and_max = function(arr){
  var min = Math.min.apply(Math, arr),
      max = Math.max.apply(Math, arr);
  return min + max;
};

exports.sumMinAndMax = sum_of_min_and_max;
