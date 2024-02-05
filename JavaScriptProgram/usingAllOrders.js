let ref=[20,30,40,10,20,60]
let useMap=ref.map(function(element){
    return element*20;
});
console.log(useMap);

let ref1=[30,10,20,30,40,50]
let updatedArray=ref1.map((element)=>{
    return element*10;
})
console.log(updatedArray);


//use filter function
let array=[30,40,30,28,49,10,30]
let updatedArray1=array.filter(function(element){
    let values= element>20;
    return values;
})
console.log(updatedArray1);

let array1=[20,40,50,10,20,36,70,80]
let updatedArray2=array1.filter((elements)=>{
    let value=elements<80;
    return value;
})
console.log(updatedArray2);


//using reduce function
let array2=[30,20,60,10,40,70]
let updatedArray3=array2.reduce(function(curr,acc){
    let sum=curr+acc;
    return sum;
})
console.log(updatedArray3);

let array3=[40,20,45,38,26,70,58]
let updatedArray4=array3.reduce((cur,acc)=>{
    let add=cur+acc;
    return add;
})
console.log(updatedArray4);

