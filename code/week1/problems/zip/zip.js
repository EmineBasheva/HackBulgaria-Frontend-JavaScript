"use strict";

var zip = function() {
  var arg = arguments,
      arr = [];

  var keys = Object.keys(arg);
  keys.forEach(function(key, i){
    arg[key].forEach(function(elem, index){
      if(i === 0){
        arr.push([elem]);
      }
      else{
        arr[index].push(elem);
      }
    });
  });
  return arr;
};

exports.zip = zip;
