"use strict";

var numberToList = require("./numberToList").numberToList;

exports.test1 = function(test){
  test.deepEqual([1, 2, 3], numberToList(123));
  test.done();
};

exports.test2 = function(test){
  test.deepEqual([9, 9, 9, 9, 9], numberToList(99999));
  test.done();
};

exports.test3 = function(test){
  test.deepEqual([1, 2, 3, 0, 2, 3], numberToList(123023));
  test.done();
};
