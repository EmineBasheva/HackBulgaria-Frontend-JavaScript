"use strict";

var filter = require("./filter").filter;

exports.test1 = function(test){
  var users = [{
    "name" : "Rado",
    "score" : 50
}, {
    "name" : "Ivan",
    "score" : 67
}, {
    "name" : "Vlado",
    "score" : 30
}];

  var result = [ { name: "Rado", score: 50 },
  { name: "Ivan", score: 67 } ];
  test.deepEqual(result, filter(function(user) {
                            return user.score > 40;
}, users));
  test.done();
};
