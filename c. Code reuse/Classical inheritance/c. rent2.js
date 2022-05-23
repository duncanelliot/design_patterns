/* 
  PROs
  - Own properties and methods are added
  - Args can be passed to parent
  - true copy of parent prop created
      - parent prop cannot be frigged with

  CONs
  - Link to proto is lost 
*/

// parent constructor
function Parent(name) {
  this.name = name || "Elton";
}

// augmenting the protoptype
Parent.prototype.say = function () {
  return this.name;
};

// empty constructor
function Child(name) {
  Parent.apply(this, arguments);
}

var kid = new Child();
console.log(kid.name); // Elton

// the link to the proto is broken
console.log(kid.say()); // kid.say is not a function
