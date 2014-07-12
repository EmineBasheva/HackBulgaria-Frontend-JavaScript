"use strict";

var always = require("./always").always;

exports.test1 = function(test){
  var f = always(5);

  test.equal(5, f());
  test.done();
};
