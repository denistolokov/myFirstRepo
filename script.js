'use strict';

let mainNumber;
let userNumber;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const gameBot = function () {
    mainNumber = Math.floor(Math.random() * 101) + 1;
    console.log(mainNumber);

    function randomNumber() {
        userNumber = +prompt("Угадай число от 1 до 100");

        if (userNumber === null) {
            alert("Игра окончена");
        }

        if (!isNumber(userNumber)) {
            alert("Введи число!");
            randomNumber();
        }

        if (userNumber < 1 || userNumber > 100) {
            randomNumber();
        }
        else if (userNumber > mainNumber) {
            alert("Загаданное число больше");
            randomNumber();
        }
        else if (userNumber < mainNumber) {
            alert("Загаданное число меньше");
            randomNumber();
        }
        else if (userNumber = mainNumber) {
            alert("Поздравляю, Вы угадали!!!");
        }

        return userNumber;

    }

    randomNumber();
}

gameBot();

console.log(userNumber);

// let min = Math.ceil(1);
// let max = Math.floor(100);

// var number = Math.floor(Math.random() * (max - min)) + min
// console.log(number);

// function start() {

//     while (true) {

//         let userNumber = prompt('Enter the number');
//         console.log(typeof (parseInt(userNumber)));

//         if (isNaN(userNumber)) {
//             alert('Enter please number');
//             continue;
//         }

//         if (userNumber === null) {
//             alert('Bye bye :)');
//             break;
//         }

//         if (parseInt(userNumber) === number) {
//             alert('You win');
//             break;
//         } else if (parseInt(userNumber) > number) {
//             alert('Your number more');
//         } else if (parseInt(userNumber) < number) {
//             alert('Your number less');
//         }
//     }
// }

// start();