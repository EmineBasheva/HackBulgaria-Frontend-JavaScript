"use strict";

var isNumberBalanced = function(number){
  var sumRight = 0,
      sumLeft = 0;

  var numberArr = number.toString().split("");
  var numberLen = numberArr.length;
  var middleIndex = numberLen / 2;

  if(numberLen % 2 === 0){
    for (var i = 0; i < middleIndex; i++) {
      sumLeft += parseInt(numberArr[i]);
  }}
  else{
    for (var l = 0; l < middleIndex - 1; l++) {
      sumLeft += parseInt(numberArr[l]);
  }}

  if(numberLen % 2 === 0){
    for (var j = middleIndex; j < numberLen; j++) {
      sumRight += parseInt(numberArr[j]);
  }}
  else{
    for (var k = parseInt(middleIndex) + 1; k < numberLen; k++) {
      sumRight += parseInt(numberArr[k]);
  }}

  return sumLeft === sumRight;
};


// console.log(isNumberBalanced(12221));
exports.isNumberBalanced = isNumberBalanced;
