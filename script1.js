'use strick'

const buttonColor = document.getElementById("btn");
const imputGhangeColor = document.querySelector('input[type = "text"]');

const changeColor = function (event) {
    buttonColor.style.backgroundColor = event.target.value;
};

buttonColor.addEventListener("click", changeColor);
imputGhangeColor.addEventListener("input", changeColor);

const displayButton = document.getElementById("e_btn");
displayButton.style = "display: none;";






