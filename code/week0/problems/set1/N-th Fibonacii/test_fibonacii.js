"use strict";

var fibonacci = require("./nth_fibonacci").isFibonacci;

exports.testFibonaciiForOne = function(test) {
test.equal(1, fibonacci(1));
test.done();
};

exports.testFibonaciiForTwo = function(test) {
  test.equal(1, fibonacci(2));
  test.done();
};

exports.testFibonaciiForThree = function(test) {
  test.equal(2, fibonacci(3));
  test.done();
};

exports.testFibonaciiForTen = function(test) {
  test.equal(55, fibonacci(10));
  test.done();
};
