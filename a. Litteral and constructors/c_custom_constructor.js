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
console.log(`Clara has a long name: ${clara.hasLongName()}`);

var elisabeth = new Person();
elisabeth.name = "elisabeth";
console.log(`Elisabeth has a long name: ${elisabeth.hasLongName()}`);

// Constructors always return an object even if no properties were added
var AnotherPerson = function () {};
var x = new AnotherPerson();

console.log("An empty object created can be created using an a custom constructor function");
console.log(x); // The empty object inherits from the constructor's prototype

console.log(`An object created using a custom constructor has it's constructor property pointing to the custom constructor`);
console.log(x.constructor === AnotherPerson); // The constructor property IS the custom constructor

console.log("The constructor of a litteral object is the [Object]");
console.log({}.constructor === Object);

console.log(`An object created using a custom constructor inherits the Custom constructor's prototype`);
console.log(dave.__proto__ == Person.prototype); // the object inherits the internal prototype from the Object() constructor

console.log("The prototype of the custom constructor is same as the Object.prototype");
console.log(x.__proto__.__proto__ === Object.prototype);

console.log("The prototype of a litteral object is the [Object.prototype]");
console.log({}.__proto__ === Object.prototype);
