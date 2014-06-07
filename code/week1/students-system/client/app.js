"use strict";

$(document).ready(function() {
  //alert("Hooray, everything runs ok. You can remove this annoying alert from the code.");
  var studentsAll = [];

  var groupBy = function(groupingFunction, arr){

    var result = {};

    arr.forEach(function(element){
      var key = groupingFunction(element);

      if(!result[key]){
        result[key] = [];
      }
      result[key].push(element);

    });

    return result;
  };

  var generatingTable = function(students){
    var allStudents = [];
      students.forEach(function(student){
        var oneStudentInf = ["<tr>",
                                "<td>", student.id ,"</td>",
                                "<td>", student.name, "</td>",
                                "<td>", student.course, "</td>",
                            "</tr>"].join("");
                // $(".students-grid-body").append(oneStudentInf);
        allStudents.push(oneStudentInf);
        });
      allStudents = allStudents.join("");

     var table = ["<thead>",
                     "<tr>",
                         "<th>", "Id", "</th>",
                         "<th>", "Name", "</th>",
                         "<th>", "Course", "</th>",
                     "</tr>",
                   "</thead>",
                   "<tbody>",
                   allStudents,
                   "</tbody>"].join("");
      // $(".table").append(table);
      return table;
  };

  $.getJSON("http://localhost:3000/students", function(students, textStatus) {
      console.log(textStatus);
      console.log(students);
      $(".table").append(generatingTable(students));
      studentsAll = students;
      //start here

      //var button = $("#group-btn");
  });

  $("#group-btn").on("click", function() {
    //alert("What are you looking at? Go implement that logic.");
    $(".table").empty();
    var groups = groupBy(function(student){
      return student.course;
    }, studentsAll);
    console.log(groups);
    Object.keys(groups).forEach(function(group){
      $(".table").append(generatingTable(groups[group]));
    });

  });

  $("#search-btn").on("click", function() {
    var searched = $("#search-box").val();
    //alert("You searched for " + searched);

  });
});



//https://gist.github.com/RadoRado/97d3511ba058a4e13b33
