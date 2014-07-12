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

exports.groupBy = groupBy;


// var numbers = [];
//   for(var i = 1; i <= 100; i++){
//     numbers.push(i);
//   }

// console.log(groupBy(function(number){
//   return number % 2;
// }, numbers));
