'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 15;
let fullPrice;
let servicePercentPrice;
let allServicePrices;
let service1;
let service2;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt("Как называется ваш проект", "Калькулятор верстки")
    screens = prompt("Простые, Сложные, Интерективные", "Простые, сложные")

    screenPrice = +prompt('Сколько будет стоить данная работа');

    do {
        screenPrice = +prompt('Сколько будет стоить данная работа')
    } while (!isNumber(screenPrice));

    adaptive = confirm('Нужен ли адвптив на сайте');
}

const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?');
        }

        sum += +prompt('Сколько это будет стоить?')

        while (!isNumber(sum)) {
            sum += +prompt('Сколько это будет стоить?')
        }
    }

    return sum
}

function getFullPrice() {
    return screenPrice + allServicePrices;
}

const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100));
}

const showTypeof = function (variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return 'Даём скидку в 10%';
    } else if (price >= 15000 && price < 30000) {
        return 'Даём скидку в 5%';
    } else if (price < 15000 && price > 0) {
        return 'Скидка не предусмотрена';
    } else if (price <= 0) {
        return 'Что-то пошло не так';
    }
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeof(title);
showTypeof(screenPrice);
showTypeof(adaptive);
showTypeof(allServicePrices);

console.log("allServicePrices", allServicePrices);
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices(servicePercentPrice));
//console.log(servicePercentPrice);
//console.log(allServicePrices);
//console.log(title);
//console.log(screenPrice);
//console.log(adaptive);
//console.log(service1);
//console.log(servicePrice1);
//console.log(service2);
//console.log(servicePrice2);
//console.log(fullPrice);