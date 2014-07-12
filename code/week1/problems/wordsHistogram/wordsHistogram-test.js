"use strict";

var wordsHistogram = require("./wordsHistogram").wordsHistogram;

exports.test1 = function(test){
  var str = "A function is a function with a very functional function!";

  var output = {
                    "a" : 3,
                    "function" : 3,
                    "is" : 1,
                    "with" : 1,
                    "very" : 1,
                    "functional" : 1
               };

  test.deepEqual(output, wordsHistogram(str));
  test.done();
};
