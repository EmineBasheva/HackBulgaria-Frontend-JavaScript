"use strict";

var finD = require("./find").find;

exports.test1 = function(test){
  test.equal(6, finD(function(predicat){return predicat > 5;}, [1,6,3,8,2]));
  test.done();
};

exports.test2 = function(test){
  test.equal(6, finD(function(predicat){return predicat % 2 === 0;}, [1,6,3,8,2]));
  test.done();
};

exports.test3 = function(test){
  test.equal(undefined, finD(function(predicat){return predicat > 10;}, [1,6,3,8,2]));
  test.done();
};
