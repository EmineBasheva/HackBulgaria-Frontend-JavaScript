"use strict";

var always = function(value){
  var returnFunc = function(value){
    return value;
  };
  return returnFunc(value);
};

var f = always(5);
console.log(f()); // 5
