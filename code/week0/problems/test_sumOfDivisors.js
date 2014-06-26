"use strict";

var sumDivisors = require("./sumOfDivisors").sumOfDivisors;

exports.testOne = function(test) {
  test.equal(15, sumDivisors(8));
  test.done();
};

exports.testTwo = function(test) {
  test.equal(8, sumDivisors(7));
  test.done();
};

exports.testThree = function(test) {
  test.equal(1, sumDivisors(1));
  test.done();
};

exports.testFour = function(test) {
  test.equal(2340, sumDivisors(1000));
  test.done();
};
