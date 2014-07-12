"use strict";

var numberBalanced = require("./isNumberBalanced").isNumberBalanced;

exports.testFor9 = function(test){
  test.equal(true, numberBalanced(9));
  test.done();
};

exports.testFor11 = function(test){
  test.equal(true, numberBalanced(11));
  test.done();
};

exports.testFor13 = function(test){
  test.equal(false, numberBalanced(13));
  test.done();
};

exports.testFor121 = function(test){
  test.equal(true, numberBalanced(121));
  test.done();
};

exports.testFor4518 = function(test){
  test.equal(true, numberBalanced(4518));
  test.done();
};

exports.testFor28471 = function(test){
  test.equal(false, numberBalanced(28471));
  test.done();
};

exports.testFor1238033 = function(test){
  test.equal(true, numberBalanced(1238033));
  test.done();
};
