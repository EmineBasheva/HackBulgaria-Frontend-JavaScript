"use strict";

Number.prototype.times = function(action){
  var i = 0;
  while(i < this){
    action();
    i++;
  }
};
