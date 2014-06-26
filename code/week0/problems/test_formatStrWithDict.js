"use strict";

var testingFormat = require("./formatStrWithDict").formatting;

exports.testForFormat = function(test){
  test.equal("JavaScript is a very weird language!", testingFormat("{lang} is a very weird {thing}!", {
  "lang" : "JavaScript",
  "thing" : "language"
}));
  test.done();
};
