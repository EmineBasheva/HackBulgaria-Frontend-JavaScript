"use strict";

function Point(x, y){

  this.getX = function(){
    return x;
  };

  this.getY = function(){
    return y;
  };

  this.xInc = function(){
    x += 1;
    return x;
  };

  this.xDec = function(){
    x -= 1;
    return x;
  };

  this.yInc = function(){
    y += 1;
    return y;
  };

  this.yDec = function(){
    y -= 1;
    return y;
  };

}

Point.prototype.equals = function(point){
  return (point.getX() === this.getX() && point.getY() === this.getY());
};

Point.prototype.toString =function(){
  return ["point(", this.getX(), ",", this.getY(), ")"].join("");
};



function Robot(startPoint){
  this.getPoint = function(){
    return (startPoint.getX(), startPoint.getY());
  };

  this.moveLeft = function(amount){
    var i = 0;
    while(i < amount){
      this.xDec();
      //garmi
      i++;
    }
  };
}

var robot = new Robot(new Point(5,5));

console.log(robot.moveLeft(2));
