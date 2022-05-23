/* 
  PROs
  - Own properties and methods are added
  - Args can be passed to parent

  CONs
  - Link to proto is lost 
*/

// parent constructor
function Parent(name) {
  this.name = name || "Elton";
}

// augmenting the protoptype
Parent.prototype.say = function () {
  console.log(this.name);
};

// empty constructor
function Child(name) {
  Parent.apply(this, arguments);
}
Child.prototype = new Parent();

var kid = new Child("John");
console.log(kid.name); // John

delete kid.name;
console.log(kid.name); // Elton

// the link to the proto is there
kid.say(); // Elton
