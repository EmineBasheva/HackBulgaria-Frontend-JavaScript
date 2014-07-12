"use strict";

var ul = require("./ulAndOl").ul;

exports.testForUl1 = function(test){
  var items = [{ "label" : "Item 1"}, { "label" : "Item 2"}];
  var output = "<ul><li>Item 1</li><li>Item 2</li></ul>";

  test.equal(output, ul(items));
  test.done();
};

exports.testForUl2 = function(test){
  var items = [{ "label" : "Item 1"}, { "label" : "Item 2"}, { "label" : "Item 3"}];
  var output = "<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>";

  test.equal(output, ul(items));
  test.done();
};

exports.testForChildUl = function(test){
  var items = [{ "label" : "Item 1"},
             { "label" : "Item 2", "children" : [
                {
                    "label" : "Level 2 of Item 2"
                },
                {
                    "label" : "Another level 2"
                }
             ]}];

  var output = "<ul><li>Item 1</li><li>Item 2<ul><li>Level 2 of Item 2</li><li>Another level 2</li></ul></li></ul>";

  test.equal(output, ul(items));
  test.done();
};

var ol = require("./ulAndOl").ol;

exports.testForOl1 = function(test){
  var items = [{ "label" : "Item 1"}, { "label" : "Item 2"}];
  var output = "<ol><li>Item 1</li><li>Item 2</li></ol>";

  test.equal(output, ol(items));
  test.done();
};

exports.testForOl2 = function(test){
  var items = [{ "label" : "Item 1"}, { "label" : "Item 2"}, { "label" : "Item 3"}];
  var output = "<ol><li>Item 1</li><li>Item 2</li><li>Item 3</li></ol>";

  test.equal(output, ol(items));
  test.done();
};

exports.testForChildOl = function(test){
  var items = [{ "label" : "Item 1"},
             { "label" : "Item 2", "children" : [
                {
                    "label" : "Level 2 of Item 2"
                },
                {
                    "label" : "Another level 2"
                }
             ]}];

  var output = "<ol><li>Item 1</li><li>Item 2<ol><li>Level 2 of Item 2</li><li>Another level 2</li></ol></li></ol>";

  test.equal(output, ol(items));
  test.done();
};
