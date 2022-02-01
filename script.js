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

if (fullPrice >= 30000) {
    alert('Даём скидку в 10%');
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    alert('Даём скидку в 5%');
} else if (fullPrice < 15000 && fullPrice > 0) {
    alert('Скидка не предусмотрена');
} else if (fullPrice <= 0) {
    alert('Что-то пошло не так');
}

console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(adaptive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(fullPrice);
console.log(servicePercentPrice);
