// P43
// Capitalise the first letter to denote a custome constructor
var Person = function () {
  (this.name = ""),
    (this.introduce = function () {
      return "Hi, my name is " + this.name;
    });
};

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
