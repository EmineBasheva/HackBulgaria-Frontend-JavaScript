"use strict";

var sumOfDigits = require("./sumOfDigits").sum_of_digits;

exports.testFirst = function(test) {
  test.equal(43, sumOfDigits(1325132435356));
  test.done();
};

exports.testTwo = function(test) {
  test.equal(6, sumOfDigits(123));
  test.done();
};

exports.testThree = function(test) {
  test.equal(6, sumOfDigits(6));
  test.done();
};

exports.testFour = function(test) {
  test.equal(1, sumOfDigits(-10));
  test.done();
};
