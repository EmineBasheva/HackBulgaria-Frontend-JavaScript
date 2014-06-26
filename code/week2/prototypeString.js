"use strict";

String.prototype.capitalize = function(){
  return this.toUpperCase();
};

String.prototype.dasharize = function(){
  var that = this.split("_");
  return that.join("-");
};

String.prototype.times = function(amount){
  var i = 0;
  var b = "";
  while(i < amount){
    b += this.toString() + " ";
    i++;
  }

  //var that = this;
  //return [].range(1,amoun).map(function(_){ return that}).join(" ");

  return b;
};

String.prototype.blank = function(){
 //return (this === " " || this === "");
  var that = this.split("");
  return that.every(function(elem){
    return elem === " ";
  }) || this === "";

};


//console.log("  ".blank());
