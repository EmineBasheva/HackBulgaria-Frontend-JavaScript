"use strict";

var contains = require("./contains").containArr;

exports.test1 = function(test){
  test.equal(true, contains(1, [1,5,1,3]));
  test.done();
};

exports.test2 = function(test){
  test.equal(false, contains(1, ["Banana", "Orange", "Apple", "Mango"]));
  test.done();
};

exports.test3 = function(test){
  test.equal(true, contains("Apple", ["Banana", "Orange", "Apple", "Mango"]));
  test.done();
};
