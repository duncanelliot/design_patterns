/*
    JS has 5 types of primitives
        boolean
        string
        number
        null
        undefined

    boolean, string and number have primitive wrappers 
*/

var x = 100;
console.log(typeof x); //number

var y = new Number(100);
console.log(typeof y); // object

/* 
    Wrapper object s have useful methods that the primitive dont have 
        number
            toExponential()
            toFixed()
        string
            substring()
            charat()
            toLowerCase()
            length
    
    These methods can be invoked on primitives but they are temporarily converted to object in the process
*/

// object dont maintain states
var x = new Number(100);
x.isBig = true;
console.log(`is z big: ${x.isBig}`);

// but primitive do
var y = 100;
y.isBig = true;
console.log(`is y big: ${y.isBig}`);
