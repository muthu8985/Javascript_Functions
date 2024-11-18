const myFunctions = new Function("am", "bm", "return am * bm");
document.getElementById("demo").innerHTML = myFunctions(4, 3);
//
(function () {
  document.write("Functions invoking");
})();
//
function myFunction1(a, b) {
  return arguments.length;
}
document.getElementById("demo1").innerHTML = myFunction1(4, 3);
// JavaScript Nested Functions

document.getElementById("demo9").innerHTML = add();
function add() {
  let counter = 0;
  function plus() {
    counter += 1;
  }
  plus();
  return counter;
}
