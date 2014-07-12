"use strict";

var countSubstrings = require("./countSubstrings").countSubstrings;

exports.testForIs = function(test){
  test.equal(2, countSubstrings("This is a test string", "is"));
  test.done();
};

exports.testForBaba = function(test){
  test.equal(2, countSubstrings("babababa", "baba"));
  test.done();
};

exports.testForO = function(test){
  test.equal(3, countSubstrings("JavaScript is an awesome language to program in!", "o"));
  test.done();
};

exports.testForReally = function(test){
  test.equal(0, countSubstrings("We have nothing in common!", "really?"));
  test.done();
};

exports.testForThis = function(test){
  test.equal(2, countSubstrings("This is this and that is this", "this"));
  test.done();
};
