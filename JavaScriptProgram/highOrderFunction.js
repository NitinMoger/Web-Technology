

//map using normal function
let ref=[20,30,10,50];
//20*10,30*10,10*10,50*10; ---->maping
let updatedArray=ref.map(function(elements){
    return elements*10;
})
console.log(updatedArray);


//map using arrowfunction
let ref1=[20,30,10,50];
//20*10,30*10,10*10,50*10; ---->maping
let updatedArray1=ref.map((elements)=>{
    return elements*10;
})
console.log(updatedArray1);

//alert msg
// let arrowfunction=()=>{
//     alert("Nitin Moger");
// }
// arrowfunction();


//filter(print al the values is greater then 10)
console.log(ref);
let filteredArray=ref.filter(function(elements){
    let output= elements>10;
    return output;
})
console.log(filteredArray);

console.log(ref)
let afterArray=ref.filter(elements=>{return elements>10});
console.log(afterArray);


//reduce function---->sum of all values   //write reduce using arrow function also
console.log(ref)
let reduceFucntion=ref.reduce(function(currentValues,accumelateValue){
    var sum=currentValues+accumelateValue;
    return sum;
})
console.log(reduceFucntion);


//reduce using arrow function
console.log(ref)
let reduceArray=ref.reduce((currentValues,accumelateValue)=>{
  var sum= currentValues+accumelateValue;
  return sum;
})
console.log(reduceArray);


console.log(ref);
var slice=ref.slice(2);   //slice take a ending index automatically we can mention only starting index
console.log(slice);


console.log(ref);
var splice=ref.splice()
console.log(splice);


//create 5 array each you have applay higher order function.
//tmr create form using Html ,Fname,Lastname,Gender,Dob,Address,Phno,Pasword,submit,clear.