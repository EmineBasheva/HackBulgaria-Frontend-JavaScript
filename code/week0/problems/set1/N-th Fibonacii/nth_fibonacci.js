"use strict";

var nth_fibonacci = function(n) {
  if(n === 1) {
    return 1;
  }
  else if(n === 2) {
    return 1;
  }
  else {
  return nth_fibonacci(n - 1) + nth_fibonacci(n - 2);
  }
};

exports.isFibonacci = nth_fibonacci;
