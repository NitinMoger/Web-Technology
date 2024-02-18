let fName;
let lName;
let pass;
let button;


let fnameValidation=()=>{
    let btn=document.getElementById("button");
console.log(btn);

var firstName=  document.getElementById("fname").value;
if(firstName.length >3 && firstName.length <20)
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
    if(lastName.length >3 && lastName.length <20)
    {
        console.log("lastName is valid", lastName);
        lName=lastName;
        btn.removeAttribute("disabled");
    }
    else{
        document.getElementById("lnameError").innerHTML="Last Name is Invalid";
        console.log("lastName is Invalid");
        btn.setAttribute("disabled"," ");
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
