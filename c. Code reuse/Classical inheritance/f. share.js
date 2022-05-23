/* 
  PROs
  - Prototype properties  and method are added

  CONs
  - Args not passed
  - own props missing
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
function Child(name) {}

// inheritance happens here
inherit(Child, Parent);

function inherit(C, P) {
  C.prototype = P.prototype;
}

var kid = new Child();
console.log(kid.say()); // we have the say() but not the name

kid.name = "Rock";
console.log(kid.say()); // we have the say() and the name
