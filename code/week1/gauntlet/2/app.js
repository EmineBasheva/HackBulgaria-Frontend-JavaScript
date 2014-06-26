"use strict";

$(document).ready(function(){
    var classes = [".first", ".second", ".third"];
  $(".myButton").on("click", function(){

    $(".first").addClass(".highlight");
    //$(classes).removeClass(".highlight");

  });
});



//console.log("Empty I am.");
