"use strict";

var contains = require("./contains").containArr;

exports.test1 = function(test){
  test.equal(true, contains(1, [1,5,1,3]));
  test.done();
};

