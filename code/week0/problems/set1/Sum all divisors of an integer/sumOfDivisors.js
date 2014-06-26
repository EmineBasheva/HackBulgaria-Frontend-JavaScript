"use strict";

var sum_of_divisors = function(n) {
  var i = 1, sum = 0;
  for(i; i <= n; i++){
    if(n % i === 0){
      sum += i;
    }
  }
  return sum;
};

exports.sumOfDivisors = sum_of_divisors;
