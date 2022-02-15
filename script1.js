'use strick'
// меняем цвет кнопки через input.
const buttonColor = document.getElementById("btn");
const inputChangeColor = document.querySelector('input[type = "text"]');

const changeColor = function (event) {
    buttonColor.style.backgroundColor = event.target.value;
};

buttonColor.addEventListener("click", changeColor);
inputChangeColor.addEventListener("input", changeColor);

//удаляем кнопку внутри круга.
const displayButton = document.getElementById("e_btn");
displayButton.style = "display: none;";

//Меняем height и width circle
const inputRange = document.querySelector('input[type = "range"]');
console.log(inputRange);
const circle = document.querySelector("#circle");

const changeWidth = function () {
    circle.style.width = inputRange.value + '%';
    circle.style.height = inputRange.value + '%';
};
changeWidth();

inputRange.addEventListener("input", changeWidth);
circle.addEventListener("input", changeWidth);