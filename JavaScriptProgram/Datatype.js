//number,String,boolean,Bigint,Symbol,undefined,null.--->these all are primitive datatypes.

let age=21;
console.log(age, typeof age);

let fullName="Nitin Moger"
console.log(fullName, typeof(fullName));

let car=true;
console.log(car, typeof(car));

let text=Symbol("HEloo!!");
console.log(text,typeof(text));

let a;
console.log(a, typeof(a));

let b=null;
console.log(b,typeof(b));

//object(Array,function)-->these are non primitive datatypes.

const employee={

    fullName:"Rahul Chowdry",
    salary:28000,
    companyName:"NTT Data",
    manager:false,
};
console.log(employee["salary"]);

employee["salary"]=employee["salary"]+10000;

console.log(employee.companyName);
console.log(employee.fullName);
console.log(employee["salary"]);
