"use strict";

var primeFactorization = function(n){
  var arrPower = [],
      i = 2,
      countPower = 0;
  while(n > 1 && i <= n){
    countPower = 0;

    while(n % i === 0){
      countPower += 1;
      n = n / i;
    }
    if(countPower !== 0){
      arrPower.push([i , countPower]);
    }
    i++;
  }

  return arrPower;
};

exports.primeFactorization = primeFactorization;
