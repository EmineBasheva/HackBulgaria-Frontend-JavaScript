"use strict";

var groupBy = require("../groupBy/groupBy").groupBy;

var countBy = function(countingFunction, arr){
  var grouped = groupBy(countingFunction, arr);
  var result = {};
  var keys = Object.keys(grouped);

  keys.forEach(function(key){
    result[key] = grouped[key].length;
  });

  return result;
};

exports.countBy = countBy;
