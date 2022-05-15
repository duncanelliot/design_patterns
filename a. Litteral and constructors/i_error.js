/* 
    ther are many built in constructores
        Error()
        SyntaxError()
        TypeError()
    
    The resulting object will have many properties
        name
        lineNumber
        message
        filename
        ...etc
*/

// custom error objects can be thrown
(() => {
  try {
    throw {
      name: "an example",
      message: "Oops",
      remedy: () => {},
    };
  } catch (error) {
    console.log(error.message); // oops
    error.remedy();
  }
})();
