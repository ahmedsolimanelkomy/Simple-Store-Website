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

