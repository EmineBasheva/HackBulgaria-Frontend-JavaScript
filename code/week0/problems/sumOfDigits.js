"use strict";

var sum_of_digits = function(n) {
  if(n < 0) {
    n = -n;
  }
  n = n + "";
  var numbers = n.split("");

  var numbersInt = numbers.map(function(x) {
    return parseInt(x, 10);
  });

  var sum = 0;
  numbersInt.forEach(function(x) {
    return sum += x;
  });

  return sum;
};

exports.sum_of_digits = sum_of_digits;
