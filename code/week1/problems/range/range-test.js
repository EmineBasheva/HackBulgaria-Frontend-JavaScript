"use strict";

var range = require("./range").range;

exports.test1 = function(test){
  test.deepEqual([1,2,3,4,5,6,7,8,9,10], range(1, 10));
  test.done();
};

exports.test2 = function(test){
  test.deepEqual([4,5,6,7,8,9,10], range(4, 10));
  test.done();
};

exports.test3 = function(test){
  test.deepEqual([6,7,8,9], range(6, 9));
  test.done();
};
