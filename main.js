




let yel = document.getElementById("yellow");
let blu = document.getElementById("blue");
let bla = document.getElementById("black");
let gol = document.getElementById("gold");
let red = document.getElementById("red");
let containerr =document.getElementById("cont");
let img = document.getElementById("img");
let buttons = document.getElementById("butt");

function changetheme(x) {

    img.src= x; 
}

function colors (color) {

    containerr.style.background = color;
}

function changeButton (button){

buttons.style.background = button ;

}