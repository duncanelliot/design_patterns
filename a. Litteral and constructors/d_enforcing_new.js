function Waffle() {
  this.tastes = "yummy";
}
var x = Waffle();

// invoking a custom constructor without the new keyword is bad
// it appends all the properties to the global object in the browser
console.log("Invoking without new attaches properties to the global object");
console.log(global.hasOwnProperty("tastes"));

// to prevent this behaviour, attach properties to that
function Whatffle() {
  var that = {};
  that.tastes = "yummy";
  return that;
}
var y = Whatffle();
console.log(y.tastes);

Whatffle.prototype.isDelicious = true;
console.log("Using the that pattern loses the link to the prototype");
console.log(y.hasOwnProperty("isDelicious"));

// to remedy use the self-invoking pattern
function Betterffle() {
  if (!(this instanceof arguments.callee)) {
    //arguments.callee = Betterffle
    return new Betterffle();
  }

  this.tastes = "yummy";
}
Betterffle.prototype.isDelicious = true;
var z = Betterffle();

console.log("Using the self invoking pattern retains the link to the prototype");
console.log(`I am delicious: ${z.isDelicious}`);
