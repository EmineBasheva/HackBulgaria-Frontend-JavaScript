"use strict";

var isIncreasing = require("./isIncreasing").isIncreasing;

exports.test1 = function(test){
  test.equal(true, isIncreasing([1,2,3,4,5]));
  test.done();
};

exports.test2 = function(test){
  test.equal(true, isIncreasing([1]));
  test.done();
};

exports.test3 = function(test){
  test.equal(false, isIncreasing([5,6,-10]));
  test.done();
};

exports.test4 = function(test){
  test.equal(false, isIncreasing([1,1,1,1]));
  test.done();
};
