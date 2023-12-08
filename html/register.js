// header logo animate
var d;
var pos = 0;
var i1;
var flag;
function basic() {
    d = document.getElementById("navlogo");
    if (flag == 0) {
        i1 = setInterval(animate1, 50);
    }
    else {
        i2 = setInterval(animate2, 50);
    }
}

function animate1() {
    pos += 3;
    d.style.marginLeft = pos + "px";
    if (pos >= 450) {
        clearInterval(i1);
        flag = 1;
        basic();
    }
}
function animate2() {
    pos -= 3;
    d.style.marginLeft = pos + "px";
    if (pos <= 3) {
        clearInterval(i2);
        flag = 0;
        basic();
    }
}
//validate empty inputs
function validateForm() {
    let fname = document.forms["reg-form"]["fname"].value;
    let lname = document.forms["reg-form"]["lname"].value;
    let email = document.forms["reg-form"]["email"].value;
    let pass = document.forms["reg-form"]["pass"].value;
    if (fname == "") {
        alert("firstname must be filled out");
        return false;
    }
    else if (lname == "") {
        alert("last name must be filled out");
        return false;
    }
    else if (email == "") {
        alert("email must be filled out");
        return false;
    }
    else if (pass == "") {
        alert("pass must be filled out");
        return false;
    }
}
//validate inputs pattren
function validatefn() {
    let fn = document.forms["reg-form"]["fname"].value;
    if (fn.length >= 4) {
        return true;
    }
    else {
        alert("please enter at least 4 character")
        return false;
    }
}
function validateln() {
    let fn = document.forms["reg-form"]["lname"].value;
    if (fn.length >= 4) {
        return true;
    }
    else {
        alert("please enter at least 4 character")
        return false;
    }
}

function validateEmail() {
    let email = document.forms["reg-form"]["email"].value;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
        return true;
    } else {
        alert("please enter a valid email")
        return false;
    }
}
function validatePassword() {
    let pass = document.forms["reg-form"]["pass"].value;
    if (pass.length >= 8) {
        return true;
    }
    else {
        alert("please enter at least 8 digit password")
        return false;
    }
}

//local storage 

function Save() {
    let fname = document.getElementById("fn");
    let lname = document.getElementById("ln");
    let email = document.getElementById("em");
    let pass = document.getElementById("pass");
    var fn = fname.value;
    localStorage.FirstName = fn;
    var ln = lname.value;
    localStorage.LastName = ln;
    var em = email.value;
    localStorage.Email = em;
    var password = pass.value;
    localStorage.Password = password;
}

//json
var st = {
    "name": "eelu",
    students: [
        { "id": "1", "fname": "ahmed", "lname": "mohamed", "email": "ahmedalkomy71@gmail.com", "pass": "123456789", }
    ]
}
