"use strict";

var sum = function(a, b){
  if(typeof a === "number" && typeof b === "number"){
    return a + b;
  }
  else{
    throw new TypeError("Any type isn't number!");
  }
};

var concat = function(a, b){
  if(typeof a === "string" && typeof b === "string"){
    return a + b;
  }
  else{
    throw new TypeError("Any type isn't string!");
  }
};

exports.sumNum = sum;
exports.concatStr = concat;
