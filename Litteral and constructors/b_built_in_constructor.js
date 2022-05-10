// P41
// Objects can be created from constructors
// custom or built in (Array, String, Number, Object)
var car = new Object();
car.color = "blue";

//! using new Object is dangerous since the constructor delegates the creation to another constructor
// ! depending on what is being created

var x = new Object(1);
console.log(typeof x);
console.log(x.constructor === Number); // true

// string
var o = new Object("abc");
console.log(o.constructor === String); // true
console.log(typeof o.substring);

// boolean
var o = new Object(true);
console.log(o.constructor === Boolean); // true
