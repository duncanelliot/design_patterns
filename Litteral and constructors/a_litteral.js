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
