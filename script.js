
var a = 12;
(function () {
  console.log(a);
})();

// //Q7

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    console.log(a);
  };
})();
x();