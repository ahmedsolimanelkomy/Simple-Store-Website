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
    let x = document.forms["myForm"]["email"].value;
    let y = document.forms["myForm"]["password"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    else if (y == "") {
        alert("Password must be filled out");
        return false;
    }
}
//validate email pattren
function validateEmail() {
    let email = document.forms["myForm"]["email"].value;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
        return true;
    } else {
        alert("please enter a valid email")
        return false;
    }
}
//validate password pattren
function validatePassword() {
    let pass = document.forms["myForm"]["password"].value;
    if (pass.length >= 8) {
        return true;
    }
    else {
        alert("please enter at least 8 digit password")
        return false;
    }
}
