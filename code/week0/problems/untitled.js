"use strict";

var nth_fibonacci = function(n) {
  if(n === 0 || n === 1) {
    return 1;
  }

  return nth_fibonacci(n) + nth_fibonacci(n - 1);
};

exports.IsFibonacci = nth_fibonacci;
