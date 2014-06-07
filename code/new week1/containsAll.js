"use strict";

var containsAll = function(elements, arr){
  var elementInArr = function(element){
    return(arr.indexOf(element) > -1);
  };
  var isTrue = elements.every(elementInArr);
  return (isTrue);
};

exports.containsAll = containsAll;
