"use strict";

var map = require("./map").map;

exports.test1 = function(test){
  test.deepEqual([1, 4, 9], map(function(x) {
                                  return x * x;
                              }, [1,2,3]));
  test.done();
};
