"use strict";

var numberToList = function(n){
  var strN = n.toString();
  var arrN = strN.split("");

  arrN = arrN.map(function(number){
    return parseInt(number, 10);
  });

  return arrN;
};

exports.numberToList = numberToList;
