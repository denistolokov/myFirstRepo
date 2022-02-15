'use strick'
// меняем цвет square через input.
const inputText = document.querySelector('input[type = "text"]');
const btn = document.getElementById("btn");
const square = document.getElementById("square");

const changeColor = function () {
    let newColor = inputText.value;
    square.style.background = newColor;
};
changeColor()

btn.addEventListener("click", changeColor);
square.addEventListener("input", changeColor);

//удаляем кнопку внутри круга.
const displayButton = document.getElementById("e_btn");
displayButton.style = "display: none;";

//Меняем height и width circle
const inputRange = document.querySelector('input[type = "range"]');
const circle = document.querySelector("#circle");
const radius = document.getElementById("range-span")

const changeWidth = function () {
    circle.style.width = inputRange.value + '%';
    circle.style.height = inputRange.value + '%';
    radius.innerHTML = inputRange.value + '%';
};
changeWidth();

inputRange.addEventListener("input", changeWidth);
circle.addEventListener("input", changeWidth);