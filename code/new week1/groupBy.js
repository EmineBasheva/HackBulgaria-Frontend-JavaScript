"use strict";

var groupBy = function(groupingFunction, arr){

  var result = {};

  arr.forEach(function(element){
    var key = groupingFunction(element);

    if(!result[key]){
      result[key] = [];
    }
    result[key].push(element);

  });

  return result;
};

exports.groupBY = groupBy;
