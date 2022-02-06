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

        if (userNumber < 1 || userNumber > 100 || userNumber === isNumber) {
            randomNumber();
        }

        return userNumber;

    }

    randomNumber();
}

gameBot();

console.log(userNumber);

// function one(x) {
//     function two() {
//         const a = +prompt("Введите число");
//         x--;

//         console.log(a);
//         console.log(x);

//         if (a !== x) {
//             two();
//         }
//     }

//     two()
// }

// one(10);