"use strict";

var isGroupBy = require("./groupBy").groupBY;

exports.testForStudents = function(test){
  var students = [{
  name : "Daniel Taskoff",
  course : "Frontend JavaScript"
}, {
  name : "Elena Jeleva",
  course : "Programming 101"
}, {
  name : "Luboslava Dimitrova",
  course : "Frontend JavaScript"
}, {
  name : "Anton Antonov",
  course : "Core Java"
}, {
  name : "Nikola Dichev",
  course : "Core Java"
}];

  var output = { "Frontend JavaScript":
   [ { name: "Daniel Taskoff", course: "Frontend JavaScript" },
     { name: "Luboslava Dimitrova", course: "Frontend JavaScript" } ],
  "Programming 101": [ { name: "Elena Jeleva", course: "Programming 101" } ],
  "Core Java":
   [ { name: "Anton Antonov", course: "Core Java" },
     { name: "Nikola Dichev", course: "Core Java" } ] };

  test.equal(output, isGroupBy(function(student) {
    return student.course;
  }, students));
  test.done();
};
