// P43
// Capitalise the first letter to denote a custome constructor
var Person = function () {
  (this.name = ""),
    (this.introduce = function () {
      return "Hi, my name is " + this.name;
    });
};
// constructors always return an object that inherits from the constructor's prototype
// var this = Object.create(Person.prototype);

var dave = new Person();
dave.name = "Dave";
console.log(dave.introduce());

// methods which are shared accross objects should be stored in the prototype to avoid unecessary declaration
Person.prototype.hasLongName = function () {
  return this.name.length > 5 ? true : false;
};

var clara = new Person();
clara.name = "clara";
console.log(clara.hasLongName());

var elisabeth = new Person();
elisabeth.name = "elisabeth";
console.log(elisabeth.hasLongName());

// Constructors always return an object even if no properties were added
var Ex = function () {
  console.log("bla");
  this.prop = 1;
};

var x = new Ex();
console.log(x.prototype === Ex);
console.log(x.prototype);
