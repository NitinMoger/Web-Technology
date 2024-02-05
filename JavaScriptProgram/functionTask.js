

// function exampleUsingLet() {
//     let variableInsideFunction = "I am a let variable inside a regular function.";
//     let anotherVariable = "It is a another variable";
//     console.log(variableInsideFunction);
//     console.log(anotherVariable);
// }
// exampleUsingLet();

// function namedFunctionExample() {
//     const constantInsideNamedFunction = "I am a const variable inside a named function.";
//     console.log(constantInsideNamedFunction);
// }

// namedFunctionExample();

// const arrowFunctionExample = () => {
//     var variableInsideArrowFunction = "I am a var variable inside an arrow function.";
//     console.log(variableInsideArrowFunction);
// };

// arrowFunctionExample();

// (function () {
//     const constantInsideLIFE = "I am a const variable inside an LIFE.";
//     console.log(constantInsideLIFE);
// })();


//local vairable example 
function starting(city,state){
    console.log("Running Location Fuction");
    console.log("city name is= ",city);
    console.log("State name is= ",state);
    
}
starting("Bengaluru","Karnataka");


//global variable example
var city;
var state;
function ending(city,state){
    console.log("Running Location Fuction");
    this.city=city;
    this.state=state;
}
ending("Bengaluru","Karnataka");
console.log("City is: ",city,"State is: ",state);




