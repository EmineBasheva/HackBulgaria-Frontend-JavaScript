"use strict";

var without = require("./without").without;

exports.test1 = function(test){
  test.deepEqual([1,2,3,4], without([5,6], [1,2,3,4,5,6]));
  test.done();
};

exports.test2 = function(test){
  test.deepEqual([1,2,4,6], without([3,5], [1,2,3,4,5,6]));
  test.done();
};

exports.test3 = function(test){
  test.deepEqual([], without([5,6], [5,6]));
  test.done();
};
