"use strict";

var alL = require("./all").alL;

exports.test1 = function(test){
  var CheckIfEven = function(value){
    if(value % 2 === 0){
        return true;
      }
  };

  var numbers = [2, 4, 6, 10];

  test.equal(true, alL(CheckIfEven, numbers));
  test.done();
};
