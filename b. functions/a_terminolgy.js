//Functions provide  scope since {} don't
if (true) {
  var x = "oops, I created a global variable";
}
console.log(x);

// named function expression
var x = function x() {
  console.log(x.name); // x
};
x();
// anonymous function
var y = function () {
  console.log(y.name); // ""
};
y();

// function declaration (no semi colon at the end)
function z() {
  console.log("bla");
}
z();

// you cannot assign a declaration to a property [you can]
var _ = {
  aFunc: z,
};
_.aFunc();

// names differences
console.log(x.name);
console.log(y.name);
// console.log(x.name)
