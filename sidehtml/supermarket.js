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



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}