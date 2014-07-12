"use strict";

var pluck = function(property, arr) {
  return arr.map(function(elem){
    return elem[property];
  });
};

exports.pluck = pluck;
