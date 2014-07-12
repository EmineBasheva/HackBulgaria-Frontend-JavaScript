"use strict";

var countConsonants = require("./countConsonants").countConsonants;

exports.test1 = function(test){
  test.equal(7, countConsonants("JavaScript"));
  test.done();
};

exports.test2 = function(test){
  test.equal(11, countConsonants("Theistareykjarbunga"));
  test.done();
};

exports.test3 = function(test){
  test.equal(7, countConsonants("grrrrgh!"));
  test.done();
};

exports.test4 = function(test){
  test.equal(44, countConsonants("Github is the second best thing that happend to programmers, after the keyboard!"));
  test.done();
};

exports.test5 = function(test){
  test.equal(6, countConsonants("A nice day to code!"));
  test.done();
};
