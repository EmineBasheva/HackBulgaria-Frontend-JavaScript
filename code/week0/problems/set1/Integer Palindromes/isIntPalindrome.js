"use strict";

var is_int_palindrome = function(n){
 var nString = n.toString();
 var numbersOfString = nString.split("");

 var len = numbersOfString.length;

 for(var i = 0; i < len; i++){
    if(numbersOfString[i] !== numbersOfString[len - i - 1]){
      return false;
    }
 }
 return true;
};

exports.isPalindrome = is_int_palindrome;
