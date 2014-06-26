"use strict";

var is_prime = function(n){
  n =Math.abs(n);

  if(n === 1){
    return false;
  }

  for(var i = 2; i < n; i++){
    if(n % i === 0){
      return false;
    }
  }
  return true;
};

exports.isPrime = is_prime;
