var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var button = document.getElementById("color-changer");
color1.setAttribute("value", "#ff0000");
color2.setAttribute("value", "#ffff00");

setGradient();

function setGradient() {
    body.style.background =  "linear-gradient(to right, "+ color1.value
    + ", "+ color2.value +")";

    css.textContent = body.style.background + ';'
};

function genRandomColors() {
   color1.value = '#'+ random()
   color2.value = '#'+ random();
   setGradient();
};

function random() {
    var i = Math.floor(Math.random()*16777215).toString(16);
    return i;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", genRandomColors);