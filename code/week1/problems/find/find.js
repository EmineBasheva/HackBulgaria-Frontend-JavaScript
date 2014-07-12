"use strict";

var find = function(predicate, arr){
  var findElem;

  arr.forEach(function(elem){
    if(predicate(elem) && findElem === undefined){
      findElem = elem;
    }
  });

  return findElem;
};

exports.find = find;
