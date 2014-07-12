"use strict";

var only = require("./only").only;

exports.test1 = function(test){
  test.equal(false, only("string", [1,2,3,4]));
  test.done();
};

exports.test2 = function(test){
  test.equal(true, only("number", [1,2,3,4]));
  test.done();
};

exports.test3 = function(test){
  test.equal(true, only("string", ["1","2","3","4"]));
  test.done();
};

exports.test4 = function(test){
  test.equal(false, only("string", ["1",2,"3","4"]));
  test.done();
};
