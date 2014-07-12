"use strict";

var reduce = require("./reduce").reduce;

exports.test1 = function(test){
  var arr = [1,2,3,4];

  var sum = function(arr) {
    return arr.reduce(function(acc, next) {
        return acc + next;
    }, 0);
  };

  test.equal(10, sum(arr));
  test.done();
};

exports.test2 = function(test){
  var arr =[0, 1, 2, 3];

  test.equal(6, arr.reduce(function(a, b) {
                  return a + b;
}));
  test.done();
};

exports.test3 = function(test){
  var arr =[1, 2, 3];

  test.equal(6, arr.reduce(function(a, b) {
                  return a * b;
}));
  test.done();
};
