"use strict";

var isDecreasing = require("./isDecreasing").isDecreasing;

exports.test1 = function(test){
  test.equal(true, isDecreasing([5,4,3,2,1]));
  test.done();
};

exports.test2 = function(test){
  test.equal(false, isDecreasing([1,2,3]));
  test.done();
};

exports.test3 = function(test){
  test.equal(true, isDecreasing([100, 50, 20]));
  test.done();
};

exports.test4 = function(test){
  test.equal(false, isDecreasing([1,1,1,1]));
  test.done();
};
