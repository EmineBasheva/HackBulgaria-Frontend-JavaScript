"use strict";

var intPalindrome = require("./isIntPalindrome").isPalindrome;

exports.testFor1 = function(test){
  test.equal(true, intPalindrome(1));
  test.done();
};

exports.testFor42 = function(test){
  test.equal(false, intPalindrome(42));
  test.done();
};

exports.testFor100001 = function(test){
  test.equal(true, intPalindrome(100001));
  test.done();
};

exports.testFor999 = function(test){
  test.equal(true, intPalindrome(999));
  test.done();
};

exports.testFor123 = function(test){
  test.equal(false, intPalindrome(123));
  test.done();
};
