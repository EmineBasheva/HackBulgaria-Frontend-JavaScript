"use strict";

var contAll = require("./containsAll").containsAll;

exports.test1 = function(test){
  test.equal(true, contAll([1,2,3], [1,2,3,4,5]));
  test.done();
};

exports.test2 = function(test){
  test.equal(false, contAll(["a","b","v"], ["a","b","d","g"]));
  test.done();
};

exports.test3 = function(test){
  test.equal(true, contAll([1,"a","ab"], [2,1,"h","a","gt","ab","serb"]));
  test.done();
};

exports.test4 = function(test){
  test.equal(true, contAll([2,4,6,8,0], [0,6,4,8,2,5,8,2,1,3,6,2]));
  test.done();
};

exports.test5 = function(test){
  test.equal(false, contAll([2,4,6,8,0], [6,4,8,2,5,8,2,1,3,6,2]));
  test.done();
};
