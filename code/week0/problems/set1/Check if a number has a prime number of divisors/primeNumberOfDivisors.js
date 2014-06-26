"use strict";

var prime_number_of_divisors = function(n){
  n =Math.abs(n);
  var countDivisors = 2;

  for(var i = 2; i < n; i++){
    if(n % i === 0){
      countDivisors++;
    }
  }

  for(var j = 2; j < countDivisors; j++){
    if(countDivisors % j === 0){
      return false;
    }
  }
  return true;

};

exports.primeNumberDivisors = prime_number_of_divisors;
