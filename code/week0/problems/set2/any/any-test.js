"use strict";

var any = require("./any").any;

exports.test1 = function(test){
  var CheckIfEven = function(value){
    if(value % 2 === 0){
        return true;
      }
  };

  var numbers = [1, 15, 4, 10, 11, 22];

  test.equal(true, any(CheckIfEven, numbers));
  test.done();
};
