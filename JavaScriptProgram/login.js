

let ref={
    name:"Nitin",
    password:"6364749950"
};
console.log(ref); //object
var stringData=JSON.stringify(ref);          //converting object to objectString we used JSON.stringfy()
console.log(stringData)//objectString.
// var parse=JSON.parse(stringData);            //converting objectString to object we used JSON.parse()
// console.log(parse);

var setData=localStorage.setItem("FirstValue",stringData);  //store the values in local storage.--->go to application and click on the loaclStorage option.
// console.log(setData);

var getData=localStorage.getItem("FirstValue");
console.log(getData);

var sTOo=JSON.parse(getData);
console.log(sTOo.name);


//login form Js

// function functionClick()
// {
//     //alert("yeshhhh")
//     var fname=document.getElementById("fname");
//     console.log(fname.value);
// }

// function functionClick()
// {
//     //alert("yeshhhh")
//     var lname=document.getElementById("lastName");
//     console.log(lname.value);
// }

// function functionClick(){
// var gender=document.getElementById("gender");
// console.log(gender.value);
// }

// function functionClick(){
//     var dob=document.getElementById("dob");
//     console.log(dob.value);
// }

// function functionClick(){
//     var address=document.getElementById("address");
//     console.log(address.value);
// }

// function functionClick(){
//     var password=document.getElementById("password")
//     console.log(password.value);
// }




let fName;
let lName;
let pass;
let button;


let fnameValidation=()=>{
    let btn=document.getElementById("button");
console.log(btn);

var firstName=  document.getElementById("fname").value;
if(firstName.length >=3 && firstName.length <20)
{
    console.log("Name is valid",firstName);
    fName=firstName;
    btn.removeAttribute("disabled");
}
else{
    document.getElementById("fnameError").innerHTML="First Name is Invalid";
    console.log("Name is Invalid");
    btn.setAttribute("disabled"," ");
}
}

let lastnameValidation=()=>{
    let btn=document.getElementById("button");
    console.log(btn);
    var lastName=  document.getElementById("lname").value;
    if(lastName.length >=3 && lastName.length <20)
    {
        console.log("lastName is valid", lastName);
        lName=lastName;
        //if(firstName.length>3){
        btn.removeAttribute("disabled");
       // }
    }
    else{
       // document.getElementById("lnameError").innerHTML="Last Name is Invalid";
        console.log("lastName is Invalid");
        //btn.setAttribute("disabled"," ");
    }
}

let passwordValidation=()=>{
    let btn=document.getElementById("button");
    console.log(btn);
    var password=  document.getElementById("password").value;
    if(password.length >=6 && password.length <=10)
    {
        console.log("Password is valid",password);
        pass=password;
        btn.removeAttribute("disabled");
    }
    else{
        document.getElementById("passwordError").innerHTML="Password is Invalid";
        console.log("password is Invalid");
        btn.setAttribute("disabled"," ");
    }
}

let functionClick=()=>{
    // var work=registration.Working.value;
    console.log(fName,lName,pass);
    let formField={
        firstName:fName,
        lastName:lName,
        password:pass,
        gender:registration.Working.value};
        let string=JSON.stringify(formField)
        let local=localStorage.setItem("form",string);

}











