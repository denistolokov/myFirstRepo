'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const gameBot = function () {
    let mainNumber = Math.floor(Math.random() * 100) + 1;
    console.log(mainNumber);

    function randomNumber() {
        let userNumber = +prompt("Угадай число от 1 до 100");


        if (userNumber === 0) {
            alert("Игра окончена");
            return userNumber;
        }
        else if (!isNumber(userNumber)) {
            alert("Введи число!");
            randomNumber();
        }
        else if (userNumber < 1 || userNumber > 100) {
            randomNumber();
        }

        else if (userNumber > mainNumber) {
            alert("Загаданное число меньше");
            randomNumber();
        }
        else if (userNumber < mainNumber) {
            alert("Загаданное число больше");
            randomNumber();
        }
        else if (userNumber = mainNumber) {
            alert("Поздравляю, Вы угадали!!!");
        }

    }

    randomNumber();
}

gameBot();

// let min = Math.ceil(1);
// let max = Math.floor(100);

// let number = Math.floor(Math.random() * (max - min)) + min
// console.log(number);

// function start() {

//     while (true) {

//         let userNumber = prompt("Угадай число от 1 до 100");

//         if (isNaN(userNumber)) {
//             alert("Введи число!!!");
//             continue;
//         }

//         if (userNumber === null) {
//             alert("Игра окончена");
//             break;
//         }

//         if (parseInt(userNumber) === number) {
//             alert("Поздравляю, Вы угадали");
//             break;
//         } else if (parseInt(userNumber) > number) {
//             alert("Загаданное число меньше");
//         } else if (parseInt(userNumber) < number) {
//             alert("Загаданное число больше");
//         }
//     }
// }

// start();