"use strict";

var sumMinMax = require("./sumMinAndMax").sumMinAndMax;

exports.testOne = function(test) {
  test.equal(10, sumMinMax([1,2,3,4,5,6,8,9]));
  test.done();
};

exports.testTwo = function(test) {
  test.equal(90, sumMinMax([-10,5,10,100]));
  test.done();
};

exports.testThree = function(test){
  test.equal(2, sumMinMax([1]));
  test.done();
};
