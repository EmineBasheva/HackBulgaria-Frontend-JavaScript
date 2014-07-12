"use strict";

var only = function(type, arr){
  return arr.every(function(elem){
    return typeof elem === type;
  });
};

exports.only = only;
