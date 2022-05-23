/* 
  PROs
  - Own properties and methods are added
  - Prototype properties  and method are added

  CONs
  - Own props tend to be instance specific and not wanted (in this case Elton)
  - Usually we only want prototype props
  - Args cannot be passed on to the parent 
        var _  = new Child("Seth")
        _.say() ==> Elton 
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
  C.prototype = new P();
}

var kid = new Child();
console.log(kid.say());
