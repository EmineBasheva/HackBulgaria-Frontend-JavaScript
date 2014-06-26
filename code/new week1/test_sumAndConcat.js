"use strict";

var sum = require("./sumAndConcat").sumNum;

exports.testThrowsSum = function(test){
  test.throws(function(){
    sum(2, "str");
  });
  test.done();
};

exports.testNum = function(test){
  test.equal(6, sum(4, 2));
  test.done();
};

var concatS = require("./sumAndConcat").concatStr;

exports.testThrowsConct = function(test){
  test.throws(function(){
    concatS("str", 6);
  });
  test.done();
};

exports.testConcat = function(test){
  test.equal("This is new string!", concatS("This is", " new string!"));
  test.done();
};
