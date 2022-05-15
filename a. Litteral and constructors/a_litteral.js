// simplest way to create an object
var dog = {
  name: "fido",
};

// properties can be added later on
dog.getName = function () {
  return dog.name;
};

// and can be overriden
dog.getName = function () {
  return "Fido";
};

// and deleted
delete dog.getName;

// the constructor to littereals is the Object() constructor
var y = { aProp: 1 };
console.log(y.constructor);
console.log(y.constructor === Object);
