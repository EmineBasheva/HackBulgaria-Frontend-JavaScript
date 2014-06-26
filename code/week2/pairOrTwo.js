"use strict";
function Pair(left, right){
  if(!(this instanceof Pair)){
    return new Pair();
  }
  this.left = left;
  this.right = right;
}

Pair.prototype.equals = function(pair) {
  return (pair.left === this.left && pair.right === this.right);
};

Pair.prototype.toString = function(){
  return ["(", this.left.toString(), this.right.toString(), ")"].join("");
};

Pair.prototype.toList = function(){
  return [this.left, this.right];
};

Pair.prototype.combine = function(f){
  return f(this.left, this.right);
};
