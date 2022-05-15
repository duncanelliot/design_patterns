// arrays can be created using the litteral and the constructors
var a = new Array("uno", "dos", "tres");
console.log(a);

// new can be ommitted
var b = Array("uno", "dos", "tres");
console.log(b);

// litteral syntax is cleaner
var c = ["uno", "dos", "tres"];
console.log(c);

// and less dangerous
var x = new Array(3);
console.log(x[0]);
console.log(x.length);

// because when only one argument is supplied, it assumes that it is the length
try {
  var y = new Array(3.14);
} catch (error) {
  console.log(typeof y);
}

// use the Array.isArray() method to check for array since arrays are objects
console.log(typeof [1, 2]);
console.log("Am I an array: " + Array.isArray([1, 2, 3]));
