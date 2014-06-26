"use strict";

var numberDivisors = require("./primeNumberOfDivisors").primeNumberDivisors;

exports.testFor7 = function(test){
  test.equal(true, numberDivisors(7));
  test.done();
};

exports.testFor8 = function(test){
  test.equal(false, numberDivisors(8));
  test.done();
};

exports.testFor9 = function(test){
  test.equal(true, numberDivisors(9));
  test.done();
};
