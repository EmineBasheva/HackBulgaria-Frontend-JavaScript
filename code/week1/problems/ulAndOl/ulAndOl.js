"use strict";

var ul = function(items) {
  var htmlUl = "<ul>";

  items.forEach(function(elem){
    var keys = Object.keys(elem);
      htmlUl = htmlUl + "<li>";
    keys.forEach(function(key){

      if(key === "children"){
        htmlUl += ul(elem[key]);
      }else{
        htmlUl += elem[key];
      }

    });
      htmlUl = htmlUl + "</li>";
  });
  htmlUl += "</ul>";
  return htmlUl;
};

exports.ul = ul;

var ol = function(items) {
  var htmlOl = "<ol>";

  items.forEach(function(elem){
    var keys = Object.keys(elem);
      htmlOl = htmlOl + "<li>";
    keys.forEach(function(key){

      if(key === "children"){
        htmlOl += ol(elem[key]);
      }else{
        htmlOl += elem[key];
      }

    });
      htmlOl = htmlOl + "</li>";
  });
  htmlOl += "</ol>";
  return htmlOl;
};

exports.ol = ol;
