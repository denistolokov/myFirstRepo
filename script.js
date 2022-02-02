'use strict';

let title = prompt('Как называется ваш проект');
let screens = prompt('Простые, Сложные, Интерективные');
let screenPrice = +prompt('Сколько будет стоить данная работа');
let rollback = 15;
let adaptive = confirm('Нужен ли адвптив на сайте');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice * (rollback / 100));
let allServicePrices;

const getAllServicePrices = function (a, b) {
    return a + b;
}
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(a, b) {
    return a + b;
}
fullPrice = getFullPrice(screenPrice, allServicePrices);

function getTitle(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const getServicePercentPrices = function (fullPrice, servicePercentPrice) {
    return Math.ceil(fullPrice - servicePercentPrice);
}
servicePercentPrice = getServicePercentPrices(fullPrice, servicePercentPrice);

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

showTypeof(title);
showTypeof(screenPrice);
showTypeof(adaptive);

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices());
console.log(servicePercentPrice);
//console.log(allServicePrices);
//console.log(title);
//console.log(screenPrice);
//console.log(adaptive);
//console.log(service1);
//console.log(servicePrice1);
//console.log(service2);
//console.log(servicePrice2);
//console.log(fullPrice);