"use strict";

Array.prototype.first = function(){
  return this[0];
};

Array.prototype.range = function(from, to){
  var arr = [];
  while(from < to + 1){
    arr.push(from);
    from++;
  }
  return arr;
};

Array.prototype.sum = function(){
  var sum = 0;
  this.forEach(function(elem){
    sum += elem;
  });
  return sum;
};

Array.prototype.average = function(){
  return this.sum()/2;
};


