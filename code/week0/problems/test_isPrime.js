"use strict";

var prime = require("./isPrime").isPrime;

exports.testFor1 = function(test) {
  test.equal(false, prime(1));
  test.done();
};

exports.testFor2 = function(test){
  test.equal(true, prime(2));
  test.done();
};

exports.testFor8 = function(test){
  test.equal(false, prime(8));
  test.done();
};

exports.testFor11 = function(test){
  test.equal(true, prime(11));
  test.done();
};
exports.testFor10 = function(test){
  test.equal(false, prime(-10));
  test.done();
};
